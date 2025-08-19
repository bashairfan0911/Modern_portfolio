import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <div className="animate-fade-in-down">
            <p className="text-lg text-muted-foreground mb-4">Hello, I'm</p>
          </div>
          
          {/* Main name with typewriter effect */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Irfan Basha
            </h1>
          </div>

          {/* Role with slide animation */}
          <div className="animate-slide-in-left" style={{animationDelay: '0.6s'}}>
            <div className="relative inline-block">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4 overflow-hidden whitespace-nowrap border-r-4 border-primary animate-typewriter">
                DevOps & Data Analyst
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate fresher ready to dive into the world of DevOps automation and data-driven insights. 
              Eager to learn, grow, and contribute to innovative solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in" style={{animationDelay: '1.2s'}}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-right" style={{animationDelay: '1.5s'}}>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/bashairfan0911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
              >
                <Github className="h-6 w-6 group-hover:animate-bounce" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
              >
                <Linkedin className="h-6 w-6 group-hover:animate-bounce" />
              </a>
              <a 
                href="mailto:irfanbasha@email.com" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
              >
                <Mail className="h-6 w-6 group-hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;