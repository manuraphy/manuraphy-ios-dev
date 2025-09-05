import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Consultant",
      company: "Tata Consultancy Services (TCS)",
      period: "Dec 2021 - Present",
      location: "Ernakulam",
      achievements: [
        "Lead mobile teams to design, develop, and maintain iOS applications with scalable, secure architectures",
        "Integrate REST services with robust authentication, error handling, and efficient data flow",
        "Establish automated test suites and CI/CD with GitHub Actions to improve quality and accelerate releases",
        "Define and enforce coding standards and review processes across development teams"
      ]
    },
    {
      title: "Associate Technical Lead", 
      company: "MicroObjects Pvt. Ltd.",
      period: "Sep 2017 - Nov 2021",
      location: "Ernakulam",
      achievements: [
        "Built and maintained native iOS apps in Swift/Objective-C with MVVM and modular architectures",
        "Mentored developers and drove Agile ceremonies for cross-functional collaboration", 
        "Shipped Geoteamz Public Safety and related products with secure auth and real-time updates",
        "Delivered B2B and public-safety solutions on schedule with focus on reliability and security"
      ]
    },
    {
      title: "Senior iOS Developer",
      company: "Geojit Technologies", 
      period: "Jan 2013 - Sep 2017",
      location: "Ernakulam",
      achievements: [
        "Developed trading and banking apps with Touch ID, Apple Watch, widgets, and Siri integration",
        "Implemented interactive charts and performance-sensitive UI for active traders",
        "Delivered ConsorsBank with advanced features following Apple Human Interface Guidelines",
        "Ensured reliability and security standards in all production releases"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">
            12+ years of progressive growth in iOS development
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card-gradient rounded-xl p-8 shadow-lg card-hover border-l-4 border-primary"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {exp.title}
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {exp.company}
                </h4>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;