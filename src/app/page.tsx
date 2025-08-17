"use client"

import { User, Code2, Database, Cloud, BookOpen, Terminal, Twitter, Linkedin, Github, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GridPattern } from '@/components/ui/grid-pattern';
import { CardContainer, CardBody, CardItem } from '@/components/ui/aceternity-card';
import { Spotlight } from '@/components/ui/spotlight';

const tech = {
  "Programming Languages": [
    { name: "Golang", icon: "go" },
    { name: "Typescript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "Elixir", icon: "elixir" },
    { name: "C++", icon: "cplusplus" }
  ],
  Frameworks: [
    { name: "Go-Gin", icon: "gin" },
    { name: "NextJS", icon: "nextdotjs" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "React", icon: "react" },
    { name: "Flask", icon: "flask" },
    { name: "Phoenix", icon: "phoenixframework" }
  ],
  Database: [
    { name: "Postgres", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" }
  ],
  "Platform/Cloud": [
    { name: "AWS", icon: "amazon" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Terraform", icon: "terraform" },
    { name: "Docker", icon: "docker" }
  ]
}

const experiences = [
  {
    period: "08/2023 — Present",
    role: "Software Development Engineer",
    company: "@ initializ.ai ",
    link: "https://www.linkedin.com/company/initializ/about/",
  },
  {
    period: "03/2023 — 07/2023",
    role: "Software Developer Intern",
    company: "@ EMSEC Pvt. Ltd.",
    link: "https://www.linkedin.com/company/emsec/about/",
  },
]

const blogs = [
  {
    title: "Optimizing Memory Layout in Go: A Deep Dive into Struct Design",
    slug: "Optimizing-Memory-Layout-in-Go-A-Deep-Dive-into-Struct-Design",
    date: "Jan 25, 2025",
  },
  {
    title: "Easily Deploy Your Nanoc Website to S3 with GitHub Actions",
    slug: "Easily-Deploy-Your-Nanoc-Website-to-S3-with-GitHub-Actions",
    date: "Nov 23, 2024",
  },
  {
    title: "Architectural Design for a Ride App such as OLA, UBER, RAPIDO",
    slug: "Architectural-Design-for-a-Ride-App-such-as-OLA-UBER-RAPIDO",
    date: "Jul 30, 2024",
  }
];



const featuredWork = [
  {
    name: "LN App",
    description: "India's most intelligent loan distribution platform for DSAs and borrowers.",
    link: "https://play.google.com/store/apps/details?id=com.loannetwork.app&hl=en_IN",
    logo: "https://www.google.com/s2/favicons?domain=loannetwork.app&sz=64"
  },
  {
    name: "initializ.ai",
    description: "A platform to build, deploy, and manage AI agents.",
    link: "https://console.initializ.ai/secret/",
    logo: "https://www.google.com/s2/favicons?domain=initializ.ai&sz=64"
  }
];

const featuredProjects = [
  {
    name: "MDConverter",
    description: "Lightning-fast markdown conversion tool",
    link: "https://mdconverter.ratnesh-maurya.com/",
    github: "https://github.com/ratnesh-maurya/mdconverter",
    tags: ["TypeScript", "React", "Next.js"]
  },
  {
    name: "JSONic",
    description: "Advanced JSON editor and formatter",
    link: "https://jsonic.ratnesh-maurya.com/",
    github: "https://github.com/ratnesh-maurya/jsonic",
    tags: ["TypeScript", "React", "JSON"]
  }
];

export default function Home() {
  const [name, setName] = useState("रत्नेश मौर्य");
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setAnimationClass('fade-out');

      setTimeout(() => {
        setName((prevName) =>
          prevName === "रत्नेश मौर्य" ? "Ratnesh Maurya" : "रत्नेश मौर्य"
        );
        setAnimationClass('fade-in');
      }, 1000);
    }, 4000);

    return () => clearInterval(nameInterval);
  }, []);

  const fontClass = name === "रत्नेश मौर्य" ? "font-poppins" : "font-sans";

  return (
    <AuroraBackground>
      <div className="relative z-10 w-full">
        {/* Grid Pattern Background */}
        <GridPattern className="absolute inset-0 opacity-20" />

        {/* Spotlight Effects */}
        <Spotlight className="top-20 left-0 md:left-60 md:-top-20" fill="blue" />

        {/* Hero Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent mb-8 leading-tight pt-8 ${animationClass} ${fontClass}`}>
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Software Development Engineer passionate about building scalable systems,
              cloud-native architectures, and innovative developer tools.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-16">
              <a href="https://x.com/ratnesh_maurya_" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                <Twitter className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/ratnesh-maurya" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg group">
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/blogs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 text-lg group">
                Read Blog
                <BookOpen className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section - Moved up */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/20 dark:border-gray-700/20">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m a <span className="font-semibold text-gray-900 dark:text-white">Software Development Engineer</span> at{" "}
                <a href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                  Initializ
                </a>
                , where I build scalable systems and work on innovative projects like{" "}
                <a href="https://www.loannetwork.app/" target="_blank" rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                  Loannetwork
                </a>
                . I specialize in backend development, cloud-native architectures, and creating developer tools that make a difference.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
                  <div className="space-y-3">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                        <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">{exp.period}</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{exp.role}</div>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                          {exp.company}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Featured Work</h3>
                  <div className="space-y-3">
                    {featuredWork.map((work, index) => (
                      <a key={index} href={work.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300">
                        <Image src={work.logo} alt={work.name} width={32} height={32} className="rounded-md" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{work.name}</div>
                          <div className="text-gray-600 dark:text-gray-400 text-xs">{work.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
              Innovative tools and applications built with modern technologies
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <CardContainer key={project.name} className="inter-var" containerClassName="py-0">
                  <CardBody className="bg-gray-50/40 dark:bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-3xl p-8 border backdrop-blur-xl">
                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white mb-2">
                      {project.name}
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-neutral-600 dark:text-neutral-300 text-base mb-4">
                      {project.description}
                    </CardItem>

                    <CardItem translateZ="60" className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardItem>

                    <div className="flex justify-between items-center">
                      <CardItem translateZ={20} as={Link} href={project.link} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </CardItem>

                      <CardItem translateZ={20} as={Link} href={project.github} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 text-lg group">
                View All Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>



        {/* Technologies Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Technologies & Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(tech).map(([category, items]) => (
                <div key={category} className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-2 mb-4">
                    {category === "Programming Languages" && <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                    {category === "Frameworks" && <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                    {category === "Database" && <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                    {category === "Platform/Cloud" && <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                    <h3 className="font-semibold text-gray-900 dark:text-white">{category}</h3>
                  </div>

                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.name} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors">
                        <Image
                          src={`https://cdn.simpleicons.org/${item.icon}/3B82F6`}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="h-5 w-5 dark:hidden"
                        />
                        <Image
                          src={`https://cdn.simpleicons.org/${item.icon}/60A5FA`}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="h-5 w-5 hidden dark:block"
                        />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Blogs Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Recent Articles</h2>
              <Link href="/blogs" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                View All →
              </Link>
            </div>

            <div className="space-y-6">
              {blogs.map((blog, index) => (
                <Link key={index} href={`/blogs/${blog.slug}`}
                  className="block p-6 bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {blog.title}
                      </h3>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap">
                      {blog.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always open to discussing new opportunities, collaboration, or just having a chat about technology.
            </p>
            <a href="mailto:ratneshmaurya2311@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg group">
              Get In Touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}