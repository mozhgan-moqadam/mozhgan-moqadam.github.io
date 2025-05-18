
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ResumeHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-gray-200">
        <AvatarImage 
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300"
          alt="Profile" 
        />
        <AvatarFallback className="text-2xl">MM</AvatarFallback>
      </Avatar>
      
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Mozhgan Moghaddam</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-2">Frontend Developer</h2>
        <p className="text-sm md:text-base text-gray-600 max-w-lg">
          Frontend Developer with experience in the Angular framework, specializing in developing interactive and responsive web platforms that enhance performance and user experience. Skilled in working within Agile Scrum teams and proficient in TypeScript, Javascript,  HTML, CSS, and Bootstrap.
        </p>
      </div>
    </div>
  );
};

export default ResumeHeader;
