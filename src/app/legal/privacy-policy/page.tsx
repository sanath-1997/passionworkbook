import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-8">Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Introduction</h2>
          <p>Welcome to Passion Finder Workbook. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you purchase and use our workbook.</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>We may collect personal information from you, such as your name and email address, when you purchase our workbook. This information is collected through our payment processor, Razorpay.</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Process your transaction.</li>
            <li>Send you the workbook and any related information.</li>
            <li>Communicate with you about your purchase.</li>
          </ul>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

          <h2 className="text-2xl font-headline font-semibold text-foreground pt-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at sanathselvakumaran@gmail.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}