import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          Designed & Built by Said Mwalulu
        </p>
        
        <a
          href="https://github.com/Saidmwalulu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="font-mono text-sm">github.com/Saidmwalulu</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
