import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, BarChart } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "Git", "Linux"], icon: <Cloud className="h-5 w-5" />, color: "bg-blue-500/10 text-blue-600 border-blue-200" },
    { category: "Data Analysis", items: ["Python", "SQL", "Excel", "PowerBI", "Tableau"], icon: <BarChart className="h-5 w-5" />, color: "bg-green-500/10 text-green-600 border-green-200" },
    { category: "Programming", items: ["Python", "JavaScript", "Bash", "YAML", "JSON"], icon: <Code className="h-5 w-5" />, color: "bg-purple-500/10 text-purple-600 border-purple-200" },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"], icon: <Database className="h-5 w-5" />, color: "bg-orange-500/10 text-orange-600 border-orange-200" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            As a passionate fresher in the tech industry, I'm excited to begin my journey in DevOps and Data Analysis. 
            I have been learning and building projects to develop my skills in automation, data insights, and modern technology stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Learning Phase</h4>
                      <p className="text-muted-foreground">Currently mastering DevOps tools and data analysis techniques through online courses and hands-on projects.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Project Building</h4>
                      <p className="text-muted-foreground">Creating practical projects to demonstrate skills in automation, monitoring, and data visualization.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Future Goals</h4>
                      <p className="text-muted-foreground">Seeking opportunities to contribute to innovative teams and grow as a DevOps and Data professional.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Status</span>
                    <Badge className="bg-green-500/10 text-green-600 border-green-200">Fresher - Ready to Learn</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Focus Areas</span>
                    <span className="text-muted-foreground">DevOps & Data Analysis</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Location</span>
                    <span className="text-muted-foreground">Open to Remote/Hybrid</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Availability</span>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-200">Immediately Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8 animate-fade-in-up">Skills & Technologies</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => (
            <Card 
              key={skillCategory.category} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="text-center space-y-4">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${skillCategory.color}`}>
                  {skillCategory.icon}
                </div>
                <h4 className="font-semibold text-lg">{skillCategory.category}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;