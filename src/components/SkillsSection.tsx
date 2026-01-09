import { Code, Server, Database, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["ReactJS", "NextJS", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["NodeJS", "Laravel", "REST APIs", "PHP"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  },
  {
    title: "Other Skills",
    icon: Settings,
    skills: ["Agile Methodology", "ICT Support & Maintenance", "Troubleshooting", "Android Development"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span>
          Skills & Technologies
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
