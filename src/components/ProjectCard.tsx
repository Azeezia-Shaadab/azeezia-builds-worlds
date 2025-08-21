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
    <Card className="h-full hover:shadow-hover transition-all duration-300 hover:scale-105 group">
      <CardHeader>
        <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
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