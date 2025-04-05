import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";




const tech = {
  "Programming Languages": "Golang, Typescript, Python, Elixir, C++",
  Frameworks: "Go-Gin, NextJS, Tailwind, React, Flask, Phoenix",
  Database: "Postgres, MongoDB, Redis",
  "Platform/Cloud": " AWS, Kubernetes, Terraform, Docker",
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

const certificates = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/2d49d590-5c98-4e64-915b-e9ca3e50ec62",
  },
  {
    title: "Developing Secure Software",
    issuer: "The Linux Foundation",
    link: "https://www.credly.com/badges/af06b77a-d878-48be-85a1-ea37bb893aaf/linked_in_profile",
  },
  {
    title: "GitHub Copilot",
    issuer: "Github",
    link: "https://www.credly.com/badges/0feb784b-3712-41ad-8666-8e3b01ed17f8/linked_in_profile",
  },
];

export default function Home() {
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
            Ratnesh Maurya
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            Software Development Engineer, passionate about backend development and cloud-native technologies.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Introduction Section */}
        <section className="py-8">
          <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 p-6 sm:p-8 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Hey there! 👋</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I am a <span className="font-semibold">Software Development Engineer</span>, currently working at {" "}
                <a href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-bold">
                  Initializ
                </a>
                , where I collaborate with {" "}
                <a href="https://www.loannetwork.app/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-bold">
                  Loannetwork
                </a>
                {" "} to enhance their digital lending platform by integrating services like NSDL, Aadhaar, and PAN verification. I also built a secure Key Management System with client-side encryption and designed a Kubernetes Controller. Previously, I interned at{" "}
                <a href="https://www.linkedin.com/company/emsec/about/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-bold">
                  EMSEC Pvt. Ltd.
                </a>
                , developing scalable RESTful APIs and data scraping frameworks.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-400">Find me on</span>
                <a href="https://x.com/ratnesh_maurya_" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/ratnesh-maurya" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
          </div>

          {/* Experience Section */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 p-6 sm:p-8 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Experience</h2>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="text-teal-600 dark:text-teal-400 font-medium">{exp.period}</div>
                    <div className="flex flex-col sm:flex-row items-start gap-2">
                      <div className="font-medium text-gray-800 dark:text-white">{exp.role}</div>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                        {exp.company}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
          </div>

          {/* Technologies Section */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 p-6 sm:p-8 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technologies I have worked with</h2>
              <div className="space-y-4">
                {Object.entries(tech).map(([category, items]) => (
                  <div key={category} className="flex flex-col sm:flex-row items-start gap-2">
                    <h4 className="text-teal-600 dark:text-teal-400 font-medium min-w-[200px]">{category}:</h4>
                    <p className="text-gray-700 dark:text-gray-300">{items}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
          </div>

          {/* Recent Blogs Section */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 p-6 sm:p-8 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Recent Blogs</h2>
              <div className="space-y-4">
                {blogs.map((blog, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-teal-600 dark:text-teal-400 font-medium min-w-[120px]">{blog.date}</span>
                    <Link href={`/blogs/${blog.slug}`} className="text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {blog.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
          </div>

          {/* Certifications Section */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Certifications</h2>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-2">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {cert.title}
                    </a>
                    <span className="text-teal-600 dark:text-teal-400">by {cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
          </div>
        </section>
      </div>
    </div>
  );
}