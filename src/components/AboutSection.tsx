const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I'm a passionate full-stack developer with expertise in building mobile applications 
              and web solutions. My journey in software development has equipped me with a diverse 
              skill set spanning frontend frameworks, backend technologies, and database management.
            </p>
            <p>
              I thrive on transforming complex requirements into elegant, user-friendly applications. 
              Whether it's developing Android apps that enhance student engagement or crafting 
              secure RESTful APIs, I approach each project with a focus on quality and performance.
            </p>
            <p>
              Beyond coding, I bring strong ICT support and troubleshooting capabilities, 
              ensuring smooth operations and quick resolution of technical challenges. I'm 
              well-versed in Agile methodology, enabling effective collaboration and iterative development.
            </p>
          </div>

          <div className="relative group">
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-6xl text-primary/30">SM</span>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
