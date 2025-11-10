import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About the Conference
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Shaping the Future of Computing and Intelligent Systems Development
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {/* Conference Overview */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conference Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The International Conference on Intelligent Systems Development (ICISD’26) 
                  is a premier forum for presenting and discussing the latest innovations, 
                  trends, challenges, and solutions in the domains of Computing and Intelligent 
                  Systems. The conference aims to bring together leading academic scientists, 
                  researchers, industry professionals, and research scholars to exchange 
                  experiences, share research findings, and explore future directions in 
                  technology-driven innovation.
                </p>
              </div>

              {/* Conference Theme */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conference Theme
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The theme of ICISD’26 focuses on "Emerging Trends in Computing and Intelligent 
                  Systems Development", with a special emphasis on innovative research in areas 
                  such as Artificial Intelligence, Machine Learning, Internet of Things, Cloud 
                  Computing, Cybersecurity, Data Science, and Next-Generation Communication Systems. 
                  Submissions that introduce novel methodologies, frameworks, and applications in 
                  these rapidly evolving areas are highly encouraged.
                </p>
              </div>

              {/* About the Department */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  About the Department
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Department of Computer Science and Engineering at [Your College Name] 
                  has been a pioneer in technical education and research since its inception. 
                  Equipped with state-of-the-art laboratories, experienced faculty members, 
                  and strong industry collaborations, the department has consistently produced 
                  skilled professionals and innovators who contribute significantly to the 
                  computing world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The department remains committed to fostering innovation, promoting research 
                  excellence, and preparing students for dynamic careers in the ever-evolving 
                  technological landscape. Organizing ICISD’26 is a reflection of this commitment—
                  creating a platform for global collaboration, research dissemination, and 
                  knowledge sharing.
                </p>
              </div>

              {/* Publishing Partner */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Publishing Partner – Degruter
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are proud to collaborate with Degruter, a globally recognized academic 
                  publisher committed to advancing high-quality, peer-reviewed research. 
                  All accepted and selected papers from ICISD’26 will be published in Degruter’s 
                  indexed journals, ensuring international visibility and academic impact.
                </p>
              </div>

              {/* Conference Objectives */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Conference Objectives
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    To provide a global platform for researchers to present their original
                    research work
                  </li>
                  <li>To promote collaboration between academia and industry</li>
                  <li>
                    To discuss emerging technologies and future research directions in computing
                    and intelligent systems
                  </li>
                  <li>
                    To facilitate networking opportunities among participants from diverse
                    backgrounds
                  </li>
                  <li>
                    To inspire young researchers and students to pursue innovative research
                  </li>
                  <li>
                    To advance technology-driven solutions for societal benefit
                  </li>
                </ul>
              </div>

              {/* Why Attend */}
              <div className="bg-secondary p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Attend ICISD’26?
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Present your research to a diverse international audience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Learn from distinguished keynote speakers and industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      Network with researchers, professionals, and innovators from around the
                      world
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Publish your work with Degruter, a reputed international publisher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      Experience the cultural richness and vibrancy of Chennai
                    </span>
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
