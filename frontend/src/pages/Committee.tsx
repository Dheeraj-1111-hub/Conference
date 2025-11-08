import { UserCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Committee = () => {
  const patrons = [
    { name: 'Dr. [Name]', designation: 'Principal, [Your College Name]' },
    { name: 'Dr. [Name]', designation: 'Secretary, IEEE Madras Section' },
  ];

  const organizingCommittee = [
    { name: 'Dr. [Name]', designation: 'General Chair' },
    { name: 'Dr. [Name]', designation: 'Program Chair' },
    { name: 'Dr. [Name]', designation: 'Registration Chair' },
    { name: 'Dr. [Name]', designation: 'Publicity Chair' },
    { name: 'Prof. [Name]', designation: 'Finance Chair' },
    { name: 'Prof. [Name]', designation: 'Publication Chair' },
  ];

  const technicalCommittee = [
    { name: 'Dr. [Name]', institution: 'IIT Madras, India' },
    { name: 'Dr. [Name]', institution: 'Anna University, India' },
    { name: 'Dr. [Name]', institution: 'NIT Trichy, India' },
    { name: 'Dr. [Name]', institution: 'VIT Chennai, India' },
    { name: 'Dr. [Name]', institution: 'MIT, USA' },
    { name: 'Dr. [Name]', institution: 'Stanford University, USA' },
    { name: 'Dr. [Name]', institution: 'University of Cambridge, UK' },
    { name: 'Dr. [Name]', institution: 'NUS, Singapore' },
  ];

  const advisoryBoard = [
    { name: 'Dr. [Name]', institution: 'IIT Delhi, India' },
    { name: 'Dr. [Name]', institution: 'IISC Bangalore, India' },
    { name: 'Dr. [Name]', institution: 'IIT Bombay, India' },
    { name: 'Dr. [Name]', institution: 'Carnegie Mellon University, USA' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UserCircle size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Committee</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Meet the Team Behind ICETCCT 2025
            </p>
          </div>
        </section>

        {/* Committee Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            {/* Chief Patrons */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Chief Patrons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {patrons.map((patron, index) => (
                  <Card key={index} className="border-2 border-primary">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <UserCircle size={40} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{patron.name}</h3>
                      <p className="text-sm text-muted-foreground">{patron.designation}</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizingCommittee.map((member, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                        <UserCircle size={32} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground text-center mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">{member.designation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advisory Board */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Advisory Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advisoryBoard.map((member, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                        <UserCircle size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.institution}</p>
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
                  <CardTitle className="text-center text-2xl">
                    Technical Program Committee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {technicalCommittee.map((member, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors">
                        <UserCircle size={20} className="text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    * Additional committee members to be announced
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Student Volunteers */}
            <div className="bg-secondary p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Student Volunteers</h3>
              <p className="text-muted-foreground mb-6">
                A dedicated team of student volunteers from the Department of Computer Science and Engineering 
                will assist throughout the conference to ensure a smooth and memorable experience for all participants.
              </p>
              <p className="text-sm text-muted-foreground">
                We extend our gratitude to all volunteers for their invaluable support.
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
