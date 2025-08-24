import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a href="mailto:somil@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>somil@example.com</span>
              </a>
              <a href="tel:+91-xxx-xxx-xxxx" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91-XXX-XXX-XXXX</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#certifications" className="block text-muted-foreground hover:text-primary transition-colors">
                Certifications
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/somiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/somiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:somil@example.com"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 Somil Jain. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Somil Jain</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;