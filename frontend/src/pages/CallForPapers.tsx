import { Link } from "react-router-dom";
import { FileText, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CallForPapers = () => {
  const topics = [
    "Artificial Intelligence and Machine Learning",
    "Deep Learning and Neural Networks",
    "Internet of Things (IoT) and Smart Systems",
    "Cloud Computing and Edge Computing",
    "Cybersecurity and Information Security",
    "Data Science and Big Data Analytics",
    "Blockchain Technology and Applications",
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "5G and Next-Generation Communication Systems",
    "Software Engineering and Development",
    "Mobile and Wireless Networks",
    "Quantum Computing",
    "Human-Computer Interaction",
    "Robotics and Automation",
    "Network Security and Privacy",
  ];

  const dates = [
    {
      event: "Paper Submission Deadline",
      date: "December 15, 2024",
      highlight: false,
    },
    {
      event: "Notification of Acceptance",
      date: "January 20, 2025",
      highlight: false,
    },
    {
      event: "Camera-Ready Paper Submission",
      date: "February 10, 2025",
      highlight: false,
    },
    {
      event: "Early Bird Registration Deadline",
      date: "February 20, 2025",
      highlight: false,
    },
    {
      event: "Final Registration Deadline",
      date: "February 25, 2025",
      highlight: false,
    },
    { event: "Conference Dates", date: "March 14–15, 2025", highlight: true },
  ];

  return (
    <div className="min-h-screen flex flex-col text-[1.05rem] md:text-base">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <FileText size={52} />
              <h1 className="text-5xl md:text-6xl font-bold mt-2">
                Call for Papers
              </h1>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Submit Your Original Research to ICETCCT 2025
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl leading-relaxed">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Scope and Topics */}
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
                    Scope and Topics
                  </h2>
                  <p className="text-muted-foreground mb-6 text-center">
                    ICETCCT 2025 invites original research papers, review
                    articles, and case studies on topics related to emerging
                    trends in Computing and Communication Technologies. Papers
                    should present novel approaches, methodologies, algorithms,
                    or applications in the following areas (but not limited to):
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle
                          size={22}
                          className="text-primary mt-1 flex-shrink-0"
                        />
                        <span className="text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submission Guidelines */}
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
                    Submission Guidelines
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        Paper Format
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Papers must be written in English</li>
                        <li>
                          Follow IEEE double-column format (US Letter size)
                        </li>
                        <li>Maximum length: 6 pages (including references)</li>
                        <li>
                          Use IEEE conference paper template available on IEEE
                          website
                        </li>
                        <li>
                          Papers must be original and not submitted elsewhere
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        Review Process
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          All submissions will undergo a rigorous peer-review
                          process
                        </li>
                        <li>
                          Each paper will be reviewed by at least two experts in
                          the field
                        </li>
                        <li>
                          Authors will be notified of acceptance/rejection via
                          email
                        </li>
                        <li>
                          Accepted papers must be presented at the conference
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        Publication
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Accepted and presented papers will be published in
                          IEEE Xplore Digital Library
                        </li>
                        <li>
                          Selected papers will be considered for publication in
                          IEEE journals
                        </li>
                        <li>
                          All papers must be presented by at least one
                          registered author
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Plagiarism Policy */}
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Plagiarism Policy
                  </h3>
                  <p className="text-muted-foreground">
                    All submitted papers will be checked for plagiarism using
                    standard tools. Papers found to have significant similarity
                    with previously published work will be rejected without
                    review. We expect all authors to follow IEEE's ethical
                    guidelines for publication.
                  </p>
                </div>

                {/* Important Dates Section */}
                <div className="pt-16 border-t text-center">
                  <div className="flex flex-col items-center mb-8">
                    <Calendar size={40} className="text-primary mb-2" />
                    <h2 className="text-4xl font-bold text-foreground">
                      Important Dates
                    </h2>
                  </div>

                  <div className="space-y-6 max-w-3xl mx-auto">
                    {dates.map((item, index) => (
                      <Card
                        key={index}
                        className={`border-l-4 transition-all hover:shadow-lg ${
                          item.highlight
                            ? "border-l-primary bg-secondary"
                            : "border-l-muted hover:border-l-primary"
                        }`}
                      >
                        <CardContent className="p-6 text-center">
                          <h3
                            className={`text-2xl font-semibold mb-2 ${
                              item.highlight
                                ? "text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {item.event}
                          </h3>
                          <div
                            className={`${
                              item.highlight
                                ? "text-2xl font-bold text-primary"
                                : "text-xl font-semibold text-foreground"
                            }`}
                          >
                            {item.date}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-12 bg-secondary p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Time Zone Information
                    </h2>
                    <p className="text-muted-foreground mb-2">
                      All deadlines are 11:59 PM IST (Indian Standard Time)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      UTC +5:30 | GMT +5:30
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-center text-xl">
                      Submit Your Paper
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Submit your research paper through EasyChair submission
                      system
                    </p>
                    <Button className="w-full" size="lg">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Submit via EasyChair
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href="https://www.ieee.org/conferences/publishing/templates.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download IEEE Template
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Have questions about paper submission? Contact our
                      technical program committee.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CallForPapers;
