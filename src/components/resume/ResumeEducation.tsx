
import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor Occupational Safety Engineering",
    school: "Iran University of Medical science",
    period: "2019 - 2023",
   
  },
];

const ResumeEducation = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Education</h3>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h4 className="font-medium">{edu.degree}</h4>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
            <p className="text-sm text-gray-600">{edu.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeEducation;
