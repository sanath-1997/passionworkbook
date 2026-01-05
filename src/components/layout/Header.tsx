import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 px-4 md:px-6 z-10">
      <div className="container mx-auto flex items-center gap-2">
        <Compass className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-semibold font-headline tracking-tight">Pathfinder Workbook</h1>
      </div>
    </header>
  );
}
