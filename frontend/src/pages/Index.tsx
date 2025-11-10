import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-hero text-primary-foreground py-20 md:py-22"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 98, 155, 0.85), rgba(0, 98, 155, 0.9)), url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">
                Publishing Partner – Degruter
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              International Conference on Intelligent Systems Development
            </h1>

            <div className="text-xl md:text-2xl font-semibold mb-4">
              ICISD’26
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>March 14–15, 2026</span>
              </div>
              <div className="hidden md:block">|</div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Chennai, India</span>
              </div>
            </div>

            <div className="mb-12">
              <Countdown />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 shadow-lg"
              >
                <Link to="/registration">Register Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary shadow-lg"
              >
                <Link to="/call-for-papers">Submit Paper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to ICISD’26
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The International Conference on Intelligent Systems Development
              (ICISD’26) serves as a premier global platform for presenting and
              discussing the latest innovations, trends, challenges, and
              advancements in the fields of Computing and Intelligent Systems.
              It brings together leading academic scientists, researchers, and
              professionals to exchange ideas, share research outcomes, and
              explore new directions in technology-driven innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call for Papers</h3>
                <p className="text-muted-foreground mb-4">
                  Submit your innovative research
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/call-for-papers">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
                <p className="text-muted-foreground mb-4">
                  Key deadlines and schedules
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/call-for-papers#dates">View Dates</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Keynote Speakers</h3>
                <p className="text-muted-foreground mb-4">
                  Hear from global experts
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/speakers">Meet Speakers</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground mb-4">
                  Explore Chennai, India
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/schedule#venue">Get Directions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Conference Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-medium text-foreground">
                Expected Participants
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg font-medium text-foreground">
                Research Papers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg font-medium text-foreground">
                Keynote Speakers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organized By */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Organized By
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-2">
              Department of Computer Science and Engineering
            </p>
            <p className="text-xl font-semibold text-foreground mb-4">
              SRM Institute of Science and Technology, Vadapalani , Chennai,
              India
            </p>
            <p className="text-lg text-muted-foreground">
              In collaboration with Degruter Publishing
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
