import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manuraphy@gmail.com",
      href: "mailto:manuraphy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 94968 25048",
      href: "tel:+919496825048"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ernakulam, India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manuraphy",
      href: "https://linkedin.com/in/manuraphy"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next iOS project? I'm always open to connecting with fellow developers and potential collaborators.
          </p>
        </div>
        
        <div className="bg-card-gradient rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => window.open('mailto:manuraphy@gmail.com', '_blank')}
                className="px-8"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/manuraphy', '_blank')}
                className="px-8"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;