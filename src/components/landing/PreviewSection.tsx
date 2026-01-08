'use client';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';

const imageList = ["/images/first.png", "/images/second.png", "/images/third.png", "/images/fourth.png"];

export function PreviewSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-background">
      <AnimatedSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
            Preview of <span className="text-primary">Find your Passion Workbook</span>
          </h2>
          <p className="text-lg text-foreground mt-4 font-bold">Total : 16 Pages 📄</p>
        </div>
        <div className="max-w-xl mx-auto">
          <Carousel 
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {imageList.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={src}
                        alt={`Workbook preview ${index + 1}`}
                        width={600}
                        height={800}
                        className="w-full h-auto"
                        data-ai-hint="workbook page"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </AnimatedSection>
    </section>
  );
}
