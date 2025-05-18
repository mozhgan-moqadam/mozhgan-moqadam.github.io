
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Angular", proficiency: 80 },
      { name: "TypeScript", proficiency: 85 },
      { name: "JavaScript", proficiency: 80 },
      { name: "HTML/CSS", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 85 },
    ]
  },
 
  
];

const Skills = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Skills</h1>
      
      <p className="text-muted-foreground mb-8 max-w-3xl">
        I've worked with a variety of technologies and tools throughout my career. Here's an overview of my technical skills and proficiency levels:
      </p>
      
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {index < skillCategories.length - 1 && <Separator className="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
