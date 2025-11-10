import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, ArrowRight, Globe, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "register") {
      if (!form.name || !form.email || !form.password) {
        toast({
          title: "Missing fields",
          description: "Please complete all required fields.",
          variant: "destructive",
        });
        return;
      }
      if (form.password !== form.confirm) {
        toast({
          title: "Password mismatch",
          description: "Passwords do not match.",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Registered",
        description: "Account created. You can now log in.",
      });
      setMode("login");
      return;
    }

    // login
    if (!form.email || !form.password) {
      toast({
        title: "Missing fields",
        description: "Please enter email and password.",
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Logged in", description: "Welcome back! Redirecting..." });
    // mock redirect to registration confirmation or dashboard
    setTimeout(() => navigate("/registration"), 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-muted-foreground">
              {mode === "login"
                ? "Sign in to manage your registration and paper submissions."
                : "Join ICISD 2026 — create an account to register, submit papers and receive updates."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant={mode === "login" ? "secondary" : "outline"}
                onClick={() => setMode("login")}
              >
                Login
              </Button>
              <Button
                variant={mode === "register" ? "secondary" : "outline"}
                onClick={() => setMode("register")}
              >
                Register
              </Button>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              By creating an account you agree to our{" "}
              <Link to="#" className="text-primary underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">
                {mode === "login"
                  ? "Sign in to your account"
                  : "Create a new account"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                {mode === "register" && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Full name
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-secondary rounded">
                        <User size={16} />
                      </div>
                      <Input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-secondary rounded">
                      <User size={16} />
                    </div>
                    <Input
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-secondary rounded">
                      <Lock size={16} />
                    </div>
                    <Input
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      placeholder="Enter password"
                      type="password"
                    />
                  </div>
                </div>

                {mode === "register" && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Confirm password
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-secondary rounded">
                        <Lock size={16} />
                      </div>
                      <Input
                        value={form.confirm}
                        onChange={(e) =>
                          setForm({ ...form, confirm: e.target.value })
                        }
                        placeholder="Confirm password"
                        type="password"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input id="remember" type="checkbox" className="rounded" />
                    <label
                      htmlFor="remember"
                      className="text-sm text-muted-foreground"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="#" className="text-sm text-primary">
                    Forgot password?
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Button type="submit" className="w-full">
                    {mode === "login" ? "Sign in" : "Create account"}
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full hidden sm:inline-flex"
                  >
                    Sign in with{" "}
                    <span className="ml-2">
                      <Globe size={16} />
                    </span>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Or continue with
                </div>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline">
                    <Globe size={16} className="mr-2" /> Google
                  </Button>
                  <Button variant="outline">
                    <Github size={16} className="mr-2" /> GitHub
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
