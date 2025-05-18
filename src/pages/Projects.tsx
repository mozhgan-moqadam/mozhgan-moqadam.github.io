
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features a clean, minimalist design with dark mode support and smooth animations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, set priorities, and track progress. Includes features like drag-and-drop, filters, and calendar integration.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=600&auto=format&fit=crop",
    tags: ["React", "Redux", "Firebase"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <AspectRatio ratio={16/9}>
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-primary hover:text-primary/80 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
