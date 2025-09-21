import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Languages from "@/components/Languages";
import ShaderDemo from "@/components/ShaderDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <ShaderDemo />
      <Achievements />
      <Certifications />
      <Leadership />
      <Languages />
      <Footer />
    </div>
  );
};

export default Index;
