import { Shield, Award, Code, Image, Brain } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Cisco Cybersecurity",
      provider: "Cisco",
      category: "Security",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-blue-500"
    },
    {
      title: "Salesforce AI Specialist",
      provider: "Salesforce",
      category: "AI/ML",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-cyan-500"
    },
    {
      title: "Salesforce AI Associate",
      provider: "Salesforce", 
      category: "AI/ML",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-cyan-500"
    },
    {
      title: "MATLAB Onramp",
      provider: "MathWorks",
      category: "Programming",
      icon: <Code className="w-5 h-5" />,
      color: "bg-orange-500"
    },
    {
      title: "Image Processing Onramp",
      provider: "MathWorks",
      category: "Specialized",
      icon: <Image className="w-5 h-5" />,
      color: "bg-purple-500"
    },
    {
      title: "OOP Onramp",
      provider: "MathWorks",
      category: "Programming",
      icon: <Code className="w-5 h-5" />,
      color: "bg-green-500"
    },
    {
      title: "Cybersecurity Workshop",
      provider: "CY3",
      category: "Security",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-500"
    }
  ];

  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  return (
    <section className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedCertifications).map(([category, certs], categoryIndex) => (
            <div key={category} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="card-portfolio p-6 animate-scale-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${cert.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;