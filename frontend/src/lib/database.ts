// User database interface
export interface User {
  id: string;
  email: string;
  name: string;
  password: string; // In production, this should be hashed
  createdAt: string;
  registrationCompleted: boolean;
  lastLogin?: string;
}

// In-memory database (in production, replace with backend API calls)
class UserDatabase {
  private users: User[] = [];
  private storageKey = "icisd_users";

  constructor() {
    this.loadFromStorage();
    this.initializeDefaultUsers();
  }

  // Load users from localStorage
  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.users = JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error loading users from storage:", error);
      this.users = [];
    }
  }

  // Save users to localStorage
  private saveToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.users));
    } catch (error) {
      console.error("Error saving users to storage:", error);
    }
  }

  // Initialize with default test users
  private initializeDefaultUsers(): void {
    if (this.users.length === 0) {
      this.users = [
        {
          id: "user-1",
          email: "user@example.com",
          name: "John Doe",
          password: "password123", // Test user
          createdAt: new Date(
            Date.now() - 7 * 24 * 60 * 60 * 1000
          ).toISOString(),
          registrationCompleted: true,
          lastLogin: new Date(
            Date.now() - 2 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
        {
          id: "user-2",
          email: "test@icisd.com",
          name: "Jane Smith",
          password: "test123", // Test user
          createdAt: new Date(
            Date.now() - 5 * 24 * 60 * 60 * 1000
          ).toISOString(),
          registrationCompleted: true,
          lastLogin: new Date(
            Date.now() - 1 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
      ];
      this.saveToStorage();
    }
  }

  // Find user by email
  public findUserByEmail(email: string): User | undefined {
    return this.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  // Check if email exists
  public emailExists(email: string): boolean {
    return this.findUserByEmail(email) !== undefined;
  }

  // Verify user credentials
  public verifyCredentials(
    email: string,
    password: string
  ): { success: boolean; user?: User; error?: string } {
    const user = this.findUserByEmail(email);

    if (!user) {
      return {
        success: false,
        error: "User not found. Please create an account.",
      };
    }

    // Simple password verification (in production, use bcrypt or similar)
    if (user.password !== password) {
      return {
        success: false,
        error: "Invalid password. Please try again.",
      };
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    this.saveToStorage();

    return {
      success: true,
      user: { ...user }, // Return copy without password
    };
  }

  // Register new user
  public registerUser(
    email: string,
    name: string,
    password: string
  ): { success: boolean; user?: User; error?: string } {
    // Check if email already exists
    if (this.emailExists(email)) {
      return {
        success: false,
        error: "Email already registered. Please sign in instead.",
      };
    }

    // Validate inputs
    if (!email || !name || !password) {
      return {
        success: false,
        error: "All fields are required.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        error: "Password must be at least 6 characters long.",
      };
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: email.toLowerCase(),
      name,
      password, // In production, hash this!
      createdAt: new Date().toISOString(),
      registrationCompleted: false,
      lastLogin: new Date().toISOString(),
    };

    this.users.push(newUser);
    this.saveToStorage();

    return {
      success: true,
      user: { ...newUser },
    };
  }

  // Update user registration status
  public updateRegistrationStatus(email: string, completed: boolean): boolean {
    const user = this.findUserByEmail(email);
    if (!user) return false;

    user.registrationCompleted = completed;
    this.saveToStorage();
    return true;
  }

  // Get user by email with registration status
  public getUserRegistrationStatus(email: string): {
    registered: boolean;
    completed: boolean;
  } {
    const user = this.findUserByEmail(email);
    return {
      registered: !!user,
      completed: user?.registrationCompleted ?? false,
    };
  }

  // Get all users (for admin purposes)
  public getAllUsers(): User[] {
    return this.users.map(({ password, ...user }) => ({
      ...user,
      password: "***",
    }));
  }

  // Delete user (for testing)
  public deleteUser(email: string): boolean {
    const index = this.users.findIndex(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (index === -1) return false;

    this.users.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Clear all users (for testing)
  public clearAllUsers(): void {
    this.users = [];
    localStorage.removeItem(this.storageKey);
  }
}

// Export singleton instance
export const userDatabase = new UserDatabase();

// Export the class for testing
export default UserDatabase;
