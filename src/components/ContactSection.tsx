import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary mb-4">04. What's Next?</p>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Get In Touch
        </h2>
        
        <p className="text-muted-foreground mb-10 text-lg">
          I'm currently open to new opportunities and exciting projects. 
          Whether you have a question, a project idea, or just want to say hello, 
          my inbox is always open!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            asChild
            size="lg" 
            className="font-mono glow-primary hover:scale-105 transition-transform"
          >
            <a href="mailto:hello@saidmwalulu.dev">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="font-mono border-primary/50 text-primary hover:bg-primary/10"
          >
            <a href="https://github.com/Saidmwalulu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
