"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";

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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 mb-16 sm:mb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/20] via-[rgb(var(--secondary))/10] to-[rgb(var(--primary))/20] rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--primary))/20] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--secondary))/20] rounded-full blur-3xl"></div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative inline-block mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))/30] via-[rgb(var(--secondary))/20] to-[rgb(var(--primary))/30] blur-3xl rounded-full"></div>
                <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))]">
                  Projects
                </h1>
              </motion.div>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-2">{project.description}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-[rgb(var(--primary))/10] text-[rgb(var(--primary))] dark:bg-[rgb(var(--primary))/20] dark:text-[rgb(var(--primary))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[rgb(var(--primary))] hover:text-[rgb(var(--secondary))] transition-colors group"
                        >
                          <span className="font-medium">GitHub</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                      {project.links.live && (
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[rgb(var(--primary))] hover:text-[rgb(var(--secondary))] transition-colors group"
                        >
                          <span className="font-medium">Live Demo</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}