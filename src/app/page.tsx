import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { InteractiveQuestions } from '@/components/landing/InteractiveQuestions';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <InteractiveQuestions />
      </main>
      <Footer />
    </div>
  );
}
