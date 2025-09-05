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
            <strong className="text-primary">Innovating Mobile Experiences with Expertise & AI-Driven Development.</strong>

          </p>
           
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Dynamic mobile application development leader with <strong className="text-primary">12+ years of experience</strong> in iOS <strong className="text-primary"> (Objective-C/Swift/Swift UI) </strong> 
and cross-platform frameworks <strong className="text-primary">(React Native/Flutter)</strong>. Skilled in <strong className="text-primary">solution architecture</strong>, <strong className="text-primary">agile methodologies</strong>, 
and team <strong className="text-primary">leadership</strong>, I excel at delivering high-performance mobile applications tailored to business needs. 
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
By <strong className="text-primary">leveraging AI tools</strong> and prompt engineering, I accelerate development, automate workflows, 
and enhance productivity — ensuring faster delivery of cutting-edge mobile solutions across industries.
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