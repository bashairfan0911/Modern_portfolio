import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Automated CI/CD Pipeline",
      description: "Built a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated deployment of web applications.",
      image: "/api/placeholder/400/250",
      tags: ["Jenkins", "Docker", "Kubernetes", "Git"],
      status: "Learning Project",
      github: "https://github.com/bashairfan0911",
      demo: "#",
      type: "DevOps"
    },
    {
      id: 2,
      title: "Sales Data Analytics Dashboard",
      description: "Created an interactive dashboard using Python and PowerBI to analyze sales trends and customer insights.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "PowerBI", "Pandas", "SQL"],
      status: "In Progress",
      github: "https://github.com/bashairfan0911",
      demo: "#",
      type: "Data Analysis"
    },
    {
      id: 3,
      title: "Infrastructure Monitoring System",
      description: "Developed a monitoring solution using Prometheus and Grafana to track system performance and alerts.",
      image: "/api/placeholder/400/250",
      tags: ["Prometheus", "Grafana", "Linux", "Monitoring"],
      status: "Planned",
      github: "https://github.com/bashairfan0911",
      demo: "#",
      type: "DevOps"
    },
    {
      id: 4,
      title: "Customer Behavior Analysis",
      description: "Analyzed customer purchase patterns using Python and machine learning to predict future trends.",
      image: "/api/placeholder/400/250",
      tags: ["Python", "Scikit-learn", "Matplotlib", "SQL"],
      status: "Learning Project",
      github: "https://github.com/bashairfan0911",
      demo: "#",
      type: "Data Analysis"
    }
  ];

  const handleViewDetails = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Projects & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            As a fresher, these projects represent my journey of learning and skill development in DevOps and Data Analysis.
            Each project showcases different aspects of my growing technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={
                      project.type === "DevOps" 
                        ? "bg-blue-500/10 text-blue-600 border-blue-200" 
                        : "bg-green-500/10 text-green-600 border-green-200"
                    }
                  >
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary"
                    className={
                      project.status === "Learning Project" 
                        ? "bg-yellow-500/10 text-yellow-600 border-yellow-200"
                        : project.status === "In Progress"
                        ? "bg-blue-500/10 text-blue-600 border-blue-200"
                        : "bg-gray-500/10 text-gray-600 border-gray-200"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    onClick={() => handleViewDetails(project.id)}
                    className="flex-1 min-w-0 hover:scale-105 transition-transform"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="hover:scale-105 transition-transform"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="text-muted-foreground mb-6">
            More projects coming soon as I continue to learn and grow in my DevOps and Data Analysis journey!
          </p>
          <Button 
            variant="outline" 
            className="hover:scale-105 transition-transform"
            onClick={() => window.open('https://github.com/bashairfan0911', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;