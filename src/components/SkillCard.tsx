import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <Card className="p-6 h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-sm hover-lift">
      <div className="flex items-center mb-6">
        <div className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300 group-hover:text-blue-400">
          {icon}
        </div>
        <h3 className="font-semibold text-lg md:text-xl text-purple-400 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-purple-600/50 to-blue-600/50 text-gray-200 rounded-full text-sm font-medium hover:from-purple-500 hover:to-blue-500 hover:scale-110 transition-all duration-300 cursor-default border border-purple-400/30"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;