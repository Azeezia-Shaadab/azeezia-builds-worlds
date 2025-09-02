import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: ReactNode;
}

interface IconSkillCardProps {
  icon: ReactNode;
  title: string;
  skills: Skill[];
}

const IconSkillCard = ({ icon, title, skills }: IconSkillCardProps) => {
  return (
    <Card className="p-6 h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-sm hover-lift">
      <div className="flex items-center mb-6">
        <div className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300 group-hover:text-blue-400">
          {icon}
        </div>
        <h3 className="font-semibold text-lg md:text-xl text-purple-400 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg hover:from-purple-500/40 hover:to-blue-500/40 hover:scale-105 transition-all duration-300 cursor-default border border-purple-400/20 group/skill"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="text-purple-300 group-hover/skill:text-blue-300 transition-colors duration-300 mb-2">
              {skill.icon}
            </div>
            <span className="text-gray-200 text-sm font-medium text-center group-hover/skill:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default IconSkillCard;