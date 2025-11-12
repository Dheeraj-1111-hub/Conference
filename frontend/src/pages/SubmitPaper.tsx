import { useState } from "react";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SubmitPaper = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    topic: "",
    file: null as File | null,
  });

  const [submissions, setSubmissions] = useState<
    {
      title: string;
      authors: string;
      topic: string;
      fileName: string;
      date: string;
    }[]
  >([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as any;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.authors ||
      !formData.topic ||
      !formData.file
    ) {
      alert(
        "Please fill all the fields and upload your paper before submitting."
      );
      return;
    }

    // Simulate saving submission
    const newSubmission = {
      title: formData.title,
      authors: formData.authors,
      topic: formData.topic,
      fileName: formData.file.name,
      date: new Date().toLocaleDateString(),
      status: "Under Review",
    };

    setSubmissions((prev) => [...prev, newSubmission]);

    // Save to localStorage
    const updated = [...submissions, newSubmission];
    localStorage.setItem("submissions", JSON.stringify(updated));

    // Clear form
    setFormData({
      title: "",
      authors: "",
      topic: "",
      file: null,
    });

    alert("Paper submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-secondary/30 to-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-12">
        <SignedOut>
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Access Denied
            </h2>
            <p className="text-muted-foreground mb-8">
              Please sign in to submit your paper.
            </p>
            <Button onClick={() => navigate("/auth")} className="px-6 py-2">
              Go to Sign In
            </Button>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">
                  Paper Submission Form
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Welcome, {user?.firstName}! Please provide your paper details
                  below.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Paper Title */}
                  <div>
                    <label className="block font-medium mb-2 text-gray-700">
                      Paper Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter your paper title"
                      className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                  </div>

                  {/* Authors */}
                  <div>
                    <label className="block font-medium mb-2 text-gray-700">
                      Author(s)
                    </label>
                    <input
                      type="text"
                      name="authors"
                      value={formData.authors}
                      onChange={handleChange}
                      placeholder="Enter author names (comma-separated)"
                      className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                  </div>

                  {/* Topic */}
                  <div>
                    <label className="block font-medium mb-2 text-gray-700">
                      Select Topic
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-primary outline-none"
                      required
                    >
                      <option value="">-- Choose Topic --</option>
                      <option value="AI and Intelligent Systems">
                        Artificial Intelligence and Intelligent Systems
                      </option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Data Science">
                        Data Science and Analytics
                      </option>
                      <option value="IoT">Internet of Things (IoT)</option>
                      <option value="Cybersecurity">
                        Cybersecurity and Privacy
                      </option>
                      <option value="Healthcare Informatics">
                        Healthcare Informatics
                      </option>
                      <option value="Smart Cities">Smart Cities</option>
                    </select>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block font-medium mb-2 text-gray-700">
                      Upload Paper (.pdf)
                    </label>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf"
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-3 bg-white file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button type="submit" className="px-8 py-3 text-lg">
                      Submit Paper
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Display Submitted Papers */}
            {submissions.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                  Your Submissions
                </h3>
                <div className="space-y-4">
                  {submissions.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-lg bg-white shadow-sm flex flex-col md:flex-row md:justify-between md:items-center"
                    >
                      <div>
                        <h4 className="font-semibold text-lg">{sub.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {sub.authors} • {sub.topic}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Uploaded: {sub.date}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <Button
                          variant="outline"
                          onClick={() => alert(`Tracking feature coming soon!`)}
                        >
                          Track Status
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SignedIn>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitPaper;
