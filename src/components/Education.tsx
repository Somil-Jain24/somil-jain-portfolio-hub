import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
  <section id="education" className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and achievements in Information Technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-portfolio p-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Technology - Information Technology
                </h3>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Acropolis Institute of Technology and Research, Indore
                </h4>
                
                <div className="flex flex-wrap gap-6 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Indore, Madhya Pradesh</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                  <span className="text-sm font-semibold text-secondary-foreground">
                    Current CGPA: 7.25 / 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;