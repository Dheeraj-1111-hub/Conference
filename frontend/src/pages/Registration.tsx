import { Link } from "react-router-dom";
import { CreditCard, CheckCircle, Banknote, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Registration = () => {
  const fees = [
    {
      category: "Members (Students)",
      earlyBird: "₹3,500",
      regular: "₹4,000",
    },
    {
      category: "Members (Faculty/Industry)",
      earlyBird: "₹5,500",
      regular: "₹6,500",
    },
    {
      category: "Non-Members (Students)",
      earlyBird: "₹4,500",
      regular: "₹5,000",
    },
    {
      category: "Non-Members (Faculty/Industry)",
      earlyBird: "₹7,000",
      regular: "₹8,000",
    },
    {
      category: "Foreign Participants",
      earlyBird: "$150",
      regular: "$200",
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
              <CreditCard size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Registration</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Secure Your Participation in the International Conference on
              Intelligent Systems Development (ICISD 2026)
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Registration Fees
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Registration includes All technical sessions and keynote
                addresses ,Panel discussions and workshops, Conference kit and
                proceedings, Lunch and refreshments for both days, Certificate
                of participation.
              </p>
            </div>

            {/* Fee Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary">
                        <th className="text-left py-4 px-4 font-semibold">
                          Category
                        </th>
                        <th className="text-center py-4 px-4 font-semibold">
                          Early Bird
                          <br />
                          <span className="text-xs font-normal text-muted-foreground">
                            (Before Feb 20)
                          </span>
                        </th>
                        <th className="text-center py-4 px-4 font-semibold">
                          Regular
                          <br />
                          <span className="text-xs font-normal text-muted-foreground">
                            (After Feb 20)
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fees.map((fee, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-4 px-4">{fee.category}</td>
                          <td className="py-4 px-4 text-center font-semibold text-primary">
                            {fee.earlyBird}
                          </td>
                          <td className="py-4 px-4 text-center font-semibold">
                            {fee.regular}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Registration Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>Access to all technical and keynote sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        Conference kit containing program schedule and materials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        Lunch and refreshments on both conference days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>Certificate of participation/presentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        Publication of accepted papers in De Gruyter’s indexed
                        journals (subject to review and editorial acceptance)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        At least one author per accepted paper must register for
                        the paper to be included in the conference proceedings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        Membership must be valid at the time of registration to
                        claim member rates.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        Early bird registration closes on February 20, 2026.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>Registration fees are non-refundable.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span>
                        Certificates will be issued only to registered and
                        participating delegates.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Bank Transfer */}
                  <div className="p-6 bg-gradient-to-b from-white to-secondary rounded-lg border border-border shadow-sm flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <Banknote size={20} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Bank Transfer
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Participants within India can complete payment via
                          direct bank transfer. Please retain the transaction
                          reference number for verification.
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        Need invoice? We’ll email account details.
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Request Invoice</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Online Payment */}
                  <div className="p-6 bg-gradient-to-b from-white to-secondary rounded-lg border border-border shadow-sm flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Online Payment
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Secure payments via Credit/Debit cards, Net Banking
                          and UPI. Fast and protected checkout.
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        Instant confirmation on successful payment.
                      </div>
                      <Button variant="outline" size="sm">
                        Pay Online
                      </Button>
                    </div>
                  </div>

                  {/* International */}
                  <div className="p-6 bg-gradient-to-b from-white to-secondary rounded-lg border border-border shadow-sm flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <Globe size={20} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          International
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Wire transfer for foreign participants. SWIFT/BIC
                          details available on request.
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        Processing may take 2–5 business days.
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Request SWIFT Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Card className="inline-block border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Register?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Complete your registration to secure your place at ICISD
                    2026
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/auth">Register Now</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/contact">Contact for Queries</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
