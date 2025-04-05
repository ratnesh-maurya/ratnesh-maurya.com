import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  image: string;
}

const projects: Project[] = [
  {
    id: 'rehabify',
    title: 'Rehabify',
    description: 'Addiction Recovery Platform',
    longDescription:
      'A comprehensive platform aimed at improving addiction recovery services with features for tracking progress and connecting with support groups.',
    tags: ['TypeScript', 'React', 'Node.js', 'Tailwind-css', 'Go'],
    links: {
      github: 'https://github.com/Ratnesh-Team/Rehabify',
      live: 'https://rehabify.ratn.tech/',
    },
    image: '/rehabify.png',
  },
  {
    id: 'secret-operator',
    title: 'Secret Operator',
    description: 'Secure Key Management',
    longDescription:
      'A Kubernetes operator for managing secrets and sensitive information with enhanced security protocols.',
    tags: ['Go', 'Kubernetes', 'Security'],
    links: {
      github: 'https://github.com/initializ/secrets-operator',
    },
    image: '/operator.png',
  },
  {
    id: 'unzip-n-open',
    title: 'Unzip N Open',
    description: 'CLI File Management Tool',
    longDescription:
      'A command-line interface tool that simplifies file management for developers with intuitive commands and efficient operations.',
    tags: ['Go', 'CLI'],
    links: {
      github: 'https://github.com/ratnesh-maurya/Unzip_N_Open',
    },
    image: '/cli.png',
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    description: 'Real-time Exchange Rates',
    longDescription:
      'A currency converter application that provides real-time exchange rates and supports multiple currencies for accurate conversions.',
    tags: ['TypeScript', 'React', 'Tailwind-css'],
    links: {
      github: 'https://github.com/ratnesh-maurya/currency-converter',
      live: 'https://currency.ratn.tech/',
    },
    image: '/currency-converter.png',
  },
];

function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16 sm:p-6 sm:mx-auto">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob dark:bg-teal-600 dark:opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 dark:bg-teal-400 dark:opacity-5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 dark:bg-teal-500 dark:opacity-5"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000 dark:bg-teal-400 dark:opacity-5"></div>
      </div>

      {/* Header Section */}
      <div className="sticky top-0 z-10 py-8">
        <div className="text-center relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-100/20 via-transparent to-transparent dark:from-teal-500/5 blur-2xl"></div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            Projects 👨‍💻
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            Showcasing my journey through code, innovation, and problem-solving in software development.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-8">
        <div className="grid gap-8 max-w-4xl mx-auto sm:grid-cols-1">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-6 sm:p-8">
                {/* Project Title & Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-teal-100/50 dark:bg-teal-700/20 text-teal-600 dark:text-teal-300 font-medium border border-teal-200/50 dark:border-teal-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group/button bg-teal-50/50 dark:bg-teal-900/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-teal-100/50 dark:hover:bg-teal-800/20"
                    >
                      GitHub
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group/button bg-teal-50/50 dark:bg-teal-900/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-teal-100/50 dark:hover:bg-teal-800/20"
                    >
                      Live Demo
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  )}
                </div>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;