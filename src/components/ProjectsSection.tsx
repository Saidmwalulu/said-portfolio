import { ExternalLink, Smartphone, Server } from "lucide-react";

const projects = [
  {
    title: "Rifkins College Android App",
    period: "2011 FEB - 2014 NOV",
    description: "Designed and developed a mobile-first Android application by transforming the college website into a user-friendly app. Improved accessibility to academic resources and enhanced student engagement through an optimized mobile experience.",
    tech: ["Android", "Java", "Mobile UI/UX"],
    icon: Smartphone,
  },
  {
    title: "Sport City Android App",
    period: "2003 FEB - 2010 NOV",
    description: "Developed and published a community-focused football application providing tournament information, fixtures, and embedded YouTube video highlights. Created a centralized platform to improve community engagement with local football activities.",
    tech: ["Android", "YouTube API", "Community Platform"],
    icon: Smartphone,
  },
  {
    title: "Laravel REST APIs",
    period: "Backend Development",
    description: "Designed and implemented secure, scalable RESTful APIs using Laravel to support mobile applications. Ensured efficient data handling, authentication, and seamless integration between frontend and backend systems.",
    tech: ["Laravel", "PHP", "REST API", "Authentication"],
    icon: Server,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span>
          Projects & Achievements
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-gradient rounded-lg p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-sm text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
