import { Code, Database, Globe, Users, Mic, Clock } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML5", "CSS3"]
    },
    {
      title: "Core CS Concepts",
      icon: <Database className="w-6 h-6" />,
      skills: ["Data Structures", "Algorithms", "OOPs", "DBMS"]
    },
    {
      title: "Tools & Platforms",
      icon: <Code className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Excel", "Canva"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Team Collaboration", "Public Speaking", "Time Management"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across multiple technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-portfolio p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;