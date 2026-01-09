import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-8">Policies</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section id="privacy-policy" className="pt-8">
            <h2 className="text-2xl font-headline font-semibold text-foreground pt-4 border-t">Privacy Policy</h2>
            <p className="pt-4">Welcome to Passion Finder Workbook. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you purchase and use our workbook.</p>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Information We Collect</h3>
            <p>We may collect personal information from you, such as your name and email address, when you purchase our workbook. This information is collected through our payment processor, Razorpay.</p>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Process your transaction.</li>
              <li>Send you the workbook and any related information.</li>
              <li>Communicate with you about your purchase.</li>
            </ul>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Sharing Your Information</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          </section>

          <section id="terms-and-conditions" className="pt-8">
            <h2 className="text-2xl font-headline font-semibold text-foreground pt-4 border-t">Terms & Conditions</h2>
            
            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Agreement to Terms</h3>
            <p>By purchasing and using the Passion Finder Workbook, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the workbook.</p>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Intellectual Property</h3>
            <p>The workbook and its original content, features, and functionality are owned by Passion Finder Workbook and are protected by international copyright and other intellectual property or proprietary rights laws. You may share it with friends and family, but commercial redistribution is prohibited.</p>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Purchases</h3>
            <p>If you wish to purchase the workbook, you will be asked to supply certain information relevant to your purchase including, without limitation, your name and email address. All payments are processed through Razorpay.</p>
            
            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Governing Law</h3>
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          </section>
          
          <section id="refund-policy" className="pt-8">
            <h2 className="text-2xl font-headline font-semibold text-foreground pt-4 border-t">Refund & Cancellation Policy</h2>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Digital Product</h3>
            <p>Thank you for purchasing the Passion Finder Workbook. As this is a digital product (PDF file), it is deemed "used" after download or opening. While most sales are final, a refund is available if you were seriously disappointed with the worksheet. Please contact us to request one.</p>

            <h3 className="text-xl font-headline font-semibold text-foreground pt-4">Cancellations</h3>
            <p>Once an order is placed and the payment is processed, the sale is final, and you will receive access to the digital workbook immediately. Cancellations are not possible after the purchase has been completed.</p>
          </section>

          <section id="contact" className="pt-8">
            <h2 className="text-2xl font-headline font-semibold text-foreground pt-4 border-t">Contact Us</h2>
            <p>If you have any questions about these policies, please contact us at sanathselvakumaran@gmail.com.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
