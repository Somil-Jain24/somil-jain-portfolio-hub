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
              <div className="rounded-full p-1 bg-white shadow-lg" style={{ width: 320, height: 320 }}>
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary" style={{ boxShadow: '0 12px 30px -10px rgba(23, 106, 255, 0.12)' }}>
                  <img
                    src={profileImageUrl}
                    alt="Somil Jain - Professional Photo"
                    className="w-full h-full object-cover"
                    style={{ animationDelay: '0.18s' }}
                    onError={(e) => {
                      console.log('Image failed to load:', e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left lg:order-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.06s' }}>
                  <span className="text-gradient">Somil Jain</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-2 animate-fade-in" style={{ animationDelay: '0.12s' }}>
                  B.Tech IT Student | Aspiring Software Developer
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.16s' }}>
                  <MapPin className="w-4 h-4" />
                  <span>Indore, India</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.22s' }}>
                Motivated IT student with strong programming & web development fundamentals, 
                seeking internships and impactful opportunities to grow technical expertise.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.28s' }}>
                <a href="tel:+91-8602375155" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91-860-237-5155</span>
                </a>
                <a href="mailto:somiljain024@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>somiljain024@gmail.com</span>
                </a>
              </div>

              {/* Action buttons removed from main hero per request */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;