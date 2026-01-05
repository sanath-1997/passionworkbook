import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';

const feelingList = [
  "You don’t hate what you’re doing, but it doesn’t feel right either",
  "You keep asking, “What am I actually good at?”",
  "Everyone around you seems to have direction—except you",
  "You’ve watched videos and read advice, but nothing clicks",
  "You’re afraid of choosing the wrong path"
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <AnimatedSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-6">
            Are You Feeling Stuck or Lost?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            If even one of these feels true, this workbook is for you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
                <CardContent className="p-8">
                    <ul className="space-y-4">
                    {feelingList.map((item, index) => (
                        <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <span className="text-lg">{item}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </AnimatedSection>
    </section>
  );
}
