import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Manu Raphy
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Senior iOS Engineer specializing in secure, scalable mobile applications
          </p>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built with 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              using React & Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2024 Manu Raphy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;