import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ImportantDates = () => {
  const dates = [
    { event: 'Paper Submission Deadline', date: 'December 15, 2024', highlight: false },
    { event: 'Notification of Acceptance', date: 'January 20, 2025', highlight: false },
    { event: 'Camera-Ready Paper Submission', date: 'February 10, 2025', highlight: false },
    { event: 'Early Bird Registration Deadline', date: 'February 20, 2025', highlight: false },
    { event: 'Final Registration Deadline', date: 'February 25, 2025', highlight: false },
    { event: 'Conference Dates', date: 'March 14-15, 2025', highlight: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Important Dates</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Mark Your Calendar - Key Deadlines for ICETCCT 2025
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {dates.map((item, index) => (
                <Card
                  key={index}
                  className={`border-l-4 transition-all hover:shadow-lg ${
                    item.highlight
                      ? 'border-l-primary bg-secondary'
                      : 'border-l-muted hover:border-l-primary'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-semibold mb-2 ${
                            item.highlight ? 'text-primary' : 'text-foreground'
                          }`}
                        >
                          {item.event}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {index === 0 && 'Submit your research paper through EasyChair'}
                          {index === 1 && 'Authors will be notified via email'}
                          {index === 2 && 'Final version incorporating review comments'}
                          {index === 3 && 'Register early to avail discounted rates'}
                          {index === 4 && 'Last date for conference registration'}
                          {index === 5 && 'Two-day conference at Chennai, India'}
                        </p>
                      </div>
                      <div
                        className={`text-right ${
                          item.highlight
                            ? 'text-2xl font-bold text-primary'
                            : 'text-xl font-semibold text-foreground'
                        }`}
                      >
                        {item.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-secondary p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Time Zone Information</h2>
              <p className="text-muted-foreground mb-2">
                All deadlines are 11:59 PM IST (Indian Standard Time)
              </p>
              <p className="text-sm text-muted-foreground">
                UTC +5:30 | GMT +5:30
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImportantDates;
