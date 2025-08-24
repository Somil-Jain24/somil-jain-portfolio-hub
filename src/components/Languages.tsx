import { Globe, MessageCircle } from "lucide-react";

const Languages = () => {
  const languages = [
    {
      language: "Hindi",
      proficiency: "Fluent",
      level: "Native",
      description: "Native speaker with complete fluency in speaking, reading, and writing"
    },
    {
      language: "English", 
      proficiency: "Professional Proficiency",
      level: "Advanced",
      description: "Strong command in technical communication, presentations, and documentation"
    }
  ];

  return (
    <section className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication abilities for global collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={lang.language}
              className="card-portfolio p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {lang.language}
                    </h3>
                    <span className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                      {lang.level}
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium text-text-accent mb-3">
                    {lang.proficiency}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;