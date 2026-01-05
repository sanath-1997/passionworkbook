import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';

export function PreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <AnimatedSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
            Preview of Find your Passion Workbook
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://picsum.photos/seed/passion-1/600/800"
              alt="Workbook preview one"
              width={600}
              height={800}
              className="w-full h-auto"
              data-ai-hint="workbook page"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://picsum.photos/seed/passion-2/600/800"
              alt="Workbook preview two"
              width={600}
              height={800}
              className="w-full h-auto"
              data-ai-hint="workbook page"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
