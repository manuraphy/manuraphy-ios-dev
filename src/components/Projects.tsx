import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ConsorsBank",
      type: "Trading & Banking App",
      description: "Comprehensive banking and trading application with advanced security features including Touch ID login, Apple Watch/TV integration, watchlist widgets, Siri cash transfer, invoice scanning, 3D Touch, and interactive charts.",
      features: [
        "Touch ID Authentication",
        "Apple Watch & TV Integration", 
        "Siri Cash Transfer",
        "Interactive Trading Charts",
        "Invoice Scanning",
        "3D Touch Support"
      ],
      appStoreUrl: "https://apps.apple.com/in/app/consorsbank/id930883278",
      isLive: true
    },
    {
      title: "Geoteamz Public Safety",
      type: "B2B Enterprise Solution",
      description: "Mission-critical application that mobilizes police and fire departments with rapid alerts and real-time information sharing. Built for reliability and security in emergency response scenarios.",
      features: [
        "Real-time Emergency Alerts",
        "Secure Authentication",
        "Location Services",
        "Cross-team Communication",
        "Offline Capabilities",
        "Enterprise Security"
      ],
      appStoreUrl: "https://apps.apple.com/in/app/geoteamz-public-safety/id1531710919",
      isLive: true
    },
    {
      title: "BankSmart (BNP Paribas)",
      type: "Hybrid Banking Solution",
      description: "Cross-platform banking application enabling secure account access and payments with enterprise-grade encryption across iOS, Android, and BlackBerry platforms.",
      features: [
        "Cross-platform Architecture",
        "Enterprise Encryption",
        "Secure Payments",
        "Multi-device Support",
        "Account Management",
        "Compliance Standards"
      ],
      isLive: false
    },
    {
      title: "respond@",
      type: "React Native Application",
      description: "React Native wrapper application with native iOS authentication and location updates, available on both iOS App Store and Google Play Store.",
      features: [
        "React Native Framework",
        "Native Authentication",
        "Location Services",
        "Cross-platform Deployment",
        "Real-time Updates",
        "Hybrid Architecture"
      ],
      isLive: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing key applications across banking, trading, and public safety sectors
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card-gradient rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-accent uppercase tracking-wide">
                      {project.type}
                    </p>
                  </div>
                  {project.isLive && (
                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Smartphone className="h-3 w-3 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {project.appStoreUrl && (
                <Button 
                  onClick={() => window.open(project.appStoreUrl, '_blank')}
                  className="w-full"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on App Store
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;