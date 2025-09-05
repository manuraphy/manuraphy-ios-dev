const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "Swift", "SwiftUI", "UIKit", "Objective-C", "iOS SDK", 
        "Xcode", "React Native", "Flutter"
      ]
    },
    {
      title: "Architecture & Design",
      skills: [
        "MVVM", "MVC", "SOLID Principles", "Modularization", 
        "State Management", "Multithreading (GCD/Operations)"
      ]
    },
    {
      title: "Networking & APIs",
      skills: [
        "REST APIs", "Authentication", "JSON", "URLSession/Alamofire", 
        "Error Handling", "Caching", "Retry Logic"
      ]
    },
    {
      title: "Quality & DevOps",
      skills: [
        "Unit Testing (XCTest)", "UI Testing (XCUITest)", "Code Review", 
        "CI/CD", "GitHub Actions", "App Store Distribution"
      ]
    },
    {
      title: "Tools & Process",
      skills: [
        "Agile/Scrum", "JIRA/Confluence", "Git", "Push Notifications", 
        "SiriKit", "WatchOS", "ARKit", "Touch ID"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">
            Core Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the iOS development ecosystem
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card-gradient rounded-xl p-6 shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;