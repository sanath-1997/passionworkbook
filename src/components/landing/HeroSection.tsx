'use client';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { DownloadWorkbookModal } from './DownloadWorkbookModal';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
      <AnimatedSection>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold mb-4 text-lg">Hey there,</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-6">
              If you are Confused about your life or career,
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You're not alone. Many people reach a point where what they are doing no longer feels right, but they don’t know what to do next. This workbook is for that stage of life. No motivation, no hype, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DownloadWorkbookModal>
                <Button size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Workbook
                </Button>
              </DownloadWorkbookModal>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
