import React from 'react';

import { Metadata } from 'next';
import { SoftwareApplicationSchema, BreadcrumbSchema, PortfolioSchema, WebApplicationSchema } from '@/components/seo/StructuredData';
import { projects } from '@/data/projects';



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
    <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
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

      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold text-gray-900">
          Projects
        </h1>
        <div className="opacity-90 leading-relaxed text-gray-600 mt-4">
          A showcase of innovative software solutions, from web applications to developer tools,
          built with modern technologies and best practices.
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              className="font-semibold no-underline text-current group py-3 px-4 relative top-0 transition-all border border-neutral-300 rounded-md hover:top-[-2px] hover:opacity-90 hover:no-underline"
              href={project.links.live || project.links.github}
              target="_blank"
              rel="noopener"
            >
              <div className="flex items-center">
                <div className="text-lg font-semibold">{project.title}</div>
                <svg
                  className="w-3 h-3 inline-block shrink-0 text-current align-middle mb-0.5 ml-2 transition-opacity opacity-0 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
              <div className="text-sm opacity-80 pointer-events-none font-normal">
                {project.description}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;