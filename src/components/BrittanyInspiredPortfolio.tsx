'use client';

import { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Camera } from 'lucide-react';
import { SiX, SiCodeforces, SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

const BrittanyInspiredPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'writing'];
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

  // Mouse move gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate years and months of experience dynamically
  const calculateYearsOfExperience = (): { years: number; months: number } => {
    const joinDate = new Date('2024-08-01');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - joinDate.getFullYear();
    let months = currentDate.getMonth() - joinDate.getMonth();

    // Adjust if current month is before join month
    if (months < 0) {
      years--;
      months += 12;
    }

    // Adjust if current day is before join day in the same month
    if (currentDate.getDate() < joinDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    return { years, months };
  };

  const { years, months } = calculateYearsOfExperience();
  const experienceText = `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;

  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="h-screen w-full bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#151520]"></div>
      </div>
      <div
        className="relative z-10 min-h-screen font-inter w-full text-[#b4bcd0]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        {/* Modern mouse gradient effect with purple/indigo glow */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-500"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1), transparent 70%)`
          }}
        />
        {/* Modern Mobile Navigation with Glassmorphism */}
        <div className="lg:hidden">
          <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
              <a href="/" className="hover:opacity-80 transition-opacity">RM</a>
            </h1>
            <button
              className="transition-all text-[#b4bcd0] hover:text-[#6366f1] hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="px-6 pb-4 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
              <div className="flex flex-col space-y-4 py-4">
                {[
                  { id: 'about', label: 'About', type: 'section' },
                  { id: 'experience', label: 'Experience', type: 'section' },
                  { id: 'projects', label: 'Projects', type: 'section' },
                  { id: 'writing', label: 'Writing', type: 'section' },
                  { id: 'photos', label: 'Photos', type: 'page', href: '/photos' }
                ].map((item) => {
                  if (item.type === 'page') {
                    return (
                      <Link
                        key={item.id}
                        href={item.href || '#'}
                        className="text-sm font-bold uppercase tracking-widest transition-all text-[#8892b0] hover:text-[#6366f1] flex items-center gap-2 hover:translate-x-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Camera className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-sm font-bold uppercase tracking-widest transition-all ${activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent'
                        : 'text-[#8892b0] hover:text-[#6366f1] hover:translate-x-2'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">

            {/* Left Sidebar - Fixed with Modern Design */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                {/* Name and Title with Gradient */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <a href="/" className="bg-gradient-to-r from-white via-[#b4bcd0] to-white bg-clip-text text-transparent hover:from-[#6366f1] hover:via-[#8b5cf6] hover:to-[#ec4899] transition-all duration-500">
                    Ratnesh Maurya
                  </a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl text-[#b4bcd0]">
                  Backend Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-[#8892b0]">
                  I build scalable backend systems and cloud-native applications with{' '}
                  <span className="font-medium text-white">Go</span> and{' '}
                  <span className="font-medium text-white">Elixir</span>.
                </p>

                {/* Modern Navigation with Gradient Indicators */}
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                  <ul className="mt-16 w-max">
                    {[
                      { id: 'about', label: 'About', type: 'section' },
                      { id: 'experience', label: 'Experience', type: 'section' },
                      { id: 'projects', label: 'Projects', type: 'section' },
                      { id: 'writing', label: 'Writing', type: 'section' },
                      { id: 'photos', label: 'Photos', type: 'page', href: '/photos' }
                    ].map((item) => {
                      if (item.type === 'page') {
                        return (
                          <li key={item.id}>
                            <Link
                              href={item.href || '#'}
                              className="group flex items-center py-3"
                            >
                              <span className="nav-indicator mr-4 h-0.5 w-8 group-hover:w-16 transition-all duration-300 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                              <span className="nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 text-[#8892b0] group-hover:text-[#6366f1] flex items-center gap-2">
                                <Camera className="w-3 h-3" />
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        );
                      }
                      return (
                        <li key={item.id}>
                          <a
                            className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''}`}
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(item.id);
                            }}
                          >
                            <span
                              className={`nav-indicator mr-4 h-0.5 transition-all duration-300 ${activeSection === item.id ? 'w-16 opacity-100' : 'w-8 opacity-30 group-hover:w-16 group-hover:opacity-100'
                                }`}
                              style={{
                                background: activeSection === item.id
                                  ? 'linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)'
                                  : 'linear-gradient(to right, #6366f1, #8b5cf6)',
                                boxShadow: activeSection === item.id
                                  ? '0 0 10px rgba(99, 102, 241, 0.5)'
                                  : 'none'
                              }}
                              onMouseEnter={(e) => {
                                if (activeSection !== item.id) {
                                  e.currentTarget.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.5)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (activeSection !== item.id) {
                                  e.currentTarget.style.boxShadow = 'none';
                                }
                              }}
                            ></span>
                            <span
                              className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeSection === item.id
                                ? 'text-white bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent'
                                : 'text-[#8892b0] group-hover:text-[#6366f1]'
                                }`}
                            >
                              {item.label}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Profile Picture */}


              {/* Modern Social Links with Hover Effects */}
              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                  <a
                    className="block text-[#8892b0] hover:text-[#0a66c2] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.5)]"
                    href="https://www.linkedin.com/in/ratnesh-maurya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <SiLinkedin className="h-6 w-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs">
                  <a
                    className="block text-[#8892b0] hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    href="https://x.com/ratnesh_maurya_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">X (Twitter)</span>
                    <SiX className="h-6 w-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs">
                  <a
                    className="block text-[#8892b0] hover:text-[#ea4335] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(234,67,53,0.5)]"
                    href="mailto:ratneshmaurya2311@gmail.com"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs">
                  <a
                    className="block text-[#8892b0] hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    href="https://github.com/ratnesh-maurya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">GitHub</span>
                    <SiGithub className="h-6 w-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs">
                  <a
                    className="block text-[#8892b0] hover:text-[#1f8acb] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(31,138,203,0.5)]"
                    href="https://codeforces.com/profile/ratnesh_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Codeforces</span>
                    <SiCodeforces className="h-6 w-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs">
                  <a
                    className="block text-[#8892b0] hover:text-[#ffa116] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,161,22,0.5)]"
                    href="https://leetcode.com/u/ratnesh_maurya/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">LeetCode</span>
                    <SiLeetcode className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </header>

            {/* Right Content - Scrollable */}
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24 lg:min-w-0">

              {/* About Section with Modern Glassmorphism - Wider */}
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)] md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only bg-gradient-to-r from-white to-[#b4bcd0] bg-clip-text text-transparent">
                    About
                  </h2>
                </div>
                <div className="backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 lg:p-10 xl:p-12 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                  <p className="mb-4 text-[#8892b0] leading-relaxed">
                    I&apos;m a passionate Software Development Engineer at{' '}
                    <a
                      className="font-medium text-white hover:text-[#6366f1] focus-visible:text-[#6366f1] transition-colors underline decoration-[#6366f1]/50 hover:decoration-[#6366f1]"
                      href="https://www.linkedin.com/company/initializ/about/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Initializ
                    </a>{' '}
                    with <span className="font-medium text-white"> {experienceText} </span>of experience building scalable backend systems and cloud-native applications.
                    I specialize in crafting robust, high-performance solutions that handle <span className="font-medium text-white"> thousands </span> of concurrent users.
                  </p>
                  <p className="mb-4 text-[#8892b0] leading-relaxed">
                    My expertise lies in backend development with{' '}
                    <span className="font-medium text-white">Go</span>,{' '}
                    <span className="font-medium text-white">Elixir</span>,{' '}
                    <span className="font-medium text-white">PostgreSQL</span>,{' '}
                    <span className="font-medium text-white">Redis</span>,{' '}
                    <span className="font-medium text-white">Kubernetes</span> and{' '}
                    <span className="font-medium text-white">AWS</span>, where I focus on building
                    distributed systems, <span className="font-medium text-white"> microservices </span> architectures, and <span className="font-medium text-white"> secure APIs </span>.
                  </p>
                  <p className="mb-4 text-[#8892b0] leading-relaxed">
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                    or <a href="https://blog.ratnesh-maurya.com/blog/" target="_blank" rel="noreferrer" className="font-medium text-white underline hover:text-[#6366f1] focus-visible:text-[#6366f1] transition-colors decoration-[#6366f1]/50 hover:decoration-[#6366f1]"> sharing knowledge </a> with the developer community.
                  </p>
                </div>
              </section>

              {/* Experience Section with Modern Design */}
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)] md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only bg-gradient-to-r from-white to-[#b4bcd0] bg-clip-text text-transparent">
                    Experience
                  </h2>
                </div>
                <div>
                  <ol className="group/list">
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 text-[#6366f1]">
                          2023 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-white">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base transition-colors text-white"
                                href="https://www.linkedin.com/company/initializ/about/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Software Development Engineer ·{' '}
                                  <span className="inline-block">
                                    Initializ
                                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            Architected and developed high-traffic <a href="https://loannetwork.app/" target="_blank" rel="noreferrer" className="font-medium underline hover:text-[#6366f1] focus-visible:text-[#6366f1] transition-colors text-white"> lending platform </a> serving thousands of concurrent users.
                            Developed a <span className="font-medium text-white"> RAG Based </span> AI Assistant for the <a href="https://console.initializ.ai/" target="_blank" rel="noreferrer" className="font-medium text-white hover:text-[#6366f1] focus-visible:text-[#6366f1] transition-colors"> Initializ </a> platform to answer user queries and provide insights.
                            Built secure client-side encryption modules and custom Kubernetes controllers for automated
                            infrastructure management.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Go', 'Elixir', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Kafka'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-sm bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.25)] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="mt-12">
                    <a
                      className="inline-flex items-center font-semibold leading-tight group transition-colors text-white hover:text-[#6366f1]"
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-[#6366f1] motion-reduce:transition-none">
                          View Full
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-[#6366f1] motion-reduce:transition-none">
                            Résumé
                          </span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Projects Section with Modern Design */}
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)] md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only bg-gradient-to-r from-white to-[#b4bcd0] bg-clip-text text-transparent">
                    Projects
                  </h2>
                </div>
                <div>
                  <ul className="group/list">


                    {/* JSONic */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 sm:items-center">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://jsonic.ratnesh-maurya.com" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded-xl border-2 transition-all duration-300 group-hover:border-[rgba(99,102,241,0.5)] overflow-hidden hover:opacity-90 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.05)]" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', width: '120px' }}>
                              <Image
                                alt="JSONic preview"
                                width={120}
                                height={80}
                                className="w-full h-full object-cover"
                                style={{ color: 'transparent' }}
                                src="/jsonic.png"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://jsonic.ratnesh-maurya.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                JSONic
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            A lightweight and powerful utility for working with JSON data. Features include JSON parsing,
                            formatting, validation, and manipulation tools that enhance developer productivity. Perfect for
                            debugging, testing APIs, and managing complex JSON structures with ease.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'JSON Parser', 'Tailwind CSS'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-sm bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.25)] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* mdconverter */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 sm:items-center">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://mdconverter.ratnesh-maurya.com" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded-xl border-2 transition-all duration-300 group-hover:border-[rgba(99,102,241,0.5)] overflow-hidden hover:opacity-90 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.05)]" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', width: '120px' }}>
                              <Image
                                alt="mdconverter preview"
                                width={120}
                                height={80}
                                className="w-full h-full object-cover"
                                style={{ color: 'transparent' }}
                                src="/mdconverter.png"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://mdconverter.ratnesh-maurya.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                mdconverter
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            Instantly transform any text into beautiful Markdown with real-time conversion. A developer-friendly
                            tool that simplifies the process of creating well-structured Markdown documents. Just paste your text
                            and watch the magic happen with live preview and formatting options.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Markdown'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-sm bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.25)] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>



                    {/* npm-compare */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 sm:items-center">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://npm-compare.ratnesh-maurya.com/" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded-xl border-2 transition-all duration-300 group-hover:border-[rgba(99,102,241,0.5)] overflow-hidden hover:opacity-90 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.05)]" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', width: '120px' }}>
                              <Image
                                alt="npm-compare preview"
                                width={120}
                                height={80}
                                className="w-full h-full object-cover"
                                style={{ color: 'transparent' }}
                                src="/npm-compare.png"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://npm-compare.ratnesh-maurya.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                npm-compare
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            A powerful web application designed to help developers compare and analyze npm packages side-by-side.
                            Features include intelligent package recommendations, detailed comparison tables, and insights to help
                            make informed decisions when selecting dependencies for projects.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'npm API'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-sm bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.25)] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Rehabify */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 sm:items-center">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://rehabify.ratnesh-maurya.com/" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded-xl border-2 transition-all duration-300 group-hover:border-[rgba(99,102,241,0.5)] overflow-hidden hover:opacity-90 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] backdrop-blur-sm bg-[rgba(255,255,255,0.05)]" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', width: '120px' }}>
                              <Image
                                alt="Rehabify preview"
                                width={120}
                                height={80}
                                className="w-full h-full object-cover"
                                style={{ color: 'transparent' }}
                                src="/rehabify.png"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://rehabify.ratnesh-maurya.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Rehabify
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            A comprehensive management platform for Nasha Mukti Kendras (de-addiction centers). Streamlines
                            operations with patient record management, treatment tracking, and administrative tools. Built to
                            support rehabilitation centers in providing better care and enhancing operational efficiency.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Golang', 'Docker'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-sm bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.25)] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-12">
                    <a
                      className="inline-flex items-center font-semibold leading-tight group transition-colors text-white hover:text-[#6366f1]"
                      href="https://github.com/ratnesh-maurya"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-[#6366f1] motion-reduce:transition-none">
                          View Full Project
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-[#6366f1] motion-reduce:transition-none">
                            Archive
                          </span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Writing Section with Modern Design */}
              <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)] md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only bg-gradient-to-r from-white to-[#b4bcd0] bg-clip-text text-transparent">
                    Writing
                  </h2>
                </div>
                <div>
                  <ul className="group/list">
                    {/* Blog Post 1 */}
                    <li className="mb-4">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 text-[#6366f1]">
                          2025
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://blog.ratnesh-maurya.com/blog/Optimizing-Memory-Layout-in-Go-A-Deep-Dive-into-Struct-Design/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Optimizing Memory Layout in Go: A Deep Dive into Struct Design
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            Understanding memory layout and the concept of alignment is crucial for writing efficient code.
                            Learn how struct field ordering impacts memory and how to improve design for better performance.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Blog Post 2 */}
                    <li className="mb-4">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 text-[#6366f1]">
                          2025
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://blog.ratnesh-maurya.com/blog/building-this-blog/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Building This Blog: A Modern Next.js Blog with Markdown
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            How I built this blog using Next.js, TypeScript, Tailwind CSS, and markdown for content management.
                            A complete guide to creating a fast, SEO-optimized blog.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Blog Post 3 */}
                    <li className="mb-4">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.05)] lg:group-hover:border lg:group-hover:border-[rgba(99,102,241,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 text-[#6366f1]">
                          2023
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#6366f1] focus-visible:text-[#6366f1] group/link text-base text-white transition-colors"
                              href="https://blog.ratnesh-maurya.com/blog/Understanding-S3-and-S3-Policies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Understanding S3 and S3 Policies
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-[#8892b0]">
                            Exploring the fundamentals of Amazon S3, a powerful and versatile object storage service offered by AWS.
                            Learn about S3 policies and practical examples for real-world scenarios.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-12">
                    <a
                      className="inline-flex items-center font-semibold leading-tight group transition-colors text-white hover:text-[#6366f1]"
                      href="https://blog.ratnesh-maurya.com/blog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-[#6366f1] motion-reduce:transition-none">
                          View All {' '}
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-[#6366f1] motion-reduce:transition-none">
                            Articles
                          </span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Modern Footer */}
              <footer className="pb-16 text-sm sm:pb-0">
                <div className="backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-[#b4bcd0] bg-clip-text text-transparent">
                    🌱 Roots to Code
                  </h3>
                  <p className="text-xs mb-3 opacity-75 text-[#8892b0]">
                    (A tribute to my father and grandfather — the hands that taught me creation.)
                  </p>
                  <blockquote className="text-sm leading-relaxed border-l-2 pl-4 my-4 border-[#6366f1]">
                    <span className='text-yellow-200'>&ldquo;मैं कोड नहीं लिखता, मैं वही करता हूँ जो पिता करते थे — बस ज़मीन बदली है, जज़्बा नहीं।&rdquo;</span> <br />
                    <span className="text-[#8892b0]">I don&apos;t just write code; I do what my father did — only the soil has changed, not the spirit.</span>
                  </blockquote>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrittanyInspiredPortfolio;
