
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ResumeHeader from '@/components/resume/ResumeHeader';
import ResumeProfile from '@/components/resume/ResumeProfile';
import ResumeExperience from '@/components/resume/ResumeExperience';
import ResumeEducation from '@/components/resume/ResumeEducation';
import ResumeSkills from '@/components/resume/ResumeSkills';
import ResumeContacts from '@/components/resume/ResumeContacts';
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-8">
        <ResumeHeader />
        
        <Separator className="my-2" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ResumeProfile />
              <Separator className="my-4" />
              <ResumeSkills />
              <Separator className="my-4" />
              <ResumeContacts />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <ResumeExperience />
            <Separator className="my-4" />
            <ResumeEducation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
