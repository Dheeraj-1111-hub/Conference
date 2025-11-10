import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      institution: "IIT Madras",
      expertise: "Artificial Intelligence & Machine Learning",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Senior Principal Scientist",
      institution: "ISRO",
      expertise: "Satellite Communication Systems",
    },
    {
      name: "Dr. Amit Patel",
      designation: "Chief Technology Officer",
      institution: "Tech Innovations Ltd.",
      expertise: "Cloud Computing & Edge Technologies",
    },
    {
      name: "Dr. Meera Krishnan",
      designation: "Associate Professor",
      institution: "Anna University",
      expertise: "Cybersecurity & Network Security",
    },
    {
      name: "Dr. Suresh Menon",
      designation: "Research Director",
      institution: "AI Research Lab",
      expertise: "Deep Learning & Computer Vision",
    },
    {
      name: "Dr. Anjali Reddy",
      designation: "Principal Engineer",
      institution: "Qualcomm India",
      expertise: "5G & Next-Gen Communication",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Keynote Speakers
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Inspiring Minds, Driving Innovation — Thought Leaders of ICISD’26
            </p>
          </div>
        </section>

        {/* Speakers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Distinguished Speakers
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                ICISD’26 is privileged to host eminent researchers, academicians,
                and industry pioneers who are shaping the future of Computing and
                Intelligent Systems Development. Their sessions will provide
                valuable perspectives on cutting-edge innovations and real-world
                technological transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakers.map((speaker, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <CardContent className="p-6">
                    {/* Avatar Placeholder */}
                    <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Users
                        size={48}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>

                    {/* Speaker Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-2">
                        {speaker.designation}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {speaker.institution}
                      </p>
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs font-medium text-foreground">
                          Area of Expertise
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {speaker.expertise}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Keynote Topics */}
            <div className="mt-12 bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Keynote Themes & Discussions
              </h3>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
                The keynote sessions at ICISD’26 aim to explore the transformative
                impact of intelligent systems, data-driven research, and
                sustainable innovation on global technological progress.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Advancements in Artificial Intelligence for Real-World
                    Applications
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Next-Generation 5G and Intelligent Communication Networks
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Cybersecurity and Ethical AI in Intelligent Ecosystems
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Cloud-Native Architectures for Scalable Intelligence
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Deep Learning and Neural Advancements in Healthcare Systems
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Quantum Computing: Redefining the Future of Intelligence
                  </p>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6 italic">
                * More distinguished speakers to be announced soon.  
                All accepted research works will be published with{" "}
                <span className="font-semibold text-primary">Degruter</span>,
                our official publishing partner.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;
