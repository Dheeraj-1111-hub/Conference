import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Schedule = () => {
  const day1Schedule = [
    { time: '08:00 - 09:00', event: 'Registration & Breakfast', type: 'general' },
    { time: '09:00 - 09:30', event: 'Inaugural Ceremony', type: 'ceremony' },
    { time: '09:30 - 10:30', event: 'Keynote Address 1', speaker: 'Dr. Rajesh Kumar', type: 'keynote' },
    { time: '10:30 - 11:00', event: 'Tea Break & Networking', type: 'break' },
    { time: '11:00 - 13:00', event: 'Technical Session 1A: AI & Machine Learning', type: 'technical' },
    { time: '11:00 - 13:00', event: 'Technical Session 1B: IoT & Smart Systems', type: 'technical' },
    { time: '13:00 - 14:00', event: 'Lunch Break', type: 'break' },
    { time: '14:00 - 15:00', event: 'Keynote Address 2', speaker: 'Dr. Priya Sharma', type: 'keynote' },
    { time: '15:00 - 16:30', event: 'Technical Session 2A: Cloud Computing', type: 'technical' },
    { time: '15:00 - 16:30', event: 'Technical Session 2B: Cybersecurity', type: 'technical' },
    { time: '16:30 - 17:00', event: 'Evening Tea & Discussions', type: 'break' },
  ];

  const day2Schedule = [
    { time: '08:30 - 09:00', event: 'Registration & Breakfast', type: 'general' },
    { time: '09:00 - 10:00', event: 'Keynote Address 3', speaker: 'Dr. Amit Patel', type: 'keynote' },
    { time: '10:00 - 10:30', event: 'Tea Break & Networking', type: 'break' },
    { time: '10:30 - 12:30', event: 'Technical Session 3A: Data Science & Analytics', type: 'technical' },
    { time: '10:30 - 12:30', event: 'Technical Session 3B: Communication Systems', type: 'technical' },
    { time: '12:30 - 13:30', event: 'Lunch Break', type: 'break' },
    { time: '13:30 - 14:30', event: 'Panel Discussion: Future of Computing Technologies', type: 'panel' },
    { time: '14:30 - 16:00', event: 'Technical Session 4A: Blockchain & Distributed Systems', type: 'technical' },
    { time: '14:30 - 16:00', event: 'Technical Session 4B: Computer Vision & NLP', type: 'technical' },
    { time: '16:00 - 16:30', event: 'Valedictory Ceremony & Award Distribution', type: 'ceremony' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-primary/10 border-l-primary';
      case 'technical':
        return 'bg-secondary border-l-accent';
      case 'ceremony':
        return 'bg-primary/5 border-l-primary';
      case 'panel':
        return 'bg-accent/10 border-l-accent';
      case 'break':
        return 'bg-muted border-l-muted-foreground';
      default:
        return 'bg-background border-l-border';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">Schedule</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Two Days of Innovation, Learning, and Networking
            </p>
          </div>
        </section>

        {/* Schedule Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="day1">Day 1 - March 14</TabsTrigger>
                <TabsTrigger value="day2">Day 2 - March 15</TabsTrigger>
              </TabsList>

              <TabsContent value="day1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">
                      Day 1 - Friday, March 14, 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {day1Schedule.map((item, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-l-4 ${getTypeColor(item.type)}`}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-3">
                            <div className="text-sm font-semibold text-primary min-w-[140px]">
                              {item.time}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">{item.event}</h3>
                              {item.speaker && (
                                <p className="text-sm text-muted-foreground">Speaker: {item.speaker}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="day2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">
                      Day 2 - Saturday, March 15, 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {day2Schedule.map((item, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-l-4 ${getTypeColor(item.type)}`}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-3">
                            <div className="text-sm font-semibold text-primary min-w-[140px]">
                              {item.time}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">{item.event}</h3>
                              {item.speaker && (
                                <p className="text-sm text-muted-foreground">Speaker: {item.speaker}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Legend */}
            <div className="mt-8 bg-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4 text-center">Session Types</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span className="text-sm">Keynote</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-accent rounded"></div>
                  <span className="text-sm">Technical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/50 rounded"></div>
                  <span className="text-sm">Ceremony</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-accent/50 rounded"></div>
                  <span className="text-sm">Panel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-muted rounded"></div>
                  <span className="text-sm">Break</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>* Schedule is subject to minor changes. Final schedule will be communicated to registered participants.</p>
              <p className="mt-2">* All times are in IST (Indian Standard Time)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
