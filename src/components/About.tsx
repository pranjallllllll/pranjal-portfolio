const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Career Objective
            </h2>
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 border border-card-border">
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                I'm a <span className="text-primary font-semibold">Computer Science graduate</span> with 
                an interest in <span className="text-accent font-semibold">Data Science and AI</span>. 
                I have hands-on experience with Python and machine learning. I'm eager to apply my skills, 
                solve real-world problems, and keep learning while contributing to the organization's growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;