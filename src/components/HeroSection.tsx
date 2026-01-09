import { Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <p className="font-mono text-primary mb-4 text-sm md:text-base animate-fade-in">
          Hi, my name is
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Said Mwalulu
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          I build projects for the web & mobile.
        </h2>
        
        <p className="text-muted-foreground max-w-xl text-base md:text-lg mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Full-stack developer specializing in crafting exceptional digital experiences. 
          From mobile-first Android applications to scalable REST APIs, I transform ideas into 
          polished, user-centric solutions.
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            asChild
            size="lg" 
            className="font-mono glow-primary hover:scale-105 transition-transform"
          >
            <a href="#projects">View My Work</a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="font-mono border-primary/50 text-primary hover:bg-primary/10"
          >
            <a href="https://github.com/Saidmwalulu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
