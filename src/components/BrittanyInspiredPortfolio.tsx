'use client';

import { useState, useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SiX, SiCodeforces, SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import Image from 'next/image';

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

  return (
    <>
      <div className="fixed inset-0 z-0 ">
        <BackgroundBeamsWithCollision className="h-screen w-full overflow-visible min-h-screen ">
          <div style={{ background: '#0a192f', height: '100vh', width: '100%' }}></div>
        </BackgroundBeamsWithCollision>
      </div>
      <div
        className="relative z-10 min-h-screen text-slate-400 font-inter w-full"
        style={{ color: '#8892b0' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        {/* Mouse gradient effect */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <nav className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold" style={{ color: '#ccd6f6' }}>
              <a href="/">RM</a>
            </h1>
            <button
              className="transition-colors hover:text-[#64ffda]"
              style={{ color: '#8892b0' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="px-6 pb-4">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'writing', label: 'Writing' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeSection === item.id
                      ? 'text-[#ccd6f6]'
                      : 'text-[#8892b0] hover:text-[#64ffda]'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">

            {/* Left Sidebar - Fixed */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                {/* Name and Title */}

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: '#ccd6f6' }}>
                  <a href="/">Ratnesh Maurya</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl" style={{ color: '#ccd6f6' }}>
                  Backend Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal" style={{ color: '#8892b0' }}>
                  I build scalable backend systems and cloud-native applications with  <span className="font-medium" style={{ color: '#ccd6f6' }}>Go </span>and  <span className="font-medium" style={{ color: '#ccd6f6' }}>Elixir</span>.
                </p>

                {/* Navigation */}
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                  <ul className="mt-16 w-max">
                    {[
                      { id: 'about', label: 'About' },
                      { id: 'experience', label: 'Experience' },
                      { id: 'projects', label: 'Projects' },
                      { id: 'writing', label: 'Writing' }
                    ].map((item) => (
                      <li key={item.id}>
                        <a
                          className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''
                            }`}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                        >
                          <span className={`nav-indicator mr-4 h-px transition-all duration-300 ${activeSection === item.id
                            ? 'w-16'
                            : 'w-8 group-hover:w-16'
                            }`} style={{
                              backgroundColor: activeSection === item.id ? '#ccd6f6' : '#8892b0',
                              boxShadow: activeSection === item.id ? '0 0 8px rgba(204, 214, 246, 0.3)' : 'none'
                            }}
                            onMouseEnter={(e) => {
                              if (activeSection !== item.id) {
                                e.currentTarget.style.backgroundColor = '#64ffda';
                                e.currentTarget.style.boxShadow = '0 0 8px rgba(100, 255, 218, 0.3)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (activeSection !== item.id) {
                                e.currentTarget.style.backgroundColor = '#8892b0';
                                e.currentTarget.style.boxShadow = 'none';
                              }
                            }}></span>
                          <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${activeSection === item.id
                            ? ''
                            : 'group-hover:text-[#64ffda]'
                            }`} style={{ color: activeSection === item.id ? '#ccd6f6' : '#8892b0' }}>
                            {item.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Profile Picture */}


              {/* Social Links */}
              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                  <a
                    className="block text-sky-300  hover:text-green-400"
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
                    className="block  text-sky-300  hover:text-orange-400"
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
                    className="block  text-sky-300  hover:text-pink-400"
                    href="mailto:ratneshmaurya2311@gmail.com"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs">
                  <a
                    className="block text-sky-300  hover:text-pink-400  "
                    // style={{ color: '#8892b0' }}
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
                    className="block  text-sky-300  hover:text-yellow-400"
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
                    className="block  text-sky-300  hover:text-rose-800"
                    href="https://leetcode.com/u/ratnesh_maurya/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Codeforces</span>
                    <SiLeetcode className="h-6 w-6" />
                  </a>
                </li>

              </ul>
            </header>

            {/* Right Content - Scrollable */}
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

              {/* About Section */}
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }}>
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{ color: '#ccd6f6' }}>
                    About
                  </h2>
                </div>
                <div>
                  <p className="mb-4" style={{ color: '#8892b0' }}>
                    I&apos;m a passionate Software Development Engineer at{' '}
                    <a
                      className="font-medium hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors underline"
                      style={{ color: '#ccd6f6' }}
                      href="https://www.linkedin.com/company/initializ/about/"
                      target="_blank"
                      rel="noreferrer"

                    >
                      Initializ
                    </a>{' '}
                    with <span className="font-medium" style={{ color: '#ccd6f6' }}>  1.5 </span>years of experience building scalable backend systems and cloud-native applications.
                    I specialize in crafting robust, high-performance solutions that handle <span className="font-medium" style={{ color: '#ccd6f6' }}> thousands </span>  of concurrent users.
                  </p>
                  <p className="mb-4" style={{ color: '#8892b0' }}>
                    My expertise lies in backend development with{' '}
                    <span className="font-medium" style={{ color: '#ccd6f6' }}>Go</span> , {' '}
                    <span className="font-medium" style={{ color: '#ccd6f6' }}>Elixir</span> ,{' '}
                    <span className="font-medium" style={{ color: '#ccd6f6' }}>PostgreSQL</span> {' '}
                    <span className="font-medium" style={{ color: '#ccd6f6' }}>Redis</span> ,{' '}
                    <span className="font-medium" style={{ color: '#ccd6f6' }}>Kubernetes</span> and{' '}
                    <span className="font-medium" style={{ color: '#ccd6f6' }}>AWS</span>, where I focus on building
                    distributed systems, <span className="font-medium" style={{ color: '#ccd6f6' }}> microservices </span> architectures, and  <span className="font-medium" style={{ color: '#ccd6f6' }}> secure APIs </span>.
                  </p>
                  <p className="mb-4" style={{ color: '#8892b0' }}>
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                    or <a href="https://blog.ratnesh-maurya.com/blog/" target="_blank" rel="noreferrer" className="font-medium underline hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors" style={{ color: '#ccd6f6' }}> sharing knowledge </a> with the developer community.
                  </p>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }}>
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{ color: '#ccd6f6' }}>
                    Experience
                  </h2>
                </div>
                <div>
                  <ol className="group/list">
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" style={{ backgroundColor: 'rgba(17, 34, 64, 0.5)' }}></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2" style={{ color: '#64ffda' }}>
                          2023 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug" style={{ color: '#ccd6f6' }}>
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base transition-colors"
                                style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            Architected and developed high-traffic <a href="https://loannetwork.app/" target="_blank" rel="noreferrer" className="font-medium underline hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors" style={{ color: '#ccd6f6' }}>  lending platform </a> serving thousands of concurrent users.
                            Developed a <span className="font-medium" style={{ color: '#ccd6f6' }}> RAG Based </span> AI Assistant for the <a href="https://console.initializ.ai/" target="_blank" rel="noreferrer" className="font-medium  hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors" style={{ color: '#ccd6f6' }}> Initializ </a> platform to answer user queries and provide insights.
                            Built secure client-side encryption modules and custom Kubernetes controllers for automated
                            infrastructure management.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Go', 'Elixir', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Kafka'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5" style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda' }}>
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
                      className="inline-flex items-center font-semibold leading-tight group transition-colors"
                      style={{ color: '#ccd6f6' }}
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                          View Full
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                            Résumé
                          </span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }}>
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{ color: '#ccd6f6' }}>
                    Projects
                  </h2>
                </div>
                <div>
                  <ul className="group/list">


                    {/* JSONic */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 sm:items-center">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://jsonic.ratnesh-maurya.com" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded border-2 transition group-hover:border-slate-200/30 overflow-hidden hover:opacity-90" style={{ borderColor: 'rgba(148, 163, 184, 0.1)', width: '120px', }}>
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
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            A lightweight and powerful utility for working with JSON data. Features include JSON parsing,
                            formatting, validation, and manipulation tools that enhance developer productivity. Perfect for
                            debugging, testing APIs, and managing complex JSON structures with ease.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'JSON Parser', 'Tailwind CSS'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5" style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda' }}>
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
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://mdconverter.ratnesh-maurya.com" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded border-2 transition group-hover:border-slate-200/30 overflow-hidden hover:opacity-90" style={{ borderColor: 'rgba(148, 163, 184, 0.1)', width: '120px', }}>
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
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            Instantly transform any text into beautiful Markdown with real-time conversion. A developer-friendly
                            tool that simplifies the process of creating well-structured Markdown documents. Just paste your text
                            and watch the magic happen with live preview and formatting options.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Markdown'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5" style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda' }}>
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
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://npm-compare.ratnesh-maurya.com/" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded border-2 transition group-hover:border-slate-200/30 overflow-hidden hover:opacity-90" style={{ borderColor: 'rgba(148, 163, 184, 0.1)', width: '120px', }}>
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
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            A powerful web application designed to help developers compare and analyze npm packages side-by-side.
                            Features include intelligent package recommendations, detailed comparison tables, and insights to help
                            make informed decisions when selecting dependencies for projects.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'npm API'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5" style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda' }}>
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
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 mb-4 sm:col-span-2 sm:mb-0">
                          <a href="https://rehabify.ratnesh-maurya.com/" target="_blank" rel="noreferrer" className="block">
                            <div className="rounded border-2 transition group-hover:border-slate-200/30 overflow-hidden hover:opacity-90" style={{ borderColor: 'rgba(148, 163, 184, 0.1)', width: '120px', }}>
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
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            A comprehensive management platform for Nasha Mukti Kendras (de-addiction centers). Streamlines
                            operations with patient record management, treatment tracking, and administrative tools. Built to
                            support rehabilitation centers in providing better care and enhancing operational efficiency.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Golang', 'Docker'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5" style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda' }}>
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
                      className="inline-flex items-center font-semibold leading-tight group transition-colors"
                      style={{ color: '#ccd6f6' }}
                      href="https://github.com/ratnesh-maurya"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                          View Full Project
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                            Archive
                          </span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Writing Section */}
              <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }}>
                  <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{ color: '#ccd6f6' }}>
                    Writing
                  </h2>
                </div>
                <div>
                  <ul className="group/list">
                    {/* Blog Post 1 */}
                    <li className="mb-4">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2" style={{ color: '#8892b0' }}>
                          2025
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            Understanding memory layout and the concept of alignment is crucial for writing efficient code.
                            Learn how struct field ordering impacts memory and how to improve design for better performance.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Blog Post 2 */}
                    <li className="mb-4">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2" style={{ color: '#8892b0' }}>
                          2025
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            How I built this blog using Next.js, TypeScript, Tailwind CSS, and markdown for content management.
                            A complete guide to creating a fast, SEO-optimized blog.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Blog Post 3 */}
                    <li className="mb-4">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2" style={{ color: '#8892b0' }}>
                          2023
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                              style={{ color: '#ccd6f6' }}
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
                          <p className="mt-2 text-sm leading-normal" style={{ color: '#8892b0' }}>
                            Exploring the fundamentals of Amazon S3, a powerful and versatile object storage service offered by AWS.
                            Learn about S3 policies and practical examples for real-world scenarios.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-12">
                    <a
                      className="inline-flex items-center font-semibold leading-tight group transition-colors"
                      style={{ color: '#ccd6f6' }}
                      href="https://blog.ratnesh-maurya.com/blog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                          View All {' '}
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                            Articles
                          </span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="pb-16 text-sm sm:pb-0">
                <div style={{ color: '#8892b0' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#ccd6f6' }}>
                    🌱 Roots to Code
                  </h3>
                  <p className="text-xs mb-3 opacity-75">
                    (A tribute to my father and grandfather — the hands that taught me creation.)
                  </p>
                  <blockquote className="text-sm leading-relaxed border-l-2 pl-4 my-4" style={{ borderColor: '#64ffda' }}>
                    <span className='text-yellow-200'>&ldquo;मैं कोड नहीं लिखता, मैं वही करता हूँ जो पिता करते थे — बस ज़मीन बदली है, जज़्बा नहीं।&rdquo;</span> <br />
                    I don&apos;t just write code; I do what my father did — only the soil has changed, not the spirit.
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
