import { Link } from "react-router-dom";
import { FileText, CheckCircle, Calendar } from "lucide-react";
import { motion, Variants } from "framer-motion";
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

  const dateVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col text-[1.05rem] md:text-base">
      <Navigation />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-14">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              
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
        <section className="py-20 flex-1 flex flex-col">
          <div className="container mx-auto px-6 max-w-7xl leading-relaxed flex-1 flex flex-col items-center">
            <div className="w-full max-w-5xl flex flex-col items-center gap-16">
              {/* Left Section */}
              <div className="w-full space-y-20">
                {/* Scope and Topics */}
                <div className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:w-32 after:bg-primary/30 pb-16">
                  <h2 className="text-4xl font-bold text-center mb-6">
                    Scope and Topics
                  </h2>
                  <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                    ICETCCT 2025 invites original research papers, review
                    articles, and case studies on topics related to emerging
                    trends in Computing and Communication Technologies.
                  </p>
                  <div className="grid grid-cols-1 gap-5 w-full max-w-4xl mx-auto mt-10 divide-y divide-gray-100 pl-8 md:pl-16">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-start gap-3 w-full pt-5 first:pt-0"
                      >
                        <div className="flex items-center gap-3 md:w-1/2 justify-center md:justify-start pl-4">
                          <CheckCircle
                            size={20}
                            className="text-primary flex-shrink-0"
                          />
                          <span className="text-gray-600 font-medium">
                            {topics[i]}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 md:w-1/2 justify-center md:justify-start pl-4 md:pl-16">
                          {topics[i + 8] && (
                            <>
                              <CheckCircle
                                size={20}
                                className="text-primary flex-shrink-0"
                              />
                              <span className="text-gray-600 font-medium">
                                {topics[i + 8]}
                              </span>
                            </>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Submission Guidelines */}
                <div className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:w-32 after:bg-primary/30 pb-16">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    Submission Guidelines
                  </h2>

                  <div className="text-left text-lg text-gray-700 space-y-12 leading-relaxed max-w-4xl mx-auto">
                    <motion.div
                      className="w-full bg-gradient-to-r from-blue-50/50 to-transparent p-8 rounded-lg border-l-4 border-primary/30"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <FileText size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Paper Format
                          </h3>
                          <ul className="list-none space-y-3 text-gray-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>Papers must be written in English</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Follow IEEE double-column format (US Letter
                                size)
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Maximum length: 6 pages (including references)
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>Use IEEE conference paper template</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Papers must be original and not submitted
                                elsewhere
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-full bg-gradient-to-l from-blue-50/50 to-transparent p-8 rounded-lg border-r-4 border-primary/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <CheckCircle size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Review Process
                          </h3>
                          <ul className="list-none space-y-3 text-gray-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                All submissions undergo rigorous peer review
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Each paper reviewed by at least two experts
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Authors notified of acceptance/rejection via
                                email
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Accepted papers must be presented at the
                                conference
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-full bg-gradient-to-r from-blue-50/50 to-transparent p-8 rounded-lg border-l-4 border-primary/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <FileText
                            size={24}
                            className="text-primary rotate-12 transform"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Publication
                          </h3>
                          <ul className="list-none space-y-3 text-gray-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Accepted papers will be published in IEEE Xplore
                                Digital Library
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                Selected papers may be considered for IEEE
                                journals
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle
                                size={16}
                                className="text-primary/70"
                              />
                              <span>
                                All papers must be presented by a registered
                                author
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Plagiarism Policy */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-blue-50/50 p-8 rounded-xl text-center shadow-sm border border-blue-100"
                >
                  <h3 className="text-2xl font-semibold mb-3">
                    Plagiarism Policy
                  </h3>
                  <p className="text-muted-foreground">
                    All submitted papers will be checked for plagiarism. Papers
                    with significant similarity to published work will be
                    rejected without review. Please follow IEEE’s ethical
                    publication guidelines.
                  </p>
                </motion.div>

                {/* Important Dates Timeline */}
                <section className="pt-16 border-t text-center">
                  <div className="flex flex-col items-center mb-8">
                    <Calendar size={40} className="text-primary mb-2" />
                    <h2 className="text-4xl font-bold text-foreground">
                      Important Dates
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Stay on track with our conference roadmap
                    </p>
                  </div>

                  <div className="relative max-w-3xl mx-auto mt-10">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"></div>

                    <div className="space-y-10">
                      {dates.map((item, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={dateVariants}
                          className={`relative flex flex-col items-center ${
                            index % 2 === 0
                              ? "lg:flex-row"
                              : "lg:flex-row-reverse"
                          }`}
                        >
                          <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary w-4 h-4 rounded-full border-4 border-background shadow-lg z-10"></div>

                          <Card
                            className={`lg:w-[45%] w-full ${
                              item.highlight
                                ? "bg-primary/10 border-primary shadow-lg"
                                : "bg-background border-border hover:shadow-md"
                            } mt-10 lg:mt-0`}
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
                              <p
                                className={`text-lg ${
                                  item.highlight
                                    ? "font-bold text-primary"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {item.date}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 bg-secondary p-8 rounded-lg text-center shadow-md">
                    <h2 className="text-2xl font-bold mb-4">
                      Time Zone Information
                    </h2>
                    <p className="text-muted-foreground mb-2">
                      All deadlines are 11:59 PM IST (Indian Standard Time)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      UTC +5:30 | GMT +5:30
                    </p>
                  </div>
                </section>
              </div>

              {/* (Bottom boxes were moved to the bottom of the page to sit above the footer) */}
            </div>
          </div>
        </section>

        {/* Bottom Boxes - placed at the bottom center above the footer */}
        <motion.div
          className="mt-auto pt-16 pb-20 bg-gradient-to-b from-transparent to-gray-50/30 flex justify-center w-full"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl px-6">
            {/* Submit Box */}
            <div className="border border-blue-200 bg-white rounded-xl shadow-md p-8 text-center max-w-sm w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Submit Your Paper</h3>
              <p className="text-gray-600 mb-4">
                Submit your research paper through EasyChair
              </p>
              <div className="mt-auto space-y-3">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md mb-3 w-full">
                  Submit via EasyChair
                </button>
                <button className="border border-gray-400 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-md w-full">
                  Download IEEE Template
                </button>
              </div>
            </div>

            {/* Contact Box */}
            <div className="border border-gray-200 bg-white rounded-xl shadow-md p-8 text-center max-w-sm w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Have questions about paper submission? Contact our technical
                program committee.
              </p>
              <div className="mt-auto">
                <button className="border border-gray-400 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-md w-full">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CallForPapers;