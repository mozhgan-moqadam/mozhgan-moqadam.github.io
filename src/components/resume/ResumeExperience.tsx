
import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
  title: "Personal Development",
  company: "Self-driven Projects",
  period: "Jan 2024 – Present",
  description: `
    • Mastered frontend development through targeted courses, including Advanced HTML and CSS, leading to the creation of fully responsive designs.
    • Improved English language proficiency through structured learning and daily practice.
    • Built a personal portfolio website using HTML, CSS, and Angular, showcasing various frontend development techniques.
    • Contributed to open-source projects on GitHub by enhancing documentation, refactoring code, and improving functionality—resulting in a 25% increase in project forks.
  `
},
  {
  title: "Angular Developer",
  company: "Dolphin-co",
  period: "Jan 2023 – Dec 2023",
  description: `
    • Developed a dynamic e-commerce platform using Angular, resulting in a 40% increase in online sales and reduced page load times.  
    • Designed and implemented reusable components, services, and models to enhance code maintainability and scalability.  
    • Refactored legacy code to improve quality, performance, and readability.  
    • Ensured cross-browser compatibility and full responsiveness across all application pages.  
    • Collaborated with UI/UX designers to optimize user interfaces and elevate user experience.  
    • Worked closely with the backend team to ensure seamless API integration and platform functionality.  
    • Actively participated in Agile Scrum ceremonies to support timely and efficient project delivery.
  `
}

];

const ResumeExperience = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Briefcase className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Experience</h3>
      </div>
      
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h4 className="font-medium">{job.title}</h4>
              <span className="text-sm text-gray-500">{job.period}</span>
            </div>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-sm">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperience;
