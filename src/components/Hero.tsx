import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
// Using the uploaded image directly from public folder
const profileImageUrl = "/lovable-uploads/9bd95e35-9d48-43fe-a0ae-e561cbc5fa5b.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-20 scale-110"></div>
              <img
                src={profileImageUrl}
                alt="Somil Jain - Professional Photo"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl animate-scale-in"
                onError={(e) => {
                  console.log('Image failed to load:', e);
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left lg:order-1 animate-fade-in">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-gradient">Somil Jain</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-2">
                  B.Tech IT Student | Aspiring Software Developer
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Indore, India</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Motivated IT student with strong programming & web development fundamentals, 
                seeking internships and impactful opportunities to grow technical expertise.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="tel:+91-8602375155" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91-860-237-5155</span>
                </a>
                <a href="mailto:somiljain024@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>somiljain024@gmail.com</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <a href="mailto:somiljain024@gmail.com">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </a>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/somil-jain-a10b1729b/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://github.com/Somil-Jain24" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;