import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

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


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Projects - Ratnesh Maurya',
    description: 'Explore the projects developed by Ratnesh Maurya, including web applications, tools, and more.',
    keywords: 'Projects, Ratnesh Maurya, Web Development, JavaScript, React, Next.js, Tailwind CSS , Golang, Python, TypeScript',
    openGraph: {
      title: 'Projects - Ratnesh Maurya',
      description: 'Explore the projects developed by Ratnesh Maurya, including web applications, tools, and more.',
      type: 'website',
      url: 'https://ratn.tech/projects',
      images: {
        url: 'https://ratn.tech/projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects - Ratnesh Maurya',
      },
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ratnesh_maurya_',
      title: 'Projects - Ratnesh Maurya',
      description: 'Explore the projects developed by Ratnesh Maurya, including web applications, tools, and more.',
      creator: '@ratnesh_maurya_',
      images: {
        url: 'https://ratn.tech/projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects - Ratnesh Maurya',
      },
    },
  };
}

function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-2 font-sans shadow-2xl dark:bg-gray-950/70 shadow-black p-4 backdrop-blur-xl rounded-xl mr-2 ml-2  sm:mx-auto">


      <h1 className="text-3xl font-bold text-teal-600 dark:text-gray-200">Projects 👨‍💻</h1>

      <section className="py-12" id="projects">
        <div className="max-w-3xl mx-auto px-2">
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="pb-6 border-b border-gray-300 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p>{project.description}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 dark:text-orange-500 flex items-center gap-1 group"
                    >
                      GitHub
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 dark:text-orange-500 dark:hover:text-orange-600 flex items-center gap-1 group"
                    >
                      Live Demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;