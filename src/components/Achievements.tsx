import { Trophy, Calendar, Award, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Front-End Battle 2.0",
      year: "2025",
      description: "Developed responsive UI with advanced theme toggling functionality",
      type: "Hackathon",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "Tutedude Buildathon",
      year: "2025", 
      description: "Created innovative health web application user interface",
      type: "Competition",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "DCC Mystery Challenge",
      year: "2025",
      description: "Solved complex logic-building challenges and programming puzzles",
      type: "Challenge",
      icon: <Target className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Hackathons & Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and participation in competitive programming and development events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="card-portfolio p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {achievement.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;