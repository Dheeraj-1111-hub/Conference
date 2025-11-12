import { SignedIn, SignedOut, useUser, UserProfile } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, BarChart3, User } from "lucide-react";

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [submissions, setSubmissions] = useState<
    { title: string; authors: string; topic: string; fileName: string; date: string; status: string }[]
  >([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("submissions") || "[]");
    setSubmissions(stored);
  }, []);

  const total = submissions.length;
  const underReview = submissions.filter((s) => s.status === "Under Review").length;
  const accepted = submissions.filter((s) => s.status === "Accepted").length;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-secondary/30 to-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-12">
        <SignedOut>
          <div className="flex flex-col items-center justify-center text-center py-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold mb-4 text-foreground"
            >
              Access Denied
            </motion.h2>
            <p className="text-muted-foreground max-w-md mb-8">
              Please sign in to access your author profile and submission dashboard.
            </p>
            <Button onClick={() => navigate("/auth")} className="px-6 py-2 text-base">
              Go to Sign In
            </Button>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="max-w-6xl mx-auto">
            <UserProfile
              appearance={{
                variables: { colorPrimary: "#f97316" }, // Orange theme for consistency
                elements: {
                  rootBox: "shadow-lg rounded-2xl border border-border bg-white/95 backdrop-blur-md",
                  card: "rounded-xl overflow-hidden",
                },
              }}
            >
              {/* Dashboard Tab */}
              <UserProfile.Page
                label="Dashboard"
                url="dashboard"
                labelIcon={<BarChart3 className="w-4 h-4" />}
              >
                <div className="p-8 bg-gradient-to-br from-white via-gray-50 to-white min-h-[600px] rounded-2xl shadow-md">
                  {/* Header Section */}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                  >
                    <h1 className="text-4xl font-bold text-primary mb-3">
                      My Dashboard
                    </h1>
                    <p className="text-muted-foreground text-lg">
                      Welcome back, {user?.firstName || "Researcher"} 👋
                    </p>
                  </motion.div>

                  {/* Stats Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10"
                  >
                    <Card className="text-center bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-lg transition-all duration-300">
                      <CardContent className="py-8">
                        <BarChart3 className="mx-auto text-blue-600 mb-3" size={28} />
                        <h3 className="text-3xl font-bold">{total}</h3>
                        <p className="text-sm text-muted-foreground">Total Papers</p>
                      </CardContent>
                    </Card>

                    <Card className="text-center bg-gradient-to-br from-yellow-50 to-white border-yellow-100 hover:shadow-lg transition-all duration-300">
                      <CardContent className="py-8">
                        <FileText className="mx-auto text-yellow-600 mb-3" size={28} />
                        <h3 className="text-3xl font-bold">{underReview}</h3>
                        <p className="text-sm text-muted-foreground">Under Review</p>
                      </CardContent>
                    </Card>

                    <Card className="text-center bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-lg transition-all duration-300">
                      <CardContent className="py-8">
                        <FileText className="mx-auto text-green-600 mb-3" size={28} />
                        <h3 className="text-3xl font-bold">{accepted}</h3>
                        <p className="text-sm text-muted-foreground">Accepted Papers</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Submissions Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                      <CardHeader className="flex items-center gap-2 border-b pb-4">
                        <FileText className="text-primary" />
                        <CardTitle className="text-2xl font-semibold">
                          Submitted Papers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {submissions.length === 0 ? (
                          <div className="text-center py-8">
                            <p className="text-muted-foreground mb-4">
                              You haven’t submitted any papers yet.
                            </p>
                            <Button
                              variant="default"
                              onClick={() => navigate("/submit-paper")}
                              className="bg-primary hover:bg-primary/90 text-white"
                            >
                              Submit Now
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-4 mt-4">
                            {submissions.map((sub, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:justify-between md:items-center"
                              >
                                <div>
                                  <h4 className="font-semibold text-lg text-foreground">
                                    {sub.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {sub.authors} • {sub.topic}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Uploaded: {sub.date}
                                  </p>
                                </div>
                                <div className="mt-3 md:mt-0 flex items-center gap-3">
                                  <span
                                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                                      sub.status === "Under Review"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : sub.status === "Accepted"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {sub.status}
                                  </span>
                                  <Button
                                    variant="outline"
                                    onClick={() =>
                                      alert(`Tracking details for "${sub.title}" coming soon.`)
                                    }
                                  >
                                    Track
                                  </Button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </UserProfile.Page>
            </UserProfile>
          </div>
        </SignedIn>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
