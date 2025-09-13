import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science (B.Sc), Computer Science",
      institution: "Government Autonomous College, Rourkela",
      period: "2022 - 2025",
      type: "Current",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Senior Secondary (XII), Science",
      institution: "Rairangpur College, Mayurbhanj, Odisha",
      period: "CHSE Board, 2022",
      grade: "80.50%",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Secondary (X)",
      institution: "Saraswati Sishu Vidya Mandir, Rairangpur, Odisha",
      period: "BSE Board, 2020",
      grade: "79%",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic journey in Computer Science with a focus on building strong fundamentals
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 animate-scale-in border-card-border">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    {item.grade && (
                      <div className="px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold text-center">
                        {item.grade}
                      </div>
                    )}
                    {item.type && (
                      <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-center">
                        {item.type}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;