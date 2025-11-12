import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Mail,
  ArrowRight,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useUserService } from "@/hooks/use-user-service";

const Auth = () => {
  const [step, setStep] = useState<"initial" | "login" | "register">("initial");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirm: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  const userService = useUserService();

  // Check if user is already logged in
  useEffect(() => {
    if (userService.isLoggedIn) {
      toast({
        title: "Already signed in",
        description: "Redirecting to registration page...",
      });
      setTimeout(() => navigate("/registration"), 500);
    }
  }, [userService.isLoggedIn, navigate, toast]);

  const checkEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { exists, completed } = await userService.checkEmail(email);

      if (exists) {
        // Check if already registered and completed
        if (completed) {
          toast({
            title: "Account found",
            description: "Redirecting to home page...",
          });
          setTimeout(() => navigate("/"), 500);
          return;
        }

        // Account exists but registration not completed
        toast({
          title: "Account found",
          description: "Please sign in with your password.",
        });
        setStep("login");
      } else {
        // New user
        toast({
          title: "New user",
          description: "Let's create your account.",
        });
        setStep("register");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to check email. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.password || !form.confirm) {
      toast({
        title: "Missing fields",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (form.password.length < 6) {
      toast({
        title: "Weak password",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = await userService.register(
        email,
        form.name,
        form.password,
        form.confirm
      );

      if (result.success) {
        toast({
          title: "Account created!",
          description: "Welcome to ICISD 2026. Redirecting...",
        });
        setTimeout(() => navigate("/registration"), 700);
      } else {
        toast({
          title: "Registration failed",
          description: result.error || "An error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.password) {
      toast({
        title: "Password required",
        description: "Please enter your password.",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = await userService.signIn(email, form.password);

      if (result.success) {
        toast({
          title: "Signed in!",
          description: "Welcome back! Redirecting...",
        });

        // If registration was already completed, go to home; otherwise to registration
        const redirectPath = result.shouldRedirectToHome
          ? "/"
          : "/registration";
        setTimeout(() => navigate(redirectPath), 700);
      } else {
        toast({
          title: "Sign in failed",
          description: result.error || "Invalid credentials.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-secondary/30 to-background text-foreground">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-12">
        {step === "initial" && (
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
                <CardTitle className="text-center text-3xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Welcome to ICISD 2026
                  </span>
                </CardTitle>
                <p className="text-center text-muted-foreground mt-2 text-sm">
                  Sign in or create an account
                </p>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={checkEmail} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Email Address
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                      <Mail size={18} className="text-primary" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-base font-semibold"
                    disabled={userService.isLoading}
                  >
                    {userService.isLoading ? (
                      <>
                        <Loader size={18} className="mr-2 animate-spin" />
                        Checking...
                      </>
                    ) : (
                      <>
                        Continue <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    We'll check if you have an account and guide you through the
                    process.
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-center text-sm">
                    <div className="space-y-2">
                      <div className="text-primary font-bold">500+</div>
                      <div className="text-muted-foreground">Attendees</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary font-bold">100+</div>
                      <div className="text-muted-foreground">Papers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === "login" && (
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
                <CardTitle className="text-center text-2xl font-bold">
                  Sign In
                </CardTitle>
                <p className="text-center text-muted-foreground mt-2 text-sm">
                  Welcome back to ICISD 2026
                </p>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={onSignIn} className="space-y-4">
                  <div>
                    <div className="px-4 py-3 bg-secondary rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <CheckCircle2 size={18} />
                        {email}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Password
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                      <Lock size={18} className="text-primary" />
                      <input
                        type="password"
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        placeholder="Enter your password"
                        className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="rounded cursor-pointer"
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-base font-semibold"
                    disabled={userService.isLoading}
                  >
                    {userService.isLoading ? (
                      <>
                        <Loader size={18} className="mr-2 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>

                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setStep("initial")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Use a different email
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === "register" && (
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
                <CardTitle className="text-center text-2xl font-bold">
                  Create Account
                </CardTitle>
                <p className="text-center text-muted-foreground mt-2 text-sm">
                  Join ICISD 2026 community
                </p>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={onRegister} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Full Name
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                      <User size={18} className="text-primary" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="px-4 py-3 bg-secondary rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Mail size={16} />
                        {email}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Password
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                      <Lock size={18} className="text-primary" />
                      <input
                        type="password"
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        placeholder="Create a password"
                        className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Confirm Password
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                      <Lock size={18} className="text-primary" />
                      <input
                        type="password"
                        value={form.confirm}
                        onChange={(e) =>
                          setForm({ ...form, confirm: e.target.value })
                        }
                        placeholder="Confirm password"
                        className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input
                      id="agree"
                      type="checkbox"
                      className="rounded cursor-pointer mt-1"
                    />
                    <label htmlFor="agree" className="cursor-pointer">
                      I agree to the{" "}
                      <Link to="#" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-base font-semibold"
                    disabled={userService.isLoading}
                  >
                    {userService.isLoading ? (
                      <>
                        <Loader size={18} className="mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>

                  <div className="text-center text-sm">
                    Wrong email?{" "}
                    <button
                      type="button"
                      onClick={() => setStep("initial")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Try another
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
