import { useState, useCallback } from "react";
import { userDatabase, type User } from "@/lib/database";

export interface AuthResponse {
  success: boolean;
  user?: Omit<User, "password">;
  error?: string;
  shouldRedirectToHome?: boolean;
}

export const useUserService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<Omit<User, "password"> | null>(
    () => {
      // Try to restore user from sessionStorage on mount
      try {
        const stored = sessionStorage.getItem("current_user");
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    }
  );

  // Check email - determines if user should sign in or register
  const checkEmail = useCallback(
    async (email: string): Promise<{ exists: boolean; completed: boolean }> => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        const exists = userDatabase.emailExists(email);
        const { completed } = userDatabase.getUserRegistrationStatus(email);

        return { exists, completed };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Register new user
  const register = useCallback(
    async (
      email: string,
      name: string,
      password: string,
      confirmPassword: string
    ): Promise<AuthResponse> => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Validate passwords match
        if (password !== confirmPassword) {
          return {
            success: false,
            error: "Passwords do not match.",
          };
        }

        const result = userDatabase.registerUser(email, name, password);

        if (result.success && result.user) {
          const userWithoutPassword = { ...result.user };
          setCurrentUser(userWithoutPassword);
          sessionStorage.setItem(
            "current_user",
            JSON.stringify(userWithoutPassword)
          );

          return {
            success: true,
            user: userWithoutPassword,
          };
        }

        return {
          success: false,
          error: result.error,
        };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Sign in existing user
  const signIn = useCallback(
    async (email: string, password: string): Promise<AuthResponse> => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const result = userDatabase.verifyCredentials(email, password);

        if (result.success && result.user) {
          const { password: _, ...userWithoutPassword } = result.user;
          setCurrentUser(userWithoutPassword);
          sessionStorage.setItem(
            "current_user",
            JSON.stringify(userWithoutPassword)
          );

          // Check if registration is completed
          const { completed } = userDatabase.getUserRegistrationStatus(email);

          return {
            success: true,
            user: userWithoutPassword,
            shouldRedirectToHome: completed, // If registration already completed, go to home
          };
        }

        return {
          success: false,
          error: result.error,
        };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Update registration status
  const updateRegistrationComplete = useCallback(
    async (email: string): Promise<boolean> => {
      try {
        const success = userDatabase.updateRegistrationStatus(email, true);

        if (success && currentUser) {
          // Update current user in session
          const updated = { ...currentUser, registrationCompleted: true };
          setCurrentUser(updated);
          sessionStorage.setItem("current_user", JSON.stringify(updated));
        }

        return success;
      } catch {
        return false;
      }
    },
    [currentUser]
  );

  // Logout
  const logout = useCallback(() => {
    setCurrentUser(null);
    sessionStorage.removeItem("current_user");
  }, []);

  // Check if user is logged in
  const isLoggedIn = !!currentUser;

  return {
    // State
    currentUser,
    isLoading,
    isLoggedIn,

    // Methods
    checkEmail,
    register,
    signIn,
    updateRegistrationComplete,
    logout,
  };
};
