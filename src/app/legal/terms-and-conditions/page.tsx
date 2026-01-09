import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-8">Terms & Conditions</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Agreement to Terms</h2>
          <p>By purchasing and using the Passion Finder Workbook, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the workbook.</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Intellectual Property</h2>
          <p>The workbook and its original content, features, and functionality are owned by Passion Finder Workbook and are protected by international copyright and other intellectual property or proprietary rights laws. You may share it with friends and family, but commercial redistribution is prohibited.</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Purchases</h2>
          <p>If you wish to purchase the workbook, you will be asked to supply certain information relevant to your purchase including, without limitation, your name and email address. All payments are processed through Razorpay.</p>
          
          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at sanathselvakumaran@gmail.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}