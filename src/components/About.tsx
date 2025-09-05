const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-card-gradient rounded-2xl p-8 lg:p-12 shadow-lg card-hover">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            iOS engineer with <strong className="text-primary">12+ years</strong> of experience building secure, 
            scalable applications in <strong className="text-primary">Swift/Objective-C</strong> and 
            <strong className="text-primary"> SwiftUI/UIKit</strong> across banking, trading, and public safety sectors.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Expert in <strong className="text-primary">REST APIs</strong>, authentication, state management, 
            and performance optimization, with extensive experience in automated testing and 
            <strong className="text-primary"> CI/CD via GitHub Actions</strong> for fast, reliable releases.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">MCA - MG University, Kottayam</h4>
                  <p className="text-muted-foreground">Software Development & Analysis</p>
                </div>
                <div>
                  <h4 className="font-medium">B.Sc. - MG University</h4>
                  <p className="text-muted-foreground">Mathematics & Statistics</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">English</h4>
                  <p className="text-muted-foreground">Professional (C2)</p>
                </div>
                <div>
                  <h4 className="font-medium">Malayalam</h4>
                  <p className="text-muted-foreground">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;