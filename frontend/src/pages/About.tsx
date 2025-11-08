import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About the Conference</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Shaping the Future of Computing and Communication Technologies
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Conference Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The IEEE International Conference on Emerging Trends in Computing and Communication Technologies 
                  (ICETCCT 2025) is a premier forum for presenting and discussing the most recent innovations, trends, 
                  concerns, challenges, and solutions adopted in the fields of Computing and Communication Technologies. 
                  The conference aims to bring together leading academic scientists, researchers, industry professionals, 
                  and research scholars to exchange their experiences and research findings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Conference Theme</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The theme of ICETCCT 2025 focuses on "Emerging Trends in Computing and Communication Technologies" 
                  with special emphasis on innovative research in areas such as Artificial Intelligence, Machine Learning, 
                  Internet of Things, Cloud Computing, Cybersecurity, Data Science, and Next-Generation Communication Systems. 
                  We encourage submissions that present novel approaches, methodologies, and applications in these rapidly 
                  evolving fields.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">About the Department</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Department of Computer Science and Engineering at [Your College Name] has been at the forefront 
                  of technical education and research since its establishment. With state-of-the-art laboratories, 
                  experienced faculty, and strong industry partnerships, the department has consistently produced 
                  outstanding graduates who have made significant contributions to the field of computing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our department is committed to fostering innovation, promoting research excellence, and preparing 
                  students for successful careers in the ever-evolving technology landscape. We take pride in organizing 
                  this IEEE-sponsored international conference to facilitate knowledge exchange and collaboration among 
                  researchers worldwide.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">IEEE Madras Section</h2>
                <p className="text-muted-foreground leading-relaxed">
                  IEEE Madras Section is one of the most active sections in India, serving the professional needs of 
                  engineers, scientists, and allied professionals in the region. The section regularly organizes technical 
                  conferences, workshops, and seminars to promote technological innovation and professional development. 
                  We are honored to have the support and sponsorship of IEEE Madras Section for ICETCCT 2025.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Conference Objectives</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide a platform for researchers to present their original research work</li>
                  <li>To foster collaboration between academia and industry</li>
                  <li>To discuss emerging trends and future directions in computing and communication technologies</li>
                  <li>To facilitate networking opportunities among participants from diverse backgrounds</li>
                  <li>To encourage young researchers and students to pursue careers in research and development</li>
                  <li>To promote IEEE's mission of advancing technology for the benefit of humanity</li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Attend ICETCCT 2025?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Present your research to an international audience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Learn from renowned keynote speakers and industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Network with peers and potential collaborators from around the world</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Get your work published in IEEE Xplore Digital Library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Explore the vibrant city of Chennai and its rich cultural heritage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
