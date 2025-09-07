const Skills = () => {
  const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "Swift", "SwiftUI", "UIKit", "Objective-C", 
      "React Native", "Flutter", "Combine", "iOS SDK"
    ]
  },
  {
    title: "Architecture & Design",
    skills: [
      "MVVM", "MVC", "VIPER (exposure)", "SOLID Principles", 
      "Clean Architecture", "Modularization", 
      "State Management", "Concurrency (GCD/Operations/async-await)"
    ]
  },
  {
    title: "Networking & APIs",
    skills: [
      "REST APIs", "GraphQL (exposure)", "Authentication (OAuth/JWT)", 
      "URLSession / Alamofire", "Error Handling & Retry Logic", 
      "Response Caching", "Secure Data Handling"
    ]
  },
  {
    title: "Quality & DevOps",
    skills: [
      "Unit Testing (XCTest)", "UI Testing (XCUITest)", "TestFlight & App Store Distribution",
      "CI/CD Pipelines", "GitHub Actions"
    ]
  },
  {
    title: "AI & Productivity",
    skills: [
      "AI-Assisted Development", "Prompt Engineering", 
      "Automation of Workflows", "Code Generation Tools"
    ]
  },
  {
    title: "Tools & Process",
    skills: [
      "Xcode", "Git/GitHub", "Agile/Scrum", 
      "JIRA / Confluence", "Figma (collaboration)"
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