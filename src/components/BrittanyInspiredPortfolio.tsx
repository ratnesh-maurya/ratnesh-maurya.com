'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const BrittanyInspiredPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
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

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-300 font-inter">
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <nav className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-slate-200">
            <a href="/">RM</a>
          </h1>
          <button
            className="text-slate-400 hover:text-slate-200 transition-colors"
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
                { id: 'projects', label: 'Projects' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeSection === item.id
                      ? 'text-slate-200'
                      : 'text-slate-500 hover:text-slate-200'
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
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Ratnesh Maurya</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Development Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                I build scalable backend systems and cloud-native applications with Go and Elixir.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'projects', label: 'Projects' }
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
                        <span className={`nav-indicator mr-4 h-px transition-all ${activeSection === item.id
                          ? 'w-16 bg-slate-200'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300'
                          }`}></span>
                        <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === item.id
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-200'
                          }`}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/ratnesh-maurya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/ratnesh-maurya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://x.com/ratnesh_maurya_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="mailto:ratnesh.maurya@example.com"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Content - Scrollable */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  I'm a passionate Software Development Engineer at{' '}
                  <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.linkedin.com/company/initializ/about/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Initializ
                  </a>{' '}
                  with 1.5 years of experience building scalable backend systems and cloud-native applications.
                  I specialize in crafting robust, high-performance solutions that handle thousands of concurrent users.
                </p>
                <p className="mb-4">
                  My expertise lies in backend development with{' '}
                  <span className="font-medium text-slate-200">Go</span> and{' '}
                  <span className="font-medium text-slate-200">Elixir</span>, where I focus on building
                  distributed systems, microservices architectures, and secure APIs. I have extensive experience
                  with cloud platforms, containerization, and modern DevOps practices.
                </p>
                <p>
                  Currently, I'm focused on developing high-traffic lending platforms, implementing client-side
                  encryption modules, and building custom Kubernetes controllers for automated infrastructure management.
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2023 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
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
                        <p className="mt-2 text-sm leading-normal">
                          Architected and developed high-traffic lending platform serving thousands of concurrent users.
                          Built secure client-side encryption modules and custom Kubernetes controllers for automated
                          infrastructure management. Optimized database queries resulting in 40% performance improvement.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Go', 'Elixir', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
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
                    className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
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
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {/* High-Traffic Lending Platform */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              High-Traffic Lending Platform
                              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Architected and developed a scalable lending platform handling thousands of concurrent users
                          with Go and PostgreSQL. Implemented advanced caching strategies and database optimizations
                          for high-performance operations.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Go', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Client-Side Encryption Module */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Client-Side Encryption Module
                              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Built secure encryption modules for sensitive data protection with advanced cryptographic algorithms.
                          Implemented end-to-end encryption for financial data with zero-knowledge architecture.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Go', 'Cryptography', 'Security', 'API Design'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Kubernetes Controller */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Custom Kubernetes Controller
                              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Developed custom Kubernetes controllers for automated infrastructure management and scaling.
                          Implemented intelligent resource allocation and self-healing capabilities for cloud-native applications.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Go', 'Kubernetes', 'Docker', 'Cloud Native', 'Terraform'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
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
                    className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
                    href="https://github.com/ratnesh-maurya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full Project
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                          Archive
                        </span>
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in{' '}
                <a
                  href="https://www.figma.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma
                </a>{' '}
                and coded in{' '}
                <a
                  href="https://code.visualstudio.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visual Studio Code
                </a>{' '}
                by yours truly. Built with{' '}
                <a
                  href="https://nextjs.org/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Next.js
                </a>{' '}
                and{' '}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
                , deployed with{' '}
                <a
                  href="https://vercel.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                . All text is set in the{' '}
                <a
                  href="https://rsms.me/inter/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inter
                </a>{' '}
                typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BrittanyInspiredPortfolio;
