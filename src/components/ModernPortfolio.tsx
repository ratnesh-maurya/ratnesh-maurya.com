'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Twitter, MapPin, Menu, X } from 'lucide-react';

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const skills = {
    languages: ['Go (Golang)', 'Elixir', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    databases: ['PostgreSQL', 'Redis', 'MongoDB', 'InfluxDB'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Linux', 'Nginx']
  };

  const projects = [
    {
      title: 'JSONic',
      description: 'A lightweight and powerful utility designed to simplify working with JSON data.',
      tech: ['Go', 'JavaScript', 'HTML/CSS'],
      liveUrl: 'https://jsonic.ratnesh-maurya.com/',
      githubUrl: 'https://github.com/ratnesh-maurya/jsonic',
      color: 'blue'
    },
    {
      title: 'MDConverter',
      description: 'Instantly transform any text into beautiful markdown. Just paste and watch the magic happen.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://mdconverter.ratnesh-maurya.com/',
      githubUrl: 'https://github.com/ratnesh-maurya/mdconverter',
      color: 'purple'
    },
    {
      title: 'Rehabify',
      description: 'The Path to a Brighter Tomorrow - A comprehensive platform for addiction recovery services.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://rehabify.ratnesh-maurya.com/',
      githubUrl: 'https://github.com/ratnesh-maurya/rehabify',
      color: 'green'
    }
  ];

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Initializ',
      period: 'Jul 2024 - Present · 1 yr 3 mos',
      location: 'Gurugram, Haryana, India · Full-time · On-site',
      achievements: [
        'Architected and built a scalable backend for a high-traffic lending platform using Elixir, AWS, PostgreSQL, and Redis',
        'Led the integration of key KYC services (Aadhaar, PAN, GST), automating and securing the user onboarding process',
        'Optimized the end-to-end lending lifecycle, significantly improving platform stability and performance'
      ],
      tech: ['Elixir', 'AWS', 'PostgreSQL', 'Redis', 'Go', 'React Native', 'Kubernetes']
    },
    {
      title: 'Software Developer Internship',
      company: 'Initializ',
      period: 'Aug 2023 - Jul 2024 · 1 yr',
      location: 'Kanpur, Uttar Pradesh, India · Internship',
      achievements: [
        'Developed secure client-side encryption modules in TypeScript and backend services in Golang for a secret management platform',
        'Built a Kubernetes Controller (using CRDs) to automate secret injection and management in containerized environments',
        'Established and managed CI/CD pipelines with GitHub Actions, automating the complete testing and deployment lifecycle'
      ],
      tech: ['Go', 'TypeScript', 'Kubernetes', 'AWS', 'GitHub Actions', 'Docker']
    },
    {
      title: 'Software Developer Intern',
      company: 'EMSEC',
      period: 'Mar 2023 - Aug 2023 · 6 mos',
      location: 'Remote · Internship',
      achievements: [
        'Engineered a secure and scalable backend system to manage SSL certificate data from over 100 websites',
        'Architected and implemented a resilient database schema specifically designed for efficient SSL certificate information management',
        'Utilized modern development methodologies like Agile and Scrum, ensuring timely delivery of features'
      ],
      tech: ['JSON', 'CSS', 'Database Design', 'Agile', 'Scrum']
    }
  ];

  return (
    <div className="min-h-screen bg-[#222831] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#222831]/95 backdrop-blur-sm border-b border-gray-700/30' : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-green-400">rk@ratnesh-maurya.com</div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-green-400 ${activeSection === section ? 'text-green-400' : 'text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-green-400 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-700/30">
              <div className="flex flex-col space-y-4">
                {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left transition-colors duration-200 hover:text-green-400 ${activeSection === section ? 'text-green-400' : 'text-gray-300'
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 mb-8">
              <pre className="text-green-400 text-xs md:text-sm font-mono">
                {`██████╗  █████╗ ████████╗███╗   ██╗███████╗███████╗██╗  ██╗
██╔══██╗██╔══██╗╚══██╔══╝████╗  ██║██╔════╝██╔════╝██║  ██║
██████╔╝███████║   ██║   ██╔██╗ ██║█████╗  ███████╗███████║
██╔══██╗██╔══██║   ██║   ██║╚██╗██║██╔══╝  ╚════██║██╔══██║
██║  ██║██║  ██║   ██║   ██║ ╚████║███████╗███████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝`}
              </pre>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Ratnesh</span>{' '}
              <span className="text-green-400">Maurya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Development Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Hey, I&apos;m Ratnesh Maurya 🇮🇳, a passionate Software Development Engineer at{' '}
              <a href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noopener"
                className="text-blue-400 hover:text-blue-300 underline">
                Initializ
              </a>{' '}
              with 1.5 years of experience in backend development and cloud-native technologies.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-3 bg-green-400 text-gray-900 rounded-lg font-semibold hover:bg-green-300 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
            >
              View My Work
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">$</span> ls -la skills/
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">📋 Programming Languages</h3>
              <div className="space-y-2">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="text-gray-300 hover:text-white transition-colors duration-200">🔹 {skill}</div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">🗄️ Databases & Storage</h3>
              <div className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <div key={index} className="text-gray-300 hover:text-white transition-colors duration-200">🔸 {skill}</div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">🔧 DevOps & Tools</h3>
              <div className="space-y-2">
                {skills.devops.map((skill, index) => (
                  <div key={index} className="text-gray-300 hover:text-white transition-colors duration-200">🔧 {skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">$</span> ls -la projects/
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const colorClasses = {
                blue: { bg: 'bg-blue-400/20', text: 'text-blue-400' },
                purple: { bg: 'bg-purple-400/20', text: 'text-purple-400' },
                green: { bg: 'bg-green-400/20', text: 'text-green-400' }
              };
              const colors = colorClasses[project.color as keyof typeof colorClasses];

              return (
                <div key={index} className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-xl">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} mb-3`}>{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center text-green-400 hover:text-green-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">$</span> cat experience/work_history.md
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-green-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-300 font-medium">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-yellow-400 font-bold mb-2">🎯 Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 text-sm">• {achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-bold mb-2">💻 Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
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
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-green-400">$</span> cat contact/info.txt
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/40 rounded-lg p-8 border border-gray-700/30 text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-8">📞 Get In Touch</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="https://www.linkedin.com/in/ratnesh-maurya"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/ratnesh-maurya"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">GitHub</span>
                </a>

                <a
                  href="https://x.com/ratnesh_maurya_"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                >
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Twitter</span>
                </a>

                <a
                  href="https://ratnesh-maurya.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Website</span>
                </a>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-6">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">India 🇮🇳</span>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="text-green-400 font-bold mb-2">💼 Available for:</h4>
                <p className="text-gray-300 text-sm">Full-time opportunities, freelance projects, and interesting collaborations</p>
                <p className="text-gray-400 text-xs mt-2">🕒 Response time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-gray-800/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-green-400">$</span> cat blogs/posts.md
          </h2>
          <div className="bg-gray-800/40 rounded-lg p-8 border border-gray-700/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">📝 My Blog</h3>
            <p className="text-gray-300 mb-6">
              I write about software development, backend engineering, and my experiences with modern technologies like Go, Elixir, and cloud architecture.
            </p>
            <a
              href="https://blog.ratnesh-maurya.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-6 py-3 bg-blue-400 text-gray-900 rounded-lg font-semibold hover:bg-blue-300 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit My Blog
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-400 text-sm mb-2">
            rk@ratnesh-maurya.com:~$ echo &quot;Built with ❤️ using Next.js & Tailwind CSS&quot;
          </p>
          <p className="text-gray-400 text-xs">© 2025 Ratnesh Maurya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
