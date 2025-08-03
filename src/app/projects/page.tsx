import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SoftwareApplicationSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

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
    id: 'npm-compare',
    title: 'NPM Package Comparator',
    description: 'Compare NPM Packages Side by Side',
    longDescription:
      'A powerful tool for comparing npm packages side by side. Analyze versions, dependencies, downloads, and more to make informed decisions about package selection.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind-css', 'NPM API'],
    links: {
      github: 'https://github.com/ratnesh-maurya/npm-compare',
      live: 'https://npm-compare.ratnesh-maurya.com/',
    },
    image: '/npm-compare.png',
  },
  {
    id: 'rehabify',
    title: 'Rehabify',
    description: 'Addiction Recovery Platform',
    longDescription:
      'A comprehensive platform aimed at improving addiction recovery services with features for tracking progress and connecting with support groups.',
    tags: ['TypeScript', 'React', 'Node.js', 'Tailwind-css', 'Go'],
    links: {
      github: 'https://github.com/Ratnesh-Team/Rehabify',
      live: 'https://rehabify.ratnesh-maurya.com/',
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
      live: 'https://currency.ratnesh-maurya.com/',
    },
    image: '/currency-converter.png',
  },
];

export const metadata: Metadata = {
  title: 'Projects - Ratnesh Maurya',
  description: 'Explore the software projects and applications built by Ratnesh Maurya, including web applications, CLI tools, and open-source contributions.',
  keywords: 'Projects, Ratnesh Maurya, Software Projects, Web Applications, CLI Tools, Open Source, GitHub, Portfolio Projects, TypeScript, Golang, React, Next.js',
  openGraph: {
    title: 'Projects - Ratnesh Maurya',
    description: 'Explore the software projects and applications built by Ratnesh Maurya',
    type: 'website',
    url: 'https://ratnesh-maurya.com/projects',
    images: [
      {
        url: 'https://ratnesh-maurya.com/projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects - Ratnesh Maurya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ratnesh_maurya_',
    title: 'Projects - Ratnesh Maurya',
    description: 'Explore the software projects and applications built by Ratnesh Maurya',
    creator: '@ratnesh_maurya_',
    images: ['https://ratnesh-maurya.com/projects.jpg'],
  },
  alternates: {
    canonical: 'https://ratnesh-maurya.com/projects',
  },
};

function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ratnesh-maurya.com" },
          { name: "Projects", url: "https://ratnesh-maurya.com/projects" }
        ]}
      />

      {/* Software Application Schemas for each project */}
      {projects.map((project) => (
        <SoftwareApplicationSchema
          key={project.id}
          name={project.title}
          description={project.longDescription}
          url={project.links.live || project.links.github || ''}
          applicationCategory="WebApplication"
          operatingSystem="Any"
          programmingLanguage={project.tags}
          author="Ratnesh Maurya"
          dateCreated="2024-01-01" // You might want to add actual dates to your project data
          codeRepository={project.links.github || ''}
        />
      ))}
      {/* Enhanced Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob dark:bg-teal-600 dark:opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 dark:bg-teal-400 dark:opacity-5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 dark:bg-teal-500 dark:opacity-5"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000 dark:bg-teal-400 dark:opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-2 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16 sm:p-6 sm:mx-auto">
        {/* Enhanced Header Section */}
        <div className="sticky top-0 z-10 py-8">
          <div className="text-center relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 blur-3xl dark:from-teal-500/10 dark:to-teal-500/10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)]"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-300 bg-clip-text text-transparent mb-4 drop-shadow-sm animate-pulse-slow">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
              Showcasing my journey through code, innovation, and problem-solving in software development.
            </p>
          </div>
        </div>

        {/* Enhanced Projects Section */}
        <section className="py-8">
          <div className="grid gap-8 max-w-4xl mx-auto sm:grid-cols-1">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-orange-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-teal-400/10"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Enhanced Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative p-6 sm:p-8">
                  {/* Project Title & Description with enhanced hover effect */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-orange-600 dark:text-teal-400 font-medium mb-4">
                      {project.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-orange-100/50 dark:bg-teal-700/20 text-orange-600 dark:text-teal-300 font-medium border border-orange-200/50 dark:border-teal-500/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 dark:text-teal-400 font-medium group/button bg-orange-50/50 dark:bg-teal-900/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-orange-100/50 dark:hover:bg-teal-800/20 backdrop-blur-sm border border-orange-100/30 dark:border-teal-500/20"
                      >
                        <Github className="h-5 w-5" />
                        GitHub
                        <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                      </Link>
                    )}
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 dark:text-teal-400 font-medium group/button bg-orange-50/50 dark:bg-teal-900/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-orange-100/50 dark:hover:bg-teal-800/20 backdrop-blur-sm border border-orange-100/30 dark:border-teal-500/20"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                        <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectsPage;