import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DownloadWorkbookModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-headline">One more thing...</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground pt-2">
            I am charging a small amount of ₹49 for this workbook because creating it took a lot of time and energy. I am very confident that this workbook will help you become aware of your real passion and talent. It is truly worth it.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col items-center justify-center pt-4 sm:flex-col sm:justify-center gap-2">
          <Button asChild size="lg" className="w-full">
            <a href="/passion-finder-workbook.pdf" download="passion-finder-workbook.pdf">
              Get the Workbook for ₹49
            </a>
          </Button>
          <p className="text-base text-muted-foreground text-center">
            This worksheet is in PDF format. You are free to share it with your siblings, cousins, and friends.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
