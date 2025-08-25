import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Brain, 
  Monitor,
  Award,
  Calendar,
  ExternalLink,
  User,
  GraduationCap,
  Trophy,
  FileText
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [nameText, setNameText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const phrases = [
    'AI & ML Enthusiast',
    'Tech Explorer', 
    'Creative Thinker'
  ];

  const fullName = "Hi, I'm\nAzeezia Shaadab";

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect for name
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex <= fullName.length) {
        setNameText(fullName.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 150); // Slow typing speed
      } else {
        // Stop cursor blinking after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    };

    // Start typing after a short delay
    const startTyping = setTimeout(typeWriter, 500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startTyping);
    };
  }, [fullName]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(interval);
  }, [showCursor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Profile Image */}
            <div className="animate-fade-in-scale">
              <img 
                src="/lovable-uploads/000b8e80-3203-40db-825d-2a5836434663.png" 
                alt="Azeezia Shaadab - Profile Photo" 
                className="w-32 h-32 mx-auto mb-8 rounded-full object-cover border-4 border-primary/30 shadow-glow animate-glow hover-lift"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 min-h-[1.2em] whitespace-pre-line">
              {nameText}
              <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}>
                |
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-primary-foreground/90 mb-8 min-h-[3rem] flex items-center justify-center">
              <span 
                className={`transition-all duration-300 ${
                  isTyping ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {phrases[currentPhraseIndex]}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover-lift animate-slide-up"
                onClick={() => scrollToSection('#projects')}
                style={{animationDelay: '0.8s'}}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift animate-slide-up"
                onClick={() => scrollToSection('#contact')}
                style={{animationDelay: '1s'}}
              >
                Let's Connect
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-slide-up" style={{animationDelay: '1.2s'}}>
              {[
                { icon: Github, href: 'https://github.com/Azeezia-Shaadab', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/azeezia-shaadab-303887320', label: 'LinkedIn' },
                { icon: Code, href: 'https://leetcode.com/u/azeeziashaadab', label: 'LeetCode' },
                { icon: Award, href: 'https://hackerrank.com/profile/azeeziashaadab', label: 'HackerRank' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  aria-label={social.label}
                  style={{animationDelay: `${1.4 + index * 0.1}s`}}
                >
                  <social.icon className="w-6 h-6 text-foreground hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card section-animate">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
            </div>
            
            <Card className="shadow-glow hover-lift bg-card border-border">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  I am a highly motivated and detail-oriented individual, passionate about technology, 
                  problem-solving, and continuous learning. With a strong foundation in programming 
                  and AI, I aim to create impactful solutions while growing as a professional. 
                  Currently pursuing my Bachelor's in Artificial Intelligence & Machine Learning, 
                  I combine academic knowledge with practical project experience to deliver 
                  innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 section-animate">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <SkillCard
                icon={<Code className="w-8 h-8" />}
                title="Programming"
                skills={['Python', 'Java', 'C']}
              />
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <SkillCard
                icon={<Monitor className="w-8 h-8" />}
                title="Frontend"
                skills={['HTML', 'CSS', 'JavaScript']}
              />
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <SkillCard
                icon={<Database className="w-8 h-8" />}
                title="Backend & Database"
                skills={['MySQL']}
              />
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
              <SkillCard
                icon={<Brain className="w-8 h-8" />}
                title="AI Tools & Software"
                skills={['ChatGPT', 'DeepSeek', 'Gemini', 'Canva', 'Gamma', 'VS Code', 'Eclipse', 'Jupyter']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Hospital Management System"
              description="Streamlined hospital operations and patient record management system with comprehensive data handling and user-friendly interface."
              technologies={['Java', 'MySQL', 'GUI']}
            />
            <ProjectCard
              title="Cloud Audit Trail Tracker"
              description="Python-based system for logging and tracking cloud activity to enhance security monitoring and compliance."
              technologies={['Python', 'Cloud Services', 'Security']}
            />
            <ProjectCard
              title="Student Management System"
              description="Automated student data and record management system for educational institutions with efficient data processing."
              technologies={['Java', 'Database', 'Management']}
            />
            <ProjectCard
              title="Online Tender Management System"
              description="Digital platform for secure and transparent tendering processes with comprehensive bid management features."
              technologies={['Web Development', 'Database', 'Security']}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  degree: "B.E. Artificial Intelligence & Machine Learning",
                  institution: "Ballari Institute of Technology and Management",
                  period: "2023 - 2026",
                  grade: "CGPA: 7.5",
                  icon: GraduationCap
                },
                {
                  degree: "Diploma in Civil Engineering",
                  institution: "Government Polytechnic",
                  period: "2023",
                  grade: "85%",
                  icon: FileText
                },
                {
                  degree: "SSLC",
                  institution: "St. Joseph's English Medium School",
                  period: "2020",
                  grade: "74.4%",
                  icon: Award
                }
              ].map((edu, index) => (
                <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <edu.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </span>
                          <span className="font-medium text-accent">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Experience</h2>
                <div className="w-20 h-1 bg-gradient-primary mx-auto lg:mx-0"></div>
              </div>
              
              <Card className="shadow-soft">
                <CardContent className="p-8 text-center">
                  <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-4">Ready for New Opportunities</h3>
                  <p className="text-muted-foreground">
                    Hands-on experience through academic projects and personal learning. 
                    Actively seeking internships and entry-level positions to apply my 
                    skills in real-world scenarios and contribute to meaningful projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements & Certifications */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Achievements & Certifications</h2>
                <div className="w-20 h-1 bg-gradient-primary mx-auto lg:mx-0"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  { text: "Python Programming Certification", link: null },
                  { text: "Java Full Stack Development Certification", link: "https://drive.google.com/file/d/1_ipr9C3N0c8LkCYo2xVKRkWuv7y7Yco_/view?usp=sharing" }
                ].map((achievement, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        {achievement.link ? (
                          <a 
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer flex items-center gap-1"
                          >
                            {achievement.text}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-foreground">{achievement.text}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborating on projects, 
              or just having a chat about technology and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'azeeziashaadab@gmail.com', href: 'mailto:azeeziashaadab@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '(+91) 9148126107', href: 'tel:+919148126107' },
                    { icon: MapPin, label: 'Location', value: 'India', href: null }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/Azeezia-Shaadab', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/azeezia-shaadab-303887320', label: 'LinkedIn' },
                    { icon: Code, href: 'https://leetcode.com/u/azeeziashaadab', label: 'LeetCode' },
                    { icon: Award, href: 'https://hackerrank.com/profile/azeeziashaadab', label: 'HackerRank' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Azeezia Shaadab</h3>
            <p className="text-primary-foreground/80 mb-6">
              Aspiring AI & Software Developer | Passionate Problem Solver
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Github, href: 'https://github.com/Azeezia-Shaadab', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/azeezia-shaadab-303887320', label: 'LinkedIn' },
                { icon: Code, href: 'https://leetcode.com/u/azeeziashaadab', label: 'LeetCode' },
                { icon: Award, href: 'https://hackerrank.com/profile/azeeziashaadab', label: 'HackerRank' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary mb-8"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1PZ9zLrStdSrtqyyZPY8eVAmMINERRWNn', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Azeezia Shaadab. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;