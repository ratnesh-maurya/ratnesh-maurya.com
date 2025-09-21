'use client';

import { useState, useEffect } from 'react';

const TerminalPortfolio = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed to 1024px for better tablet/mobile experience
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typing animation for the welcome message
  useEffect(() => {
    const welcomeText = isMobile
      ? "Welcome to my terminal portfolio! Scroll down to explore."
      : "Welcome to my terminal portfolio! Click on commands below.";
    let i = 0;
    const timer = setInterval(() => {
      if (i < welcomeText.length) {
        setTypedText(welcomeText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isMobile]);

  // Cursor blinking animation
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Custom cursor for desktop
  useEffect(() => {
    if (!isMobile) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        background: #22c55e;
        border: 3px solid #ffffff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.15s ease;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
      `;
      document.body.appendChild(cursor);

      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      const scaleCursor = () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      };

      const resetCursor = () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      };

      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('mousedown', scaleCursor);
      document.addEventListener('mouseup', resetCursor);

      // Add hover effects for interactive elements
      const updateInteractiveElements = () => {
        const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', scaleCursor);
          el.addEventListener('mouseleave', resetCursor);
        });
      };

      updateInteractiveElements();

      // Update interactive elements when content changes
      const observer = new MutationObserver(updateInteractiveElements);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mousedown', scaleCursor);
        document.removeEventListener('mouseup', resetCursor);
        observer.disconnect();
        if (cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      };
    }
  }, [isMobile]);

  const asciiArt = `
██████╗  █████╗ ████████╗███╗   ██╗███████╗███████╗██╗  ██╗    ███╗   ███╗ █████╗ ██╗   ██╗██████╗ ██╗   ██╗ █████╗
██╔══██╗██╔══██╗╚══██╔══╝████╗  ██║██╔════╝██╔════╝██║  ██║    ████╗ ████║██╔══██╗██║   ██║██╔══██╗╚██╗ ██╔╝██╔══██╗
██████╔╝███████║   ██║   ██╔██╗ ██║█████╗  ███████╗███████║    ██╔████╔██║███████║██║   ██║██████╔╝ ╚████╔╝ ███████║
██╔══██╗██╔══██║   ██║   ██║╚██╗██║██╔══╝  ╚════██║██╔══██║    ██║╚██╔╝██║██╔══██║██║   ██║██╔══██╗  ╚██╔╝  ██╔══██║
██║  ██║██║  ██║   ██║   ██║ ╚████║███████╗███████║██║  ██║    ██║ ╚═╝ ██║██║  ██║╚██████╔╝██║  ██║   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝`;

  const sections = {
    home: {
      title: 'Home',
      content: (
        <div className="space-y-4 ">
          <div className="text-green-400">rk@ratnesh-muarya.com:~$ whoami</div>
          <div className="ml-4">
            <div className="text-blue-400 font-bold text-lg mb-2">Software Development Engineer</div>
            <div className="text-gray-300">
              Hey, I&apos;m Ratnesh Maurya 🇮🇳, a passionate Software Development Engineer at{' '}
              <a href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">
                Initializ
              </a>{' '}
              with 1.5 years of experience in backend development and cloud-native technologies.
            </div>
          </div>

          <div className="text-green-400">rk@ratnesh-muarya.com:~$ cat about.txt</div>
          <div className="ml-4 text-gray-300">
            I specialize in building scalable backend systems using{' '}
            <span className="text-yellow-400 font-semibold">Golang</span> and{' '}
            <span className="text-purple-400 font-semibold">Elixir</span>, with expertise in
            PostgreSQL, Redis, Docker, and Kubernetes. I&apos;m passionate about creating
            efficient, maintainable solutions that solve real-world problems.
          </div>
        </div>
      )
    },
    skills: {
      title: 'Skills',
      content: (
        <div className="space-y-4">
          <div className="text-green-400">rk@ratnesh-muarya.com:~$ ls -la skills/</div>
          <div className="ml-4 space-y-6">
            <div>
              <div className="text-yellow-400 font-bold mb-2">📋 Programming Languages:</div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="w-full">🔹 Go (Golang)</div>
                <div className="w-full">🔹 Elixir</div>
                <div className="w-full">🔹 JavaScript</div>
                <div className="w-full">🔹 TypeScript</div>
                <div className="w-full">🔹 Python</div>
                <div className="w-full">🔹 SQL</div>
              </div>
            </div>

            <div>
              <div className="text-yellow-400 font-bold mb-2">🗄️ Databases & Storage:</div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="w-full">🔸 PostgreSQL</div>
                <div className="w-full">🔸 Redis</div>
                <div className="w-full">🔸 MongoDB</div>
                <div className="w-full">🔸 InfluxDB</div>
              </div>
            </div>

            <div>
              <div className="text-yellow-400 font-bold mb-2">🔧 DevOps & Tools:</div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="w-full">🔧 Docker</div>
                <div className="w-full">🔧 Kubernetes</div>
                <div className="w-full">🔧 AWS</div>
                <div className="w-full">🔧 Git</div>
                <div className="w-full">🔧 Linux</div>
                <div className="w-full">🔧 Nginx</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    projects: {
      title: 'Projects',
      content: (
        <div className="space-y-4">
          <div className="text-green-400">rk@ratnesh-muarya.com:~$ ls -la projects/</div>
          <div className="ml-4 space-y-6">
            <div className="border-l-2 border-blue-400 pl-4">
              <div className="text-blue-400 font-bold text-lg">📦 JSONic</div>
              <div className="text-gray-300 mb-2">A lightweight and powerful utility designed to simplify working with JSON data.</div>
              <div className="text-sm text-gray-400 mb-2">Tech Stack: Go, JavaScript, HTML/CSS</div>
              <div className="flex flex-wrap gap-2">
                <a href="https://jsonic.ratnesh-maurya.com/" target="_blank" rel="noopener"
                  className="text-green-400 hover:text-green-300 underline text-sm">🔗 Live Demo</a>
                <a href="https://github.com/ratnesh-maurya/jsonic" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-sm">📂 GitHub</a>
              </div>
            </div>

            <div className="border-l-2 border-purple-400 pl-4">
              <div className="text-purple-400 font-bold text-lg">📝 MDConverter</div>
              <div className="text-gray-300 mb-2">Instantly transform any text into beautiful markdown. Just paste and watch the magic happen.</div>
              <div className="text-sm text-gray-400 mb-2">Tech Stack: Next.js, TypeScript, Tailwind CSS</div>
              <div className="flex flex-wrap gap-2">
                <a href="https://mdconverter.ratnesh-maurya.com/" target="_blank" rel="noopener"
                  className="text-green-400 hover:text-green-300 underline text-sm">🔗 Live Demo</a>
                <a href="https://github.com/ratnesh-maurya/mdconverter" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-sm">📂 GitHub</a>
              </div>
            </div>

            <div className="border-l-2 border-green-400 pl-4">
              <div className="text-green-400 font-bold text-lg">🏥 Rehabify</div>
              <div className="text-gray-300 mb-2">The Path to a Brighter Tomorrow - A comprehensive platform for addiction recovery services.</div>
              <div className="text-sm text-gray-400 mb-2">Tech Stack: React.js, Node.js, MongoDB, Socket.io</div>
              <div className="flex flex-wrap gap-2">
                <a href="https://rehabify.ratnesh-maurya.com/" target="_blank" rel="noopener"
                  className="text-green-400 hover:text-green-300 underline text-sm">🔗 Live Demo</a>
                <a href="https://github.com/ratnesh-maurya/rehabify" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-sm">📂 GitHub</a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    blogs: {
      title: 'Blogs',
      content: (
        <div className="space-y-4">
          <div className="text-green-400">rk@ratnesh-muarya.com:~$ cat blogs/posts.md</div>
          <div className="ml-2 md:ml-4 space-y-4">
            <div className="text-blue-400 font-bold text-lg mb-4">📝 My Blog Posts</div>

            <div className="border-l-2 border-blue-400 pl-3 md:pl-4">
              <div className="text-yellow-400 font-bold mb-2">🌐 Visit My Blog</div>
              <div className="text-gray-300 mb-3">
                I write about software development, backend engineering, and my experiences with modern technologies like Go, Elixir, and cloud architecture.
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://blog.ratnesh-maurya.com/" target="_blank" rel="noopener"
                  className="text-green-400 hover:text-green-300 underline text-sm">
                  🔗 blog.ratnesh-maurya.com
                </a>
              </div>
            </div>

            <div className="border-l-2 border-purple-400 pl-3 md:pl-4">
              <div className="text-purple-400 font-bold mb-2">📚 Topics I Cover</div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="w-full">🔹 Backend Development with Go & Elixir</div>
                <div className="w-full">🔹 Cloud Architecture & AWS</div>
                <div className="w-full">🔹 Microservices & System Design</div>
                <div className="w-full">🔹 DevOps & Kubernetes</div>
                <div className="w-full">🔹 Database Design & Optimization</div>
                <div className="w-full">🔹 Software Engineering Best Practices</div>
              </div>
            </div>

            <div className="mt-4 p-3 md:p-4 bg-gray-800 rounded border-l-4 border-green-400">
              <div className="text-green-400 font-bold mb-2 text-sm md:text-base">💡 Latest Posts</div>
              <div className="text-gray-300 text-xs md:text-sm">Check out my latest insights on backend development, system architecture, and engineering practices.</div>
              <div className="text-gray-400 text-xs mt-2">🕒 Updated regularly with new content</div>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: 'Experience',
      content: (
        <div className="space-y-6">
          <div className="text-green-400">rk@ratnesh-muarya.com:~$ cat experience/work_history.md</div>
          <div className="ml-2 md:ml-4 space-y-6">

            {/* Current Role */}
            <div className="border-l-2 border-blue-400 pl-3 md:pl-4">
              <div className="text-blue-400 font-bold text-lg md:text-xl">Software Engineer</div>
              <div className="text-green-400 font-semibold text-sm md:text-base">Initializ | Jul 2024 - Present · 1 yr 3 mos</div>
              <div className="text-gray-400 text-xs md:text-sm mb-3">Gurugram, Haryana, India · Full-time · On-site</div>

              <div className="mt-3">
                <div className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🎯 Key Achievements:</div>
                <ul className="text-gray-300 space-y-1 text-xs md:text-sm">
                  <li>• Architected and built a scalable backend for a high-traffic lending platform using Elixir, AWS, PostgreSQL, and Redis</li>
                  <li>• Led the integration of key KYC services (Aadhaar, PAN, GST), automating and securing the user onboarding process</li>
                  <li>• Optimized the end-to-end lending lifecycle, significantly improving platform stability and performance</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="text-yellow-400 font-bold mb-2 text-sm md:text-base">💻 Tech Stack:</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Elixir, AWS, PostgreSQL, Redis, Go, React Native, Kubernetes
                </div>
              </div>
            </div>

            {/* Internship */}
            <div className="border-l-2 border-purple-400 pl-3 md:pl-4">
              <div className="text-purple-400 font-bold text-lg md:text-xl">Software Developer Internship</div>
              <div className="text-green-400 font-semibold text-sm md:text-base">Initializ | Aug 2023 - Jul 2024 · 1 yr</div>
              <div className="text-gray-400 text-xs md:text-sm mb-3">Kanpur, Uttar Pradesh, India · Internship</div>

              <div className="mt-3">
                <div className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🎯 Key Achievements:</div>
                <ul className="text-gray-300 space-y-1 text-xs md:text-sm">
                  <li>• Developed secure client-side encryption modules in TypeScript and backend services in Golang for a secret management platform</li>
                  <li>• Built a Kubernetes Controller (using CRDs) to automate secret injection and management in containerized environments</li>
                  <li>• Established and managed CI/CD pipelines with GitHub Actions, automating the complete testing and deployment lifecycle</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="text-yellow-400 font-bold mb-2 text-sm md:text-base">💻 Tech Stack:</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Go, TypeScript, Kubernetes, AWS, GitHub Actions, Docker, Agile Methodologies
                </div>
              </div>
            </div>

            {/* EMSEC Internship */}
            <div className="border-l-2 border-green-400 pl-3 md:pl-4">
              <div className="text-green-400 font-bold text-lg md:text-xl">Software Developer Intern</div>
              <div className="text-green-400 font-semibold text-sm md:text-base">EMSEC | Mar 2023 - Aug 2023 · 6 mos</div>
              <div className="text-gray-400 text-xs md:text-sm mb-3">Remote · Internship</div>

              <div className="mt-3">
                <div className="text-yellow-400 font-bold mb-2 text-sm md:text-base">🎯 Key Achievements:</div>
                <ul className="text-gray-300 space-y-1 text-xs md:text-sm">
                  <li>• Engineered a secure and scalable backend system to manage SSL certificate data from over 100 websites</li>
                  <li>• Architected and implemented a resilient database schema specifically designed for efficient SSL certificate information management</li>
                  <li>• Utilized modern development methodologies like Agile and Scrum, ensuring timely delivery of features</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="text-yellow-400 font-bold mb-2 text-sm md:text-base">💻 Tech Stack:</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  JSON, CSS, Database Design, Agile, Scrum
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },
    contact: {
      title: 'Contact',
      content: (
        <div className="space-y-4">
          <div className="text-green-400">rk@ratnesh-muarya.com:~$ cat contact/info.txt</div>
          <div className="ml-2 md:ml-4 space-y-4">
            <div className="text-blue-400 font-bold text-base md:text-lg mb-4">📞 Get In Touch</div>

            <div className="space-y-3 w-full">


              <div className="flex items-start space-x-2 flex-wrap">
                <span className="text-yellow-400">🔗</span>
                <span className="text-gray-300 text-xs md:text-sm">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/ratnesh-maurya" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-xs md:text-sm break-all">
                  linkedin.com/in/ratnesh-maurya
                </a>
              </div>

              <div className="flex items-start space-x-2 flex-wrap">
                <span className="text-yellow-400">🐙</span>
                <span className="text-gray-300 text-xs md:text-sm">GitHub:</span>
                <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-xs md:text-sm break-all">
                  github.com/ratnesh-maurya
                </a>
              </div>

              <div className="flex items-start space-x-2 flex-wrap">
                <span className="text-yellow-400">🐦</span>
                <span className="text-gray-300 text-xs md:text-sm">Twitter:</span>
                <a href="https://x.com/ratnesh_maurya_" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-xs md:text-sm">
                  @ratnesh_maurya_
                </a>
              </div>

              <div className="flex items-start space-x-2 flex-wrap">
                <span className="text-yellow-400">🌐</span>
                <span className="text-gray-300 text-xs md:text-sm">Website:</span>
                <a href="https://ratnesh-maurya.com" target="_blank" rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline text-xs md:text-sm break-all">
                  ratnesh-maurya.com
                </a>
              </div>

              <div className="flex items-start space-x-2 flex-wrap">
                <span className="text-yellow-400">📍</span>
                <span className="text-gray-300 text-xs md:text-sm">Location:</span>
                <span className="text-white text-xs md:text-sm">India 🇮🇳</span>
              </div>
            </div>

            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-800 rounded border-l-4 border-green-400">
              <div className="text-green-400 font-bold mb-2 text-sm md:text-base">💼 Available for:</div>
              <div className="text-gray-300 text-xs md:text-sm">Full-time opportunities, freelance projects, and interesting collaborations</div>
              <div className="text-gray-400 text-xs mt-2">🕒 Response time: Within 24 hours</div>
            </div>
          </div>
        </div>
      )
    }
  };

  const commands = [
    { cmd: 'whoami', section: 'home', desc: 'About me' },
    { cmd: 'ls skills/', section: 'skills', desc: 'Technical skills' },
    { cmd: 'ls projects/', section: 'projects', desc: 'My projects' },
    { cmd: 'cat blogs/', section: 'blogs', desc: 'My blog posts' },
    { cmd: 'cat experience/', section: 'experience', desc: 'Work experience' },
    { cmd: 'cat contact/', section: 'contact', desc: 'Contact info' }
  ];

  return (
    <div className={`mx-auto ${isMobile ? 'w-full' : 'max-w-[65%]'}`}>
      <div className={`min-h-screen text-white font-mono ${isMobile ? 'bg-gray-900' : 'bg-transparent'}`}>
        {/* Terminal Header */}
        <div className={`px-2 sm:px-3 md:px-4 py-2 flex items-center space-x-2 border-b sticky top-0 z-20 backdrop-blur-sm ${isMobile
          ? 'bg-gray-800/95 border-gray-700'
          : 'bg-gray-800/10 border-gray-700/30'
          }`}>
          <div className="flex space-x-1 sm:space-x-2">
            <div className={`bg-red-500 rounded-full ${isMobile ? 'w-2 h-2' : 'w-2 h-2 md:w-3 md:h-3'}`}></div>
            <div className={`bg-yellow-500 rounded-full ${isMobile ? 'w-2 h-2' : 'w-2 h-2 md:w-3 md:h-3'}`}></div>
            <div className={`bg-green-500 rounded-full ${isMobile ? 'w-2 h-2' : 'w-2 h-2 md:w-3 md:h-3'}`}></div>
          </div>
          <div className={`text-gray-400 ml-2 md:ml-4 ${isMobile ? 'text-xs' : 'text-xs md:text-sm'}`}>
            rk@ratnesh-muarya.com: ~
          </div>
        </div>

        <div className={`w-full py-6 flex justify-center`}>
          <div className={`w-full ${isMobile ? 'px-2 sm:px-4' : 'px-4'}`}>
            {/* ASCII Art Header */}
            <div className="text-center mb-6 md:mb-8">
              <div className="overflow-x-auto">
                <pre className={`text-blue-400 whitespace-pre inline-block ${isMobile
                  ? 'text-[4px] xs:text-[5px] sm:text-[6px]'
                  : 'text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm'
                  }`}>
                  {asciiArt}
                </pre>
              </div>
              <div className={`text-green-400 mt-3 md:mt-4 px-2 md:px-4 ${isMobile
                ? 'text-xs sm:text-sm'
                : 'text-sm md:text-lg lg:text-xl'
                }`}>
                Software Development Engineer | Backend Engineer
              </div>
            </div>

            {/* Welcome Message with Typing Effect */}
            <div className={`text-center ${isMobile ? 'mb-6' : 'mb-8'}`}>
              <div className={`text-green-400 ${isMobile ? 'text-xs sm:text-sm' : 'text-sm'}`}>
                rk@ratnesh-muarya.com:~$ echo &quot;welcome&quot;
              </div>
              <div className={`text-gray-300 mt-2 px-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
                {typedText}
                {showCursor && <span className="text-green-400">█</span>}
              </div>
            </div>

            {/* Command Navigation - Desktop Only */}
            {!isMobile && (
              <div className="mb-8">
                <div className="text-green-400 mb-4 text-sm md:text-base">rk@ratnesh-muarya.com:~$ help</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {commands.map((command, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(command.section)}
                      className={`text-left p-3 md:p-4 rounded border transition-all duration-200 hover:bg-gray-800/50 active:scale-95 ${currentSection === command.section
                        ? 'border-blue-400 bg-gray-800/30 shadow-lg'
                        : 'border-gray-700/50 hover:border-gray-600/50'
                        }`}
                    >
                      <div className="text-blue-400 font-bold text-sm md:text-base">{command.cmd}</div>
                      <div className="text-gray-400 text-xs md:text-sm">{command.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Content Section */}
            {isMobile ? (
              // Mobile: Show all sections with full width
              <div className="space-y-4 sm:space-y-6 w-full">
                {Object.entries(sections).map(([key, section]) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700 shadow-xl w-full">
                    <div className="text-yellow-400 font-bold text-sm sm:text-base mb-2 sm:mb-3 flex items-center">
                      <span className="mr-2">📁</span>
                      {section.title}
                    </div>
                    <div className="text-sm w-full">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop: Show selected section with transparency
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700/30 shadow-xl">
                <div className="text-yellow-400 font-bold text-base md:text-lg mb-4 flex items-center">
                  <span className="mr-2">📁</span>
                  {sections[currentSection as keyof typeof sections].title}
                </div>
                <div className="text-sm md:text-base">
                  {sections[currentSection as keyof typeof sections].content}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className={`mt-6 sm:mt-8 text-center px-2 ${isMobile ? 'text-xs text-gray-500' : 'text-xs md:text-sm text-gray-400/70'}`}>
              <div className={`mb-2 ${isMobile ? 'text-green-400 text-xs' : 'text-green-400/70'}`}>
                rk@ratnesh-muarya.com:~$ echo &quot;Built with ❤️ using Next.js & Tailwind CSS&quot;
              </div>
              <div className={isMobile ? 'text-xs' : ''}>© 2025 Ratnesh Maurya. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
