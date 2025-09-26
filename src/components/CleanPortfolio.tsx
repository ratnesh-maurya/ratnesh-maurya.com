'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const CleanPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data
  const skills = {
    languages: ['Go', 'Elixir', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    databases: ['PostgreSQL', 'Redis', 'MongoDB', 'InfluxDB'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux']
  };

  // Projects data
  const projects = [
    {
      title: 'High-Traffic Lending Platform',
      description: 'Architected and developed a scalable lending platform handling thousands of concurrent users with Go and PostgreSQL.',
      tech: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Client-Side Encryption Module',
      description: 'Built secure encryption modules for sensitive data protection with advanced cryptographic algorithms.',
      tech: ['Go', 'Cryptography', 'Security', 'API Design'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Kubernetes Controller',
      description: 'Developed custom Kubernetes controllers for automated infrastructure management and scaling.',
      tech: ['Go', 'Kubernetes', 'Docker', 'Cloud Native'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  // Experience data
  const experience = [
    {
      company: 'Initializ',
      title: 'Software Development Engineer',
      period: '2023 - Present',
      location: 'India',
      achievements: [
        'Architected high-traffic lending platform serving thousands of concurrent users',
        'Developed secure client-side encryption modules for sensitive data protection',
        'Built custom Kubernetes controllers for automated infrastructure management',
        'Optimized database queries resulting in 40% performance improvement'
      ],
      tech: ['Go', 'Elixir', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-900">
              Ratnesh Maurya
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ratnesh Maurya
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Software Development Engineer specializing in scalable backend systems with Go and Elixir
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span>India 🇮🇳</span>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ratnesh-maurya"
                target="_blank"
                rel="noopener"
                className="p-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ratnesh-maurya"
                target="_blank"
                rel="noopener"
                className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ratnesh_maurya_"
                target="_blank"
                rel="noopener"
                className="p-3 text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:ratnesh.maurya@example.com"
                className="p-3 text-gray-600 hover:text-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              A passionate Software Development Engineer at{' '}
              <a href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noopener"
                className="text-blue-600 hover:text-blue-700 font-medium">
                Initializ
              </a>{' '}
              with 1.5 years of experience in backend development and cloud-native technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in building scalable systems with Go, Elixir, and modern cloud infrastructure.
              My expertise spans from architecting high-traffic lending platforms to developing secure
              client-side encryption modules and Kubernetes controllers.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, efficient solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.devops.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my technical skills and problem-solving approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey in software development and engineering
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-2">{exp.title}</p>
                    <p className="text-gray-500 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-blue-500 mr-3 mt-1.5 text-sm">•</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Currently Available</span>
            </div>
            <p className="text-gray-600 mb-2">Open to full-time opportunities, freelance projects, and collaborations</p>
            <p className="text-gray-500 text-sm">⚡ Typically responds within 24 hours</p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ratnesh-maurya"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:ratnesh.maurya@example.com"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Ratnesh Maurya. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CleanPortfolio;
