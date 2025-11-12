import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Auth = () => {
  const [mode, setMode] = useState<"initial" | "signin" | "signup">("initial");
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/registration");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-secondary/30 to-background text-foreground">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        {mode === "initial" && (
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur max-w-md w-full text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Welcome to ICISD 2026
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Sign in or create an account to continue
              </p>
            </CardHeader>
            <CardContent className="pt-8 space-y-4">
              <Button
                onClick={() => setMode("signin")}
                className="w-full py-6 text-base font-semibold"
              >
                Sign In
              </Button>
              <Button
                onClick={() => setMode("signup")}
                variant="outline"
                className="w-full py-6 text-base font-semibold"
              >
                Create Account
              </Button>
            </CardContent>
          </Card>
        )}

        {mode === "signin" && (
          <div className="max-w-md w-full bg-white/95 rounded-xl p-6 shadow-lg">
            <SignIn
              routing="path"
              path="/auth"
              appearance={{
                elements: {
                  card: "shadow-none border-none bg-transparent",
                  formButtonPrimary: "bg-primary hover:bg-primary/90",
                },
              }}
              // 👇 only allow email and password, no phone
              signInOptions={{
                identifier: "email_address",
              }}
              afterSignInUrl="/registration"
            />
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <button
                className="text-primary font-semibold hover:underline"
                onClick={() => setMode("signup")}
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {mode === "signup" && (
          <div className="max-w-md w-full bg-white/95 rounded-xl p-6 shadow-lg">
            <SignUp
              routing="path"
              path="/auth"
              appearance={{
                elements: {
                  card: "shadow-none border-none bg-transparent",
                  formButtonPrimary: "bg-primary hover:bg-primary/90",
                },
              }}
              // 👇 remove phone number field, only email + password
              signUpFields={[
                { name: "email_address", required: true },
                { name: "password", required: true },
              ]}
              afterSignUpUrl="/registration"
            />
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <button
                className="text-primary font-semibold hover:underline"
                onClick={() => setMode("signin")}
              >
                Sign in
              </button>
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
