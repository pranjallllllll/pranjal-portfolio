import { Github, ExternalLink, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "A sophisticated machine learning system that recommends movies based on user preferences and similarity measures. Built using Python with advanced ML algorithms for accurate content-based filtering.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "scikit-learn", "Data Analysis"],
      features: [
        "Content-based filtering algorithm",
        "User preference analysis", 
        "Similarity measure calculations",
        "Interactive recommendation interface",
        "Data visualization of results"
      ],
      status: "Completed",
      type: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing practical applications of machine learning and data science concepts
            </p>
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-card-border">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                            {project.status}
                          </span>
                          <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full border border-border hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="default" className="flex-1">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Play className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              More projects coming soon! I'm constantly working on new data science and AI projects.
            </p>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;