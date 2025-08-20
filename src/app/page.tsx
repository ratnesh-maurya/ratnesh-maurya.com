import Link from "next/link";

// Featured projects data
const featuredProjects = [
  {
    name: "MDConverter",
    description: "Lightning-fast markdown conversion tool built with TypeScript and React",
    link: "https://mdconverter.ratnesh-maurya.com/",
    github: "https://github.com/ratnesh-maurya/mdconverter"
  },
  {
    name: "JSONic",
    description: "Advanced JSON editor and formatter with syntax highlighting",
    link: "https://jsonic.ratnesh-maurya.com/",
    github: "https://github.com/ratnesh-maurya/jsonic"
  },
  {
    name: "LN App",
    description: "India's most intelligent loan distribution platform for DSAs and borrowers",
    link: "https://play.google.com/store/apps/details?id=com.loannetwork.app&hl=en_IN",
    github: "https://github.com/ratnesh-maurya"
  },
  {
    name: "Go REST API",
    description: "High-performance REST API built with Go, PostgreSQL, and Docker",
    link: "https://github.com/ratnesh-maurya",
    github: "https://github.com/ratnesh-maurya"
  }
];

// Recent blog posts
const recentPosts = [
  {
    title: "Optimizing Memory Layout in Go: A Deep Dive into Struct Design",
    date: "Jan 25, 2025",
    slug: "Optimizing-Memory-Layout-in-Go-A-Deep-Dive-into-Struct-Design"
  },
  {
    title: "Easily Deploy Your Nanoc Website to S3 with GitHub Actions",
    date: "Nov 23, 2024",
    slug: "Easily-Deploy-Your-Nanoc-Website-to-S3-with-GitHub-Actions"
  },
  {
    title: "Architectural Design for a Ride App such as OLA, UBER, RAPIDO",
    date: "Jul 30, 2024",
    slug: "Architectural-Design-for-a-Ride-App-such-as-OLA-UBER-RAPIDO"
  }
];

// Skills data
const skills = [
  "Go", "TypeScript", "React", "Next.js", "PostgreSQL", "Docker",
  "Kubernetes", "AWS", "Python", "Node.js", "MongoDB", "Redis",
  "Terraform", "Git", "Linux", "Microservices", "REST APIs", "GraphQL"
];

// Stats data
const stats = [
  { label: "Projects Built", value: "7+" },
  { label: "Years Experience", value: "1.5+" },
  { label: "Technologies", value: "10+" },
  { label: "Learning", value: "∞" }
];

export default function Home() {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
      {/* Hero Section */}
      <section>
        <div className="text-xl leading-none sm:text-2xl sm:leading-none text-gray-600">
          Hi there,
        </div>
        <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold text-gray-900 mt-2">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ratnesh Maurya
          </span>{" "}
          👋
        </h1>
        <div className="opacity-90 leading-relaxed text-gray-600 mt-4">
          I&apos;m a Software Development Engineer building scalable systems and full-stack web applications with Go, TypeScript, React, and PostgreSQL. I work at{" "}
          <a
            className="font-semibold no-underline hover:underline text-blue-600"
            href="https://www.linkedin.com/company/initializ/about/"
            target="_blank"
            rel="noopener"
          >
            Initializ
          </a>
          {" "}and enjoy contributing to open source projects. Connect with me on{" "}
          <a
            className="font-semibold no-underline hover:underline text-blue-600"
            href="https://www.linkedin.com/in/ratnesh-maurya"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          .
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-4xl text-gray-900 font-semibold mb-5">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl text-gray-900 font-semibold">
          <a
            className="font-semibold no-underline hover:underline text-current"
            href="https://github.com/ratnesh-maurya"
            target="_blank"
            rel="noopener"
          >
            Projects
          </a>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-6">
          {featuredProjects.map((project, index) => (
            <a
              key={index}
              className="font-semibold no-underline text-current group py-3 px-4 relative top-0 transition-all border border-neutral-300 rounded-md hover:top-[-2px] hover:opacity-90 hover:no-underline"
              href={project.link}
              target="_blank"
              rel="noopener"
            >
              <div className="flex items-center">
                <div className="text-lg font-semibold">{project.name}</div>
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

      {/* Blog Section */}
      <section>
        <h2 className="text-4xl text-gray-900 font-semibold">
          <Link className="font-semibold no-underline hover:underline text-current" href="/blogs">
            Blog
          </Link>
        </h2>
        <ul className="mt-5 space-y-1 divide-y divide-neutral-300">
          {recentPosts.map((post) => (
            <li key={post.slug} className="py-1.5 transition-opacity hover:opacity-70 text-md">
              <Link
                className="no-underline text-current hover:no-underline font-normal"
                href={`/blogs/${post.slug}`}
              >
                <div className="flex flex-col sm:flex-row py-2 sm:items-center">
                  <div className="flex-1 mr-3 truncate">{post.title}</div>
                  <span className="shrink-0">{post.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-4">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}