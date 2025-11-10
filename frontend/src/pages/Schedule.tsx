"use client";

import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Schedule = () => {
  const day1Schedule = [
    { time: "08:00 - 09:00", event: "Registration & Breakfast", type: "general" },
    { time: "09:00 - 09:30", event: "Inaugural Ceremony", type: "ceremony" },
    { time: "09:30 - 10:30", event: "Keynote Address 1", speaker: "Dr. Rajesh Kumar", type: "keynote" },
    { time: "10:30 - 11:00", event: "Tea Break & Networking", type: "break" },
    { time: "11:00 - 13:00", event: "Technical Session 1A: Artificial Intelligence and Machine Learning", type: "technical" },
    { time: "13:00 - 14:00", event: "Lunch Break", type: "break" },
    { time: "14:00 - 15:00", event: "Keynote Address 2", speaker: "Dr. Priya Sharma", type: "keynote" },
    { time: "15:00 - 16:30", event: "Technical Session 2B: Communication Networks", type: "technical" },
    { time: "16:30 - 17:00", event: "Evening Tea & Discussions", type: "break" },
  ];

  const day2Schedule = [
    { time: "08:30 - 09:00", event: "Registration & Breakfast", type: "general" },
    { time: "09:00 - 10:00", event: "Keynote Address 3", speaker: "Dr. Amit Patel", type: "keynote" },
    { time: "10:00 - 10:30", event: "Tea Break & Networking", type: "break" },
    { time: "10:30 - 12:30", event: "Technical Session 3A: Data Science and Analytics", type: "technical" },
    { time: "12:30 - 13:30", event: "Lunch Break", type: "break" },
    { time: "13:30 - 14:30", event: "Panel Discussion: Emerging Trends in Computing and Communication", type: "panel" },
    { time: "14:30 - 16:00", event: "Technical Session 4A: Cloud and Distributed Systems", type: "technical" },
    { time: "16:00 - 16:30", event: "Valedictory Ceremony & Awards", type: "ceremony" },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "keynote":
        return "bg-primary/10 border-l-primary";
      case "technical":
        return "bg-secondary border-l-accent";
      case "ceremony":
        return "bg-primary/5 border-l-primary";
      case "panel":
        return "bg-accent/10 border-l-accent";
      case "break":
        return "bg-muted border-l-muted-foreground";
      default:
        return "bg-background border-l-border";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-hero text-primary-foreground py-16 text-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-3 mb-4">
           
            <h1 className="text-4xl md:text-5xl font-bold">Conference Schedule</h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore two dynamic days of innovation, research, and collaboration at <b>ICISD’26</b>, published in partnership with <b>Degruter</b>.
          </p>
        </div>
      </motion.section>

      {/* Schedule Tabs */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
            </TabsList>

            {[
              ["day1", day1Schedule],
              ["day2", day2Schedule],
            ].map(([day, schedule]) => (
              <TabsContent key={day} value={day}>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-semibold">
                      {day === "day1"
                        ? "Friday, April 10, 2026"
                        : "Saturday, April 11, 2026"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {schedule.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className={`p-4 rounded-lg border-l-4 ${getTypeColor(item.type)}`}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-3">
                            <div className="text-sm font-semibold text-primary min-w-[140px]">
                              {item.time}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">{item.event}</h3>
                              {item.speaker && (
                                <p className="text-sm text-muted-foreground">
                                  Speaker: {item.speaker}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.section>

      {/* Venue Section */}
      <motion.section
        id="venue"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-secondary/20 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Venue & Travel</h2>
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="text-primary" />,
              title: "Venue",
              text: "SRM Institute of Science and Technology, Chennai, India",
            },
            {
              icon: <Clock className="text-accent" />,
              title: "Dates",
              text: "April 10 – 11, 2026",
            },
            {
              icon: <Phone className="text-muted-foreground" />,
              title: "Travel Help",
              text: "+91 98765 43210",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="hover:shadow-xl transition-all">
                <CardHeader className="flex flex-col items-center">
                  {card.icon}
                  <CardTitle className="mt-2">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-left"
          >
            <p className="text-lg">
              For queries regarding submissions, registration, or accommodation:
            </p>
            <div className="space-y-3">
              <p>
                <Mail className="inline mr-2 text-primary" /> icisd@degruter.org
              </p>
              <p>
                <Phone className="inline mr-2 text-primary" /> +91 98765 43210
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 bg-secondary/20 p-6 rounded-lg shadow-lg"
          >
            <Input placeholder="Your Name" required />
            <Input placeholder="Your Email" type="email" required />
            <Textarea placeholder="Your Message" rows={4} required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Schedule;
