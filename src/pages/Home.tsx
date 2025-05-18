
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Wrench } from "lucide-react";

const Home = () => {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
        <Avatar className="h-32 w-32 md:h-48 md:w-48 border-2 border-border">
          <AvatarImage 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300" 
            alt="Profile" 
          />
          <AvatarFallback className="text-4xl">MM</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Mozhgan Moghaddam</h1>
          <h2 className="text-xl text-muted-foreground mb-4">Frontend Developer</h2>
          <p className="max-w-2xl text-muted-foreground">
            Frontend Developer with experience in the Angular framework, specializing in developing interactive and responsive web platforms that enhance performance and user experience. Skilled in working within Agile Scrum teams and proficient in TypeScript, Javascript,  HTML, CSS, and Bootstrap.
          </p>
        </div>
      </section>
      
      <Separator className="my-8" />
      
      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        
        <div className="space-y-8">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-lg font-medium">Personal Development</h3>
              <span className="text-sm text-muted-foreground">Jan 2024 - Present</span>
            </div>
            <p className="text-muted-foreground mb-2">Self-driven Projects</p>
            <p>
    • Mastered frontend development through targeted courses, including Advanced HTML and CSS, leading to the creation of fully responsive designs.
    • Improved English language proficiency through structured learning and daily practice.
    • Built a personal portfolio website using HTML, CSS, and Angular, showcasing various frontend development techniques.
    • Contributed to open-source projects on GitHub by enhancing documentation, refactoring code, and improving functionality—resulting in a 25% increase in project forks.
  </p>
          </div>
          
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-lg font-medium">Angular Developer</h3>
              <span className="text-sm text-muted-foreground"> Jan 2023- Dec 2023</span>
            </div>
            <p className="text-muted-foreground mb-2">Dolphin-co</p>
<p>
    • Developed a dynamic e-commerce platform using Angular, resulting in a 40% increase in online sales and reduced page load times.  
    • Designed and implemented reusable components, services, and models to enhance code maintainability and scalability.  
    • Refactored legacy code to improve quality, performance, and readability.  
    • Ensured cross-browser compatibility and full responsiveness across all application pages.  
    • Collaborated with UI/UX designers to optimize user interfaces and elevate user experience.  
    • Worked closely with the backend team to ensure seamless API integration and platform functionality.  
    • Actively participated in Agile Scrum ceremonies to support timely and efficient project delivery.
  </p>         
   </div>
        </div>
      </section>
      
      <Separator className="my-8" />
      
      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        
        <div className="space-y-8">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-lg font-medium">Bachelor Occupational Safety Engineering</h3>
              <span className="text-sm text-muted-foreground">2019 - 2023</span>
            </div>
            <p className="text-muted-foreground mb-2">Iran University of Medical science</p>
          </div>
          
        </div>
      </section>
      
      <Separator className="my-8" />
      
      {/* Skills Section */}
      <section id="skills" className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Git","Rest API"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[  "Problem Solving", "Communication", "Time Management"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
