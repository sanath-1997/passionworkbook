import { Lightbulb, Users, Search, Target } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <AnimatedSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
            What If the Problem Isn’t You—But the Questions You’re Asking?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-center md:text-left">Most people never find their passion because they:</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-background/70 rounded-full"><Search className="w-6 h-6 text-primary" /></div>
                <span className="text-muted-foreground">Look <span className="font-semibold text-foreground">outside</span> instead of inward</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-background/70 rounded-full"><Users className="w-6 h-6 text-primary" /></div>
                <span className="text-muted-foreground">Copy others’ paths</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-background/70 rounded-full"><Target className="w-6 h-6 text-primary" /></div>
                <span className="text-muted-foreground">Search for “one perfect passion”</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6 p-8 bg-card rounded-lg shadow-lg">
            <h3 className="text-2xl font-headline font-semibold text-center md:text-left">This workbook changes that. It guides you to uncover:</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Your natural strengths</span>
              </li>
              <li className="flex items-center gap-4">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Patterns from your life experiences</span>
              </li>
              <li className="flex items-center gap-4">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Interests that actually last</span>
              </li>
               <li className="flex items-center gap-4">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Career directions that fit <span className="italic">you</span>, not society</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
