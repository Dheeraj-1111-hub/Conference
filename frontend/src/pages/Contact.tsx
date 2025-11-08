import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Get in Touch with the ICETCCT 2025 Team
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Conference Secretariat</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm text-muted-foreground">
                        <p>Department of CSE</p>
                        <p>[Your College Name]</p>
                        <p>Chennai, Tamil Nadu</p>
                        <p>India - [Pincode]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                      <a
                        href="mailto:ieeeconf2025@college.edu.in"
                        className="text-sm text-primary hover:underline"
                      >
                        ieeeconf2025@college.edu.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Persons</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground">Dr. [Name]</p>
                      <p className="text-sm text-muted-foreground mb-1">Conference Chair</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-primary" />
                        <a href="tel:+919876543210" className="text-primary hover:underline">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Prof. [Name]</p>
                      <p className="text-sm text-muted-foreground mb-1">Program Chair</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-primary" />
                        <a href="tel:+919876543211" className="text-primary hover:underline">
                          +91 98765 43211
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <a href="#" className="block text-primary hover:underline">
                      Paper Submission Portal
                    </a>
                    <a href="#" className="block text-primary hover:underline">
                      Registration Portal
                    </a>
                    <a href="#" className="block text-primary hover:underline">
                      IEEE Author Guidelines
                    </a>
                    <a href="#" className="block text-primary hover:underline">
                      IEEE Madras Section
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message here..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        How do I submit my paper?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Papers should be submitted through the EasyChair submission portal. Visit the
                        Call for Papers page for detailed guidelines.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        What is the registration fee?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Registration fees vary based on IEEE membership status and category. Please
                        check the Registration page for complete details.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Will accepted papers be published?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, all accepted and presented papers will be published in IEEE Xplore Digital
                        Library.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Can I attend without presenting a paper?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can register as a participant to attend keynotes and technical
                        sessions without presenting.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
