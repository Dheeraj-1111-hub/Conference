import { UserCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Committee = () => {
  const patrons = [
    { name: "Dr. [Name]", designation: "Principal, [Your College Name]" },
    { name: "Dr. [Name]", designation: "Conference Chair, ICISD’26" },
  ];

  const organizingCommittee = [
    { name: "Dr. [Name]", designation: "General Chair" },
    { name: "Dr. [Name]", designation: "Program Chair" },
    { name: "Dr. [Name]", designation: "Publication Chair" },
    { name: "Dr. [Name]", designation: "Publicity Chair" },
    { name: "Prof. [Name]", designation: "Finance Chair" },
    { name: "Prof. [Name]", designation: "Registration Chair" },
  ];

  const technicalCommittee = [
    { name: "Dr. [Name]", institution: "IIT Madras, India" },
    { name: "Dr. [Name]", institution: "Anna University, India" },
    { name: "Dr. [Name]", institution: "NIT Trichy, India" },
    { name: "Dr. [Name]", institution: "VIT Chennai, India" },
    { name: "Dr. [Name]", institution: "MIT, USA" },
    { name: "Dr. [Name]", institution: "Stanford University, USA" },
    { name: "Dr. [Name]", institution: "University of Cambridge, UK" },
    { name: "Dr. [Name]", institution: "NUS, Singapore" },
  ];

  const advisoryBoard = [
    { name: "Dr. [Name]", institution: "IIT Delhi, India" },
    { name: "Dr. [Name]", institution: "IISC Bangalore, India" },
    { name: "Dr. [Name]", institution: "IIT Bombay, India" },
    { name: "Dr. [Name]", institution: "Carnegie Mellon University, USA" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center gap-3 mb-4">
            
              <h1 className="text-4xl md:text-5xl font-bold">
                Organizing Committee
              </h1>
            </div>
            <p className="text-xl max-w-3xl mx-auto">
              The Visionaries Behind ICISD’26 — Building the Future of Intelligent Systems
            </p>
          </div>
        </section>

        {/* Committee Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            {/* Chief Patrons */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Chief Patrons
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                The conference is led under the esteemed guidance of distinguished academicians and institutional leaders who continue to drive excellence in education, innovation, and research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {patrons.map((patron, index) => (
                  <Card
                    key={index}
                    className="border-2 border-primary/60 hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <UserCircle size={40} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {patron.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {patron.designation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Organizing Committee */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Organizing Committee
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                The Organizing Committee of ICISD’26 is dedicated to creating a platform that fosters collaboration, innovation, and the exchange of transformative ideas across global research communities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizingCommittee.map((member, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg hover:border-primary/50 transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                        <UserCircle size={32} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground text-center mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
                        {member.designation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advisory Board */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold">
                    Advisory Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-6">
                    The Advisory Board comprises globally recognized researchers and academicians
                    who provide strategic direction and ensure the academic quality of ICISD’26.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advisoryBoard.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                      >
                        <UserCircle size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Program Committee */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold">
                    Technical Program Committee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-6">
                    The Technical Committee consists of experts in emerging fields such as
                    Artificial Intelligence, Data Science, and Intelligent Systems, ensuring that
                    ICISD’26 upholds the highest standards of research and review.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {technicalCommittee.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <UserCircle
                          size={20}
                          className="text-muted-foreground flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6 italic">
                    * Additional committee members will be announced soon.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Student Volunteers */}
            <div className="bg-secondary p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Student Volunteers
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                A dedicated team of student volunteers from the Department of Computer Science and
                Engineering will assist in organizing ICISD’26. Their enthusiasm and commitment
                reflect the conference’s mission to encourage young innovators and emerging leaders.
              </p>
              <p className="text-sm text-muted-foreground">
                We extend our sincere gratitude to all volunteers for their invaluable
                contributions in making this event a success.
              </p>
            </div>

            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Committee;
