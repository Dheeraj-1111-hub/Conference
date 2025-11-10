import {
  MapPin,
  Navigation as NavigationIcon,
  Hotel,
  Plane,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Venue = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Venue</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Find Your Way to ICISD 2026
            </p>
          </div>
        </section>

        {/* Venue Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Main Venue Card */}
            <Card className="mb-12 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-center text-3xl">
                  Conference Venue
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-xl font-semibold text-foreground">
                  [Your College Name]
                </div>
                <div className="text-lg text-muted-foreground">
                  Department of Computer Science and Engineering
                </div>
                <div className="text-muted-foreground">
                  [College Address Line 1]
                  <br />
                  [College Address Line 2]
                  <br />
                  Chennai - [Pincode], Tamil Nadu, India
                </div>
                <div className="pt-4">
                  <a
                    href="mailto:ieeeconf2025@college.edu.in"
                    className="text-primary hover:underline"
                  >
                    ieeeconf2025@college.edu.in
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-secondary rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62216.77764274239!2d80.21170557910155!3d13.04760000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Conference Venue Location"
                  ></iframe>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Click on the map to open in Google Maps for detailed
                  directions
                </p>
              </CardContent>
            </Card>

            {/* Travel Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Plane className="text-primary" />
                    <CardTitle>By Air</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p className="mb-2">
                    <strong>Chennai International Airport</strong> is the
                    nearest airport, approximately 15-20 km from the venue.
                  </p>
                  <p>
                    Travel time: 30-45 minutes by taxi/cab. Airport taxis, Ola,
                    and Uber are readily available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <NavigationIcon className="text-primary" />
                    <CardTitle>By Train</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p className="mb-2">
                    <strong>Chennai Central</strong> and{" "}
                    <strong>Chennai Egmore</strong> are the major railway
                    stations.
                  </p>
                  <p>
                    Distance: 10-15 km from venue. Local taxis, metro, and buses
                    are available for connecting to the venue.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" />
                    <CardTitle>Local Transport</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p className="mb-2">
                    Chennai Metro, city buses, and auto-rickshaws are readily
                    available.
                  </p>
                  <p>
                    App-based cabs (Ola, Uber) are convenient options. Nearest
                    metro station: [Station Name] (2 km).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Accommodation */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center gap-2">
                  <Hotel className="text-primary" />
                  <CardTitle className="text-2xl">Accommodation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">
                      Budget Hotels
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hotel Name 1 - ₹1,500-2,000/night (2 km)</li>
                      <li>• Hotel Name 2 - ₹1,800-2,500/night (3 km)</li>
                      <li>• Hotel Name 3 - ₹2,000-2,800/night (2.5 km)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">
                      Premium Hotels
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hotel Name 4 - ₹4,000-6,000/night (4 km)</li>
                      <li>• Hotel Name 5 - ₹5,000-7,500/night (5 km)</li>
                      <li>• Hotel Name 6 - ₹6,000-9,000/night (3 km)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-secondary rounded-lg text-center text-sm text-muted-foreground">
                  <p>
                    For accommodation assistance and special conference rates,
                    please contact us at{" "}
                    <a
                      href="mailto:ieeeconf2025@college.edu.in"
                      className="text-primary hover:underline"
                    >
                      ieeeconf2025@college.edu.in
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Local Attractions */}
            <div className="mt-12 bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Explore Chennai
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                While you're in Chennai for the conference, don't miss these
                iconic attractions:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="font-semibold text-foreground">
                    Marina Beach
                  </div>
                  <div className="text-sm text-muted-foreground">
                    World's 2nd longest beach
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Kapaleeshwarar Temple
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Historic Dravidian architecture
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Fort St. George
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Colonial heritage site
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    San Thome Church
                  </div>
                  <div className="text-sm text-muted-foreground">
                    16th-century basilica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Venue;
