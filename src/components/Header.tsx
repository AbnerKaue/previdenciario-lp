const Header = () => {
  return (
    <header className="bg-card border-b border-border py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CAROLINE OLIVEIRA</h1>
              <p className="text-xs text-muted-foreground">ADVOCACIA</p>
            </div>
          </div>
          
          <a 
            href="#contato"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-md font-semibold transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
