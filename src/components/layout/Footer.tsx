import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 mt-16 border-t bg-secondary">
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4">
          <Link href="/legal/privacy-policy" className="text-sm hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/legal/terms-and-conditions" className="text-sm hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/legal/refund-policy" className="text-sm hover:text-primary transition-colors">
            Refund & Cancellation Policy
          </Link>
        </div>
        <div className="mb-4">
          <a href="mailto:sanathselvakumaran@gmail.com" className="text-sm hover:text-primary transition-colors">
            sanathselvakumaran@gmail.com
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Passion Finder Workbook. All Rights Reserved.</p>
      </div>
    </footer>
  );
}