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
import { Gift } from "lucide-react";

export function DownloadWorkbookModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-headline">One more thing... ✨</DialogTitle>
          <DialogDescription asChild>
            <div className="text-xl text-foreground pt-2">
            <p>I am charging a small amount of ₹49 for this workbook because creating it took a lot of time and energy. I am very confident that this workbook will help you become aware of your real passion and talent. It is truly worth it.</p>
            <p className="text-red-500 mt-2 text-lg">Kindly take a printout of the PDF after you download.</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col items-center justify-center pt-4 sm:flex-col sm:justify-center sm:space-y-0 gap-2">
          <Button asChild size="lg" className="w-full text-base">
            <a href="/passion-finder-workbook.pdf" download="passion-finder-workbook.pdf">
              <Gift className="mr-2 h-5 w-5" />
              Get the Workbook for ₹49
            </a>
          </Button>
          <div className="h-2" />
          <p className="text-sm text-foreground text-center pt-2">
            This worksheet is in PDF format. You are free to share it with your siblings, cousins, and friends.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
