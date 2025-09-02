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
    
    // Check for certification redirect parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('redirect') === 'certification' || window.location.hash === '#certifications') {
      setTimeout(() => {
        const element = document.querySelector('#certifications');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 1000); // Delay to ensure page is loaded
    }
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
                className="bg-gradient-amethyst-blue hover:bg-primary-hover text-primary-foreground shadow-amethyst-glow hover-lift animate-slide-up hover:shadow-blue-glow transition-all duration-300"
                onClick={() => scrollToSection('#projects')}
                style={{animationDelay: '0.8s'}}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-hero-accent bg-hero-accent/10 text-hero-accent hover:bg-gradient-amethyst-blue hover:text-primary-foreground hover:border-primary hover-lift animate-slide-up transition-all duration-300"
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
                  className={`p-3 rounded-full bg-gradient-amethyst-blue/20 border-2 transition-all duration-300 hover:scale-110 animate-slide-up ${
                    index % 2 === 0 
                      ? 'border-primary hover:bg-primary hover:shadow-amethyst-glow' 
                      : 'border-hero-accent hover:bg-hero-accent hover:shadow-blue-glow'
                  }`}
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
      <section id="about" className="py-20 relative overflow-hidden section-animate">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
            </div>
            
            <Card className="shadow-2xl hover-lift bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm animate-fade-in-scale">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
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
      <section id="skills" className="py-20 relative overflow-hidden section-animate">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-20 left-1/4 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-glow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.2s'}}>
              <SkillCard
                icon={<Code className="w-8 h-8" />}
                title="Programming"
                skills={['Python', 'Java', 'C']}
              />
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.4s'}}>
              <SkillCard
                icon={<Monitor className="w-8 h-8" />}
                title="Frontend"
                skills={['HTML', 'CSS', 'JavaScript']}
              />
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.6s'}}>
              <SkillCard
                icon={<Database className="w-8 h-8" />}
                title="Backend & Database"
                skills={['MySQL']}
              />
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.8s'}}>
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
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-20 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-20 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.2s'}}>
              <ProjectCard
                title="Hospital Management System"
                description="Streamlined hospital operations and patient record management system with comprehensive data handling and user-friendly interface."
                technologies={['Java', 'MySQL', 'GUI']}
              />
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.4s'}}>
              <ProjectCard
                title="Cloud Audit Trail Tracker"
                description="Python-based system for logging and tracking cloud activity to enhance security monitoring and compliance."
                technologies={['Python', 'Cloud Services', 'Security']}
              />
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.6s'}}>
              <ProjectCard
                title="Student Management System"
                description="Automated student data and record management system for educational institutions with efficient data processing."
                technologies={['Java', 'Database', 'Management']}
              />
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.8s'}}>
              <ProjectCard
                title="Online Tender Management System"
                description="Digital platform for secure and transparent tendering processes with comprehensive bid management features."
                technologies={['Web Development', 'Database', 'Security']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative overflow-hidden section-animate">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-16 right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-glow"></div>
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
                <div key={index} className="animate-slide-up hover-scale" style={{animationDelay: `${0.3 + index * 0.2}s`}}>
                  <Card className="shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                          <edu.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-2">{edu.degree}</h3>
                          <p className="text-gray-300 mb-3 text-lg">{edu.institution}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                              {edu.period}
                            </span>
                            <span className="font-semibold text-blue-400 text-lg">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Achievements Section */}
      <section id="certifications" className="py-20 relative overflow-hidden section-animate">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/30 to-blue-900/30"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4.5s'}}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">Experience</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto lg:mx-0 rounded-full animate-glow"></div>
              </div>
              
              <Card className="shadow-2xl hover-lift bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <Trophy className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-bounce" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Ready for New Opportunities</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Hands-on experience through academic projects and personal learning. 
                    Actively seeking internships and entry-level positions to apply my 
                    skills in real-world scenarios and contribute to meaningful projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements & Certifications */}
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Achievements & Certifications</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full animate-glow"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  { text: "Python Programming Certification", link: "https://drive.google.com/file/d/1b1n3nDaD0Tfoj-3RrWWf5FTyhbcOd89l/view?usp=sharing" },
                  { text: "Java Full Stack Development Certification", link: "https://drive.google.com/file/d/1_ipr9C3N0c8LkCYo2xVKRkWuv7y7Yco_/view?usp=sharing" }
                ].map((achievement, index) => (
                  <div key={index} className="animate-slide-up hover-scale" style={{animationDelay: `${0.6 + index * 0.2}s`}}>
                    <Card className="shadow-xl hover:shadow-blue-500/20 transition-all duration-500 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-blue-500/30 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 animate-pulse"></div>
                          {achievement.link ? (
                            <a 
                              href={achievement.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center gap-2 text-lg font-medium group"
                            >
                              {achievement.text}
                              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                          ) : (
                            <span className="text-gray-200 text-lg font-medium">{achievement.text}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden section-animate">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-12 right-12 w-36 h-36 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-12 left-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborating on projects, 
              or just having a chat about technology and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'azeeziashaadab@gmail.com', href: 'mailto:azeeziashaadab@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '(+91) 9148126107', href: 'tel:+919148126107' },
                    { icon: MapPin, label: 'Location', value: 'India', href: null }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 hover-scale">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Connect with me</h4>
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
                      className="p-3 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-200 hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-28 h-28 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Azeezia Shaadab</h3>
            <p className="text-gray-300 mb-6 text-lg">
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
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-200 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-gray-200 hover:bg-white/10 hover:text-white mb-8 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1PZ9zLrStdSrtqyyZPY8eVAmMINERRWNn', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-gray-400 text-sm">
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