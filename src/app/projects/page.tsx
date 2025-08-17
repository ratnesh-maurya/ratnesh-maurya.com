import React from 'react';
import { ArrowRight, Github, ExternalLink, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SoftwareApplicationSchema, BreadcrumbSchema, PortfolioSchema, WebApplicationSchema } from '@/components/seo/StructuredData';
import { projects } from '@/data/projects';

import { Spotlight } from '@/components/ui/spotlight';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GridPattern } from '@/components/ui/grid-pattern';

export const metadata: Metadata = {
  title: 'Projects - Ratnesh Maurya | Software Engineer & Full Stack Developer',
  description: 'Explore innovative software projects by Ratnesh Maurya including MDConverter, JSONic, and more. Featuring modern web applications, CLI tools, and open-source contributions built with TypeScript, React, Go, and cutting-edge technologies.',
  keywords: 'Ratnesh Maurya Projects, MDConverter, JSONic, Software Projects, Full Stack Developer, TypeScript, React, Next.js, Go, Kubernetes, Web Applications, CLI Tools, Open Source, GitHub Portfolio, Software Engineer Portfolio',
  openGraph: {
    title: 'Projects - Ratnesh Maurya | Innovative Software Solutions',
    description: 'Discover cutting-edge software projects including MDConverter for instant markdown conversion and JSONic for JSON manipulation. Built with modern technologies.',
    type: 'website',
    url: 'https://ratnesh-maurya.com/projects',
    images: [
      {
        url: 'https://ratnesh-maurya.com/projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Ratnesh Maurya Software Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ratnesh_maurya_',
    title: 'Projects - Ratnesh Maurya | Software Engineer Portfolio',
    description: 'Explore innovative software projects including MDConverter, JSONic, and more by Ratnesh Maurya',
    creator: '@ratnesh_maurya_',
    images: ['https://ratnesh-maurya.com/projects.jpg'],
  },
  alternates: {
    canonical: 'https://ratnesh-maurya.com/projects',
  },
};

function ProjectsPage() {
  return (
    <AuroraBackground>
      <div className="relative z-10 w-full">
        {/* Enhanced SEO Schema */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://ratnesh-maurya.com" },
            { name: "Projects", url: "https://ratnesh-maurya.com/projects" }
          ]}
        />

        {/* Portfolio Collection Schema */}
        <PortfolioSchema />

        {/* Enhanced Software Application Schemas */}
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
            dateCreated="2024-01-01"
            codeRepository={project.links.github || ''}
            keywords={[project.title, ...project.tags, 'Ratnesh Maurya', 'Software Project']}
            version="1.0.0"
            dateModified="2024-12-01"
          />
        ))}

        {/* Specific Web Application Schemas for featured projects */}
        <WebApplicationSchema
          name="MDConverter"
          description="Lightning-fast markdown conversion tool with smart detection"
          url="https://mdconverter.ratnesh-maurya.com/"
          features={[
            "Instant text to markdown conversion",
            "Smart detection of headings and lists",
            "One-click copy functionality",
            "Real-time preview",
            "Keyboard shortcuts support"
          ]}
          technologies={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
        />

        <WebApplicationSchema
          name="JSONic"
          description="Advanced JSON editor and formatter for developers"
          url="https://jsonic.ratnesh-maurya.com/"
          features={[
            "JSON validation and formatting",
            "Data visualization",
            "Tree view navigation",
            "Export functionality",
            "Syntax highlighting"
          ]}
          technologies={["TypeScript", "React", "Next.js", "JSON"]}
        />

        {/* Grid Pattern Background */}
        <GridPattern className="absolute inset-0 opacity-20" />

        {/* Spotlight Effects */}
        <Spotlight className="top-20 left-0 md:left-60 md:-top-20" fill="blue" />

        {/* Hero Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              A showcase of innovative software solutions, from web applications to developer tools,
              built with modern technologies and best practices.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-500" />
                <span>{projects.length} Featured Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-500" />
                <span>Updated 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All Live & Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        Featured Project
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Preview */}
                  {project.links.live && (
                    <div className="px-6 mb-4">
                      <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/30 dark:border-blue-700/30">
                        <div className="p-3 h-full flex flex-col">
                          {/* Mock Browser Bar */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded text-xs px-2 py-1 text-gray-600 dark:text-gray-400 truncate">
                              {project.links.live}
                            </div>
                          </div>

                          {/* Mock Content */}
                          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-2 space-y-1">
                            <div className="h-3 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                          </div>
                        </div>

                        {/* Live Indicator */}
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 dark:bg-black/90 rounded-full px-2 py-1 backdrop-blur-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Live</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-blue-100/60 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200/30 dark:border-blue-700/30"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-100/60 dark:bg-gray-800/20 text-gray-600 dark:text-gray-400 rounded-full">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-6 pb-6">
                    <div className="flex gap-3">
                      {project.links.live && (
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      )}

                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/20 dark:border-gray-700/20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Interested in collaborating? I&apos;m always open to discussing new projects and opportunities.
              </p>
              <Link
                href="mailto:ratneshmaurya2311@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg group"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}

export default ProjectsPage;