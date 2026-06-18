const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Praveen Kumar TMR.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Last updated: June 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
