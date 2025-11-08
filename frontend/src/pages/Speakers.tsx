import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      institution: 'IIT Madras',
      expertise: 'Artificial Intelligence & Machine Learning',
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Senior Principal Scientist',
      institution: 'ISRO',
      expertise: 'Satellite Communication Systems',
    },
    {
      name: 'Dr. Amit Patel',
      designation: 'Chief Technology Officer',
      institution: 'Tech Innovations Ltd.',
      expertise: 'Cloud Computing & Edge Technologies',
    },
    {
      name: 'Dr. Meera Krishnan',
      designation: 'Associate Professor',
      institution: 'Anna University',
      expertise: 'Cybersecurity & Network Security',
    },
    {
      name: 'Dr. Suresh Menon',
      designation: 'Research Director',
      institution: 'AI Research Lab',
      expertise: 'Deep Learning & Computer Vision',
    },
    {
      name: 'Dr. Anjali Reddy',
      designation: 'Principal Engineer',
      institution: 'Qualcomm India',
      expertise: '5G & Next-Gen Communication',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Keynote Speakers</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Learn from Leading Experts in Computing and Communication Technologies
            </p>
          </div>
        </section>

        {/* Speakers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Distinguished Speakers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are honored to host renowned experts from leading institutions and organizations who will share 
                their insights on cutting-edge research and emerging technologies.
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
                      <Users size={48} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Speaker Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                      <p className="text-sm font-medium text-primary mb-2">{speaker.designation}</p>
                      <p className="text-sm text-muted-foreground mb-3">{speaker.institution}</p>
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs font-medium text-foreground">Area of Expertise</p>
                        <p className="text-sm text-muted-foreground mt-1">{speaker.expertise}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Keynote Topics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Future of Artificial Intelligence in Industry 4.0</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Emerging Trends in 5G and Beyond</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Cybersecurity Challenges in IoT Ecosystems</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Cloud-Native Technologies and Microservices</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Deep Learning Applications in Healthcare</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Quantum Computing: Opportunities and Challenges</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                * More speakers to be announced soon
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
