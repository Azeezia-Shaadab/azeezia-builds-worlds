import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies = [], githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 group bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30 backdrop-blur-sm hover-lift">
      <CardHeader className="pb-4">
        <CardTitle className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 text-xl md:text-2xl">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-600/50 to-purple-600/50 text-gray-200 rounded-full text-sm font-medium border border-blue-400/30 hover:scale-110 transition-transform duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-4">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;