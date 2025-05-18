
import React from 'react';
import { Mail, Phone, AtSign, ExternalLink } from 'lucide-react';

const contacts = [
  { type: "Email", value: "Mozhganmogadam@gmail.com", icon: Mail },
  { type: "LinkedIn", value: "linkedin.com/in/mozhgan-moqadam", icon: AtSign, link: "https://www.linkedin.com/in/mozhgan-moqadam/" },
  { type: "GitHub", value: "github.com/mozhgan-moqadam", icon: ExternalLink, link: "https://github.com/mozhgan-moqadam" }
];

const ResumeContacts = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <AtSign className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Contact</h3>
      </div>
      
      <ul className="space-y-2">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          
          return (
            <li key={index} className="flex items-center gap-2 text-sm">
              <IconComponent className="h-4 w-4 text-gray-600" />
              {contact.link ? (
                <a 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <span>{contact.value}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResumeContacts;
