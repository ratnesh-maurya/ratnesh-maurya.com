'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Twitter, MapPin, Menu, X, Mail, Phone, ArrowRight, Sparkles, Code, Database, Cloud } from 'lucide-react';

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
      setIsMobileMenuOpen(false);
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
    <div className="min-h-screen">
      {/* Floating Navigation Dots - 2025 Style */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div className="glass-card p-4 space-y-6">
          {[
            { id: 'about', label: 'Introduction', icon: '●' },
            { id: 'skills', label: 'Skills', icon: '◆' },
            { id: 'projects', label: 'Projects', icon: '▲' },
            { id: 'experience', label: 'Experience', icon: '■' },
            { id: 'contact', label: 'Contact', icon: '★' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center w-3 h-3 transition-all duration-300 ${activeSection === item.id
                ? 'text-cyan-400 scale-150'
                : 'text-gray-500 hover:text-cyan-300 hover:scale-125'
                }`}
              title={item.label}
            >
              <span className="text-xs">{item.icon}</span>
              <div className="absolute left-8 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modern Glassmorphism Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}>
        <div className="glass-card px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold font-poppins bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              RM
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 ml-12">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative capitalize text-sm font-medium transition-all duration-300 ${activeSection === section
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200 ml-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left text-sm font-medium transition-colors duration-200 ${activeSection === section
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
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

      {/* 2025 Hero Section - Bold & Dynamic */}
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Main Heading - Neo-Brutalist Style */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
                RATNESH
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                <h2 className="text-2xl md:text-4xl font-light text-gray-300 tracking-widest">
                  MAURYA
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
              </div>
            </div>

            {/* Role & Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6 tracking-wide">
                SOFTWARE DEVELOPMENT ENGINEER
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                Architecting scalable backend systems with{' '}
                <span className="text-cyan-400 font-semibold">Go</span> &{' '}
                <span className="text-teal-400 font-semibold">Elixir</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                1.5 years of experience building high-traffic platforms, secure encryption modules,
                and cloud-native solutions at{' '}
                <a href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noopener"
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline decoration-2 underline-offset-4 transition-colors">
                  Initializ
                </a>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="mailto:ratnesh.maurya@example.com"
                className="btn-secondary group"
              >
                <Mail className="w-5 h-5" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="glass-card p-4 group hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
              </div>
              <div className="glass-card p-4 group hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-teal-400 group-hover:text-teal-300" />
              </div>
              <div className="glass-card p-4 group hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
              </div>
            </div>

            {/* Social Links - Floating Style */}
            <div className="flex justify-center gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ratnesh-maurya", color: "hover:text-blue-400" },
                { icon: Github, href: "https://github.com/ratnesh-maurya", color: "hover:text-gray-300" },
                { icon: Twitter, href: "https://x.com/ratnesh_maurya_", color: "hover:text-sky-400" },
                { icon: Mail, href: "mailto:ratnesh.maurya@example.com", color: "hover:text-green-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  className={`glass-card p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* 2025 Skills Section - Asymmetrical Grid */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              TECHNICAL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                ARSENAL
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks I use to build exceptional software
            </p>
          </div>

          {/* Modern Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Programming Languages */}
            <div className="glass-card lg:col-span-2 group hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="neo-card p-3">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Programming Languages</h3>
                  <p className="text-sm text-gray-400">Backend development & system architecture</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass-card lg:row-span-2 group hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="neo-card p-3">
                  <Database className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Databases</h3>
                  <p className="text-sm text-gray-400">Storage & data management</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full text-sm font-medium text-teal-300 hover:from-teal-500/30 hover:to-green-500/30 hover:border-teal-400/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="glass-card lg:col-span-2 group hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="neo-card p-3">
                  <Cloud className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">DevOps & Cloud</h3>
                  <p className="text-sm text-gray-400">Infrastructure & deployment</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.devops.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Highlight */}
          <div className="text-center">
            <div className="glass-card inline-block px-8 py-6">
              <p className="text-gray-300 mb-4 text-sm uppercase tracking-wider">Primary Stack</p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <span className="text-2xl font-bold text-cyan-400">Go</span>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-2xl font-bold text-teal-400">Elixir</span>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-2xl font-bold text-blue-400">PostgreSQL</span>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-2xl font-bold text-orange-400">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Projects Section - Interactive Cards */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              FEATURED
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                PROJECTS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions that demonstrate my technical expertise and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const gradients = {
                blue: 'from-blue-500/20 to-cyan-500/20',
                purple: 'from-purple-500/20 to-pink-500/20',
                green: 'from-green-500/20 to-teal-500/20'
              };
              const borderColors = {
                blue: 'border-blue-500/30 hover:border-cyan-400/50',
                purple: 'border-purple-500/30 hover:border-pink-400/50',
                green: 'border-green-500/30 hover:border-teal-400/50'
              };
              const textColors = {
                blue: 'text-cyan-400',
                purple: 'text-purple-400',
                green: 'text-teal-400'
              };

              const gradient = gradients[project.color as keyof typeof gradients];
              const borderColor = borderColors[project.color as keyof typeof borderColors];
              const textColor = textColors[project.color as keyof typeof textColors];

              return (
                <div
                  key={index}
                  className={`glass-card group hover:scale-105 transition-all duration-500 relative overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''
                    }`}
                >
                  {/* Project Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} border ${borderColor.split(' ')[0]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">📦</span>
                  </div>

                  {/* Project Content */}
                  <h3 className={`text-2xl font-bold ${textColor} mb-4 group-hover:text-white transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${gradient} border ${borderColor.split(' ')[0]} rounded-full text-sm font-medium ${textColor} hover:bg-opacity-30 transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-6 border-t border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener"
                      className={`flex items-center gap-2 ${textColor} hover:text-white text-sm font-medium transition-colors group/link`}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      Source
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2025 Experience Section - Modern Timeline */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              PROFESSIONAL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                JOURNEY
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building scalable solutions and leading technical innovation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent hidden md:block"></div>

            <div className="space-y-16">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full border-4 border-gray-900 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Experience Card */}
                  <div className="md:ml-20 glass-card group-hover:scale-105 transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-xl text-cyan-400 font-semibold mb-2">{exp.title}</p>
                        <p className="text-gray-400 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <div className="glass-card px-4 py-2 inline-block">
                          <span className="text-sm font-medium text-cyan-300">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 leading-relaxed flex items-start group/item">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 mt-2 group-hover/item:bg-teal-400 transition-colors"></div>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-cyan-400/50 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Contact Section - Interactive & Modern */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              LET'S
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                CONNECT
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to build something amazing together? Let's start the conversation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Contact Card */}
            <div className="glass-card text-center mb-12">
              {/* Contact Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-cyan-400" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 text-lg mb-8">Let's discuss your next project or opportunity</p>

              {/* Contact Methods Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ratnesh-maurya", label: "LinkedIn", color: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400/50 text-blue-400" },
                  { icon: Github, href: "https://github.com/ratnesh-maurya", label: "GitHub", color: "from-gray-500/20 to-gray-600/20 border-gray-500/30 hover:border-gray-400/50 text-gray-300" },
                  { icon: Twitter, href: "https://x.com/ratnesh_maurya_", label: "Twitter", color: "from-sky-500/20 to-sky-600/20 border-sky-500/30 hover:border-sky-400/50 text-sky-400" },
                  { icon: Mail, href: "mailto:ratnesh.maurya@example.com", label: "Email", color: "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-400/50 text-green-400" }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener"
                    className={`glass-card p-6 group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${contact.color}`}
                  >
                    <contact.icon className="w-6 h-6 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm">{contact.label}</span>
                  </a>
                ))}
              </div>

              {/* Location & Availability */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Based in India 🇮🇳</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for opportunities</span>
                </div>
              </div>

              {/* CTA */}
              <div className="glass-card bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/20 p-8">
                <h4 className="text-white font-bold text-xl mb-3">
                  Open to New Opportunities
                </h4>
                <p className="text-gray-300 mb-4">
                  Full-time roles • Freelance projects • Technical consultations • Open source collaborations
                </p>
                <p className="text-cyan-400 text-sm font-medium">
                  ⚡ Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section section-alt">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4">My Blog</h2>
            <p className="text-gray-600 mb-8">
              I write about software development, backend engineering, and my experiences with modern technologies like Go, Elixir, and cloud architecture.
            </p>

            <div className="card max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📝</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Insights & Stories</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sharing knowledge, experiences, and insights from my journey in software development.
                From backend architecture to cloud-native solutions.
              </p>

              <a
                href="https://blog.ratnesh-maurya.com/"
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                <ExternalLink className="w-4 h-4" />
                Visit My Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ratnesh Maurya</h3>
              <p className="text-gray-600">Software Development Engineer</p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/ratnesh-maurya" target="_blank" rel="noopener"
                className="text-gray-500 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noopener"
                className="text-gray-500 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/ratnesh_maurya_" target="_blank" rel="noopener"
                className="text-gray-500 hover:text-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:ratnesh.maurya@example.com"
                className="text-gray-500 hover:text-green-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                © 2025 Ratnesh Maurya. Built with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
