import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <Card className="p-6 hover:shadow-hover transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center mb-4">
        <div className="text-accent mr-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;