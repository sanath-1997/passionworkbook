export function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 mt-16 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Pathfinder Workbook. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
