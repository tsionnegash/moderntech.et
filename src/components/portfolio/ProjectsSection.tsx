import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    longDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/tsion/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription:
      "A powerful task management application enabling teams to collaborate efficiently with real-time updates, drag-and-drop functionality, and comprehensive project tracking capabilities.",
    tech: ["React", "Socket.io", "PostgreSQL", "Node.js"],
    github: "https://github.com/tsion/taskapp",
    demo: "https://taskapp-demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization and forecasting",
    longDescription:
      "An intuitive weather dashboard providing real-time weather data, 7-day forecasts, interactive maps, and personalized weather alerts for multiple locations worldwide.",
    tech: ["Python", "Flask", "Chart.js", "OpenWeather API"],
    github: "https://github.com/tsion/weather",
    demo: "https://weather-demo.com",
  },
  {
    title: "Blog CMS",
    description: "Content management system with rich text editing",
    longDescription:
      "A feature-rich content management system with WYSIWYG editor, SEO optimization, user roles, comment system, and responsive design for content creators.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/tsion/blog-cms",
    demo: "https://blog-demo.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 golden-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="flip-card h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front golden-glow bg-card/80 backdrop-blur-sm border-golden/20 flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 golden-text">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-golden/20 rounded-md text-xs font-medium text-golden"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Back */}
                <Card className="flip-card-back golden-glow bg-card border-golden/20 flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 golden-text">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/80 mb-4 flex-grow">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-golden/20 rounded-md text-xs font-medium text-golden"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-golden/30 hover:bg-golden/10 flex-1"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-golden hover:bg-golden/90 text-golden-foreground flex-1"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
