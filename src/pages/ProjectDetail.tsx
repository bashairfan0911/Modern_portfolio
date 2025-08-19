import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Target } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API
  const projects: Record<string, any> = {
    "1": {
      title: "Automated CI/CD Pipeline",
      description: "Built a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated deployment of web applications.",
      longDescription: "This project demonstrates my understanding of modern DevOps practices by creating an end-to-end CI/CD pipeline. The pipeline automatically builds, tests, and deploys applications using industry-standard tools.",
      image: "/api/placeholder/800/400",
      tags: ["Jenkins", "Docker", "Kubernetes", "Git", "Linux"],
      status: "Learning Project",
      type: "DevOps",
      duration: "3 months",
      teamSize: "1 (Personal Project)",
      objectives: [
        "Learn Jenkins pipeline configuration",
        "Understand containerization with Docker",
        "Gain experience with Kubernetes orchestration",
        "Implement automated testing and deployment"
      ],
      challenges: [
        "Understanding Kubernetes networking concepts",
        "Configuring Jenkins with proper security",
        "Managing Docker image optimization",
        "Setting up monitoring and logging"
      ],
      achievements: [
        "Successfully automated deployment process",
        "Reduced manual deployment time by 80%",
        "Implemented proper testing stages",
        "Created comprehensive documentation"
      ],
      technologies: {
        "CI/CD": ["Jenkins", "Git Actions"],
        "Containerization": ["Docker", "Docker Compose"],
        "Orchestration": ["Kubernetes", "Helm"],
        "Monitoring": ["Prometheus", "Grafana"],
        "Cloud": ["Learning AWS/GCP concepts"]
      },
      github: "https://github.com/bashairfan0911",
      demo: "#",
      learnings: [
        "Infrastructure as Code principles",
        "Container security best practices",
        "Monitoring and alerting strategies",
        "Git workflow optimization"
      ]
    },
    "2": {
      title: "Sales Data Analytics Dashboard",
      description: "Created an interactive dashboard using Python and PowerBI to analyze sales trends and customer insights.",
      longDescription: "This data analysis project showcases my ability to extract meaningful insights from raw sales data using Python for data processing and PowerBI for visualization.",
      image: "/api/placeholder/800/400",
      tags: ["Python", "PowerBI", "Pandas", "SQL", "Data Visualization"],
      status: "In Progress",
      type: "Data Analysis",
      duration: "2 months",
      teamSize: "1 (Personal Project)",
      objectives: [
        "Analyze sales trends and patterns",
        "Create interactive visualizations",
        "Identify key performance indicators",
        "Provide actionable business insights"
      ],
      challenges: [
        "Cleaning inconsistent data sources",
        "Designing effective visualizations",
        "Handling large datasets efficiently",
        "Creating meaningful KPIs"
      ],
      achievements: [
        "Processed 100k+ sales records",
        "Created 15+ interactive charts",
        "Identified seasonal trends",
        "Built automated reporting system"
      ],
      technologies: {
        "Data Processing": ["Python", "Pandas", "NumPy"],
        "Visualization": ["PowerBI", "Matplotlib", "Seaborn"],
        "Database": ["SQL", "SQLite"],
        "Tools": ["Jupyter Notebook", "Excel"]
      },
      github: "https://github.com/bashairfan0911",
      demo: "#",
      learnings: [
        "Data cleaning and preprocessing",
        "Statistical analysis techniques",
        "Dashboard design principles",
        "Business intelligence concepts"
      ]
    }
  };

  const project = projects[id || "1"];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:scale-105 transition-transform"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-4">
                <Badge className={
                  project.type === "DevOps" 
                    ? "bg-blue-500/10 text-blue-600 border-blue-200" 
                    : "bg-green-500/10 text-green-600 border-green-200"
                }>
                  {project.type}
                </Badge>
                <Badge 
                  variant="secondary"
                  className={
                    project.status === "Learning Project" 
                      ? "bg-yellow-500/10 text-yellow-600 border-yellow-200 ml-2"
                      : "bg-blue-500/10 text-blue-600 border-blue-200 ml-2"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{project.longDescription}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="hover:scale-105 transition-transform">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="animate-fade-in-up">
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium">{project.duration}</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle>Team Size</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium">{project.teamSize}</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle>Type</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium">{project.type}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Objectives & Challenges */}
            <div className="space-y-8">
              <Card className="animate-slide-in-left">
                <CardHeader>
                  <CardTitle>Project Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle>Challenges Faced</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Achievements & Learnings */}
            <div className="space-y-8">
              <Card className="animate-slide-in-right">
                <CardHeader>
                  <CardTitle>Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle>Key Learnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Technologies Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.technologies).map(([category, techs], index) => (
              <Card 
                key={category} 
                className="animate-scale-in hover:shadow-xl transition-shadow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(techs as string[]).map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;