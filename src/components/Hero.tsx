import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, User } from "lucide-react";
import photo from "../assets/Manu_Raphy.png"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Manu Raphy
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-white/90">
                Lead iOS Engineer
              </h2>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                12+ years building secure, scalable mobile applications in Swift & SwiftUI. 
                Specialized in banking, trading, and public safety solutions.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Ernakulam, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 94968 25048</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                onClick={() => window.open('https://linkedin.com/in/manuraphy', '_blank')}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Profile Photo */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-80 h-80 lg:w-116 lg:h-116 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl bg-primary/20 flex items-center justify-center">
      <img
        src={photo}
        alt="Manu Raphy"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
  </div>
</div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;