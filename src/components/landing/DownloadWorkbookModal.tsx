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
import { Download } from 'lucide-react';

export function DownloadWorkbookModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>One more thing...</DialogTitle>
          <DialogDescription>
            I am charging a small amount of ₹49 for this workbook because creating it took a lot of time and energy. I am very confident that this workbook will help you become aware of your real passion and talents. It is truly worth it.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-2">
          <Button asChild size="lg">
            <a href="/passion-finder-workbook.pdf" download="passion-finder-workbook.pdf">
              Get the Workbook
            </a>
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            This worksheet is in PDF format and can be downloaded. You are free to share it with your siblings, cousins, and friends.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
