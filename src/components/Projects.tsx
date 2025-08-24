import { ExternalLink, Github, Heart, MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Health Saarthi",
      subtitle: "Smart Web Healthcare Solution",
      description: "Comprehensive healthcare platform featuring symptom checker, doctor locator, intelligent chatbot, and bilingual support to make healthcare accessible.",
      features: [
        "AI-powered symptom analysis",
        "Doctor location services", 
        "Multilingual chatbot support",
        "Responsive web design"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      icon: <Heart className="w-6 h-6" />,
      status: "Featured Project"
    }
  ];

  return (
    <section className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-portfolio p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-text-accent mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a href="https://tutedemo.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-primary-hover text-primary-foreground w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                  <a href="https://github.com/Somil-Jain24/tute.git" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground w-full">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;