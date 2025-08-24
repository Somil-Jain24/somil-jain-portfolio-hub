import { Camera, Users, Calendar, Target } from "lucide-react";

const Leadership = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Leadership Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building communities and leading initiatives in technology and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-portfolio p-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Photography Lead
                </h3>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  DSAC (Data Science & Analytics Club)
                </h4>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leading the visual documentation and media strategy for one of the premier technical clubs. 
                  Responsible for capturing key moments during events, workshops, and seminars while 
                  coordinating with team members to ensure comprehensive coverage.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Event Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Team Coordination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Media Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Event Planning</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Communication", "Teamwork", "Creative Direction", "Event Management"].map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;