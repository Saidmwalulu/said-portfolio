import { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-mono text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            SM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="font-mono border-primary/50 text-primary hover:bg-primary/10"
            >
              <a href="https://github.com/Saidmwalulu" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <a
              href="https://github.com/Saidmwalulu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
