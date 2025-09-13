import { Code2, Database, Brain, Users, Globe, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data Science",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        "Python", "R Programming", "C", "C++", "Data Analysis", "Data Science", 
        "Machine Learning", "Deep Learning", "AI", "Neural Networks", 
        "Supervised/Unsupervised Learning", "Reinforcement Learning"
      ],
      color: "primary"
    },
    {
      title: "Python Libraries & Tools",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "Keras", 
        "TensorFlow", "PyTorch", "Tableau", "Jupyter Notebook", "Google Colab"
      ],
      color: "accent"
    },
    {
      title: "Development & Version Control",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "Git", "GitHub", "GitHub Copilot", "Web Development", "MySQL", 
        "VS Code", "PyCharm"
      ],
      color: "primary"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        "Problem Solving", "Analytical Thinking", "Effective Communication", 
        "Adaptability", "Team Collaboration", "Time Management", 
        "Research and Analytics", "Creativity", "Conflict Management"
      ],
      color: "accent"
    },
    {
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "English (Written & Spoken)", "Hindi (Written & Spoken)", 
        "Odia (Written & Spoken)"
      ],
      color: "primary"
    },
    {
      title: "Other Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        "ChatGPT", "Gemini", "DeepSeek", "Grok", "Perplexity", "Notion", 
        "Google Drive", "Google Docs", "Document Management"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning data science, machine learning, and software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in border-card-border group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${
                    category.color === 'primary' 
                      ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' 
                      : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                  } transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 hover:scale-105 ${
                        category.color === 'primary'
                          ? 'bg-primary/5 text-primary border-primary/20 hover:bg-primary/10'
                          : 'bg-accent/5 text-accent border-accent/20 hover:bg-accent/10'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;