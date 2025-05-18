
import React from 'react';
import { User } from 'lucide-react';

const ResumeProfile = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <User className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Profile</h3>
      </div>
      <p className="text-sm text-gray-600">
Frontend Developer with experience in the Angular framework, specializing in developing interactive and responsive web platforms that enhance performance and user experience. Skilled in working within Agile Scrum teams and proficient in TypeScript, Javascript,  HTML, CSS, and Bootstrap.      </p>
    </div>
  );
};

export default ResumeProfile;
