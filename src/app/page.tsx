import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { PreviewSection } from '@/components/landing/PreviewSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PreviewSection />
        <FeaturesSection />
        <ProblemSection />
      </main>
      <Footer />
    </div>
  );
}
