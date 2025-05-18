
import React from 'react';
import { Wrench } from 'lucide-react';

const skills = {
  technical: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Git", "Rest API"],
  soft: [ "Problem Solving", "Communication", "Time Management"]
};

const ResumeSkills = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Wrench className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Skills</h3>
      </div>
      
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-1">Technical</h4>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-1">Soft Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;
