import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Call for Papers", path: "/call-for-papers" },
    { name: "Speakers", path: "/speakers" },
    { name: "Committee", path: "/committee" },
    { name: "Conference Details", path: "/schedule" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-primary rounded flex items-center justify-center text-white font-extrabold text-sm leading-none">
              <span className="block">ICISD</span>
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-foreground">
                ICISD 2026
              </div>
              <div className="text-xs text-muted-foreground">
                March 14–15, Chennai
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section — Auth or User */}
          <div className="hidden lg:flex items-center space-x-4">
            <SignedOut>
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Sign In</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/auth">Register</Link>
              </Button>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-2">
                {user?.firstName && (
                  <span className="text-sm font-medium text-muted-foreground">
                    Hi, {user.firstName}
                  </span>
                )}
                <UserButton
                  afterSignOutUrl="/"
                  userProfileMode="navigation"
                  userProfileUrl="/profile"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                      userButtonPopoverCard:
                        "rounded-lg shadow-lg border border-border bg-white/95",
                      userButtonPopoverActionButton:
                        "text-sm hover:bg-secondary rounded-md transition-colors",
                    },
                    variables: {
                      colorPrimary: "#f97316",
                    },
                  }}
                  userProfileProps={{
                    additionalMenuItems: [
                      {
                        label: "My Dashboard",
                        onClick: () => navigate("/dashboard"),
                      },
                    ],
                  }}
                />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <SignedOut>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                      Register
                    </Link>
                  </Button>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center justify-between px-3 py-2">
                    <div className="text-sm">
                      <div className="font-semibold">
                        {user?.fullName || "Conference Attendee"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {user?.primaryEmailAddress?.emailAddress}
                      </div>
                    </div>
                    <UserButton
                      afterSignOutUrl="/"
                      userProfileMode="navigation"
                      userProfileUrl="/profile"
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8",
                          userButtonPopoverCard:
                            "rounded-lg shadow-lg border border-border",
                        },
                        variables: {
                          colorPrimary: "#f97316",
                        },
                      }}
                      userProfileProps={{
                        additionalMenuItems: [
                          {
                            label: "My Dashboard",
                            onClick: () => {
                              setIsMenuOpen(false);
                              navigate("/dashboard");
                            },
                          },
                        ],
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
