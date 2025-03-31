
import { Github, Linkedin, Twitter } from "lucide-react";


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="max-w-3xl mx-auto   px-2 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black  backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16  sm:p-6   sm:mx-auto">



const projects = [
  {
    title: "Key Management System",
    description: "Built a secure key management system with client-side encryption and designed a Kubernetes Controller",
    tech: "Golang, Kubernetes, Encryption",
    link: "https://github.com/ratnesh-maurya"
  },
  {
    title: "Digital Lending Platform",
    description: "Enhanced platform by integrating services like NSDL, Aadhaar, and PAN verification",
    tech: "Golang, Microservices, AWS",
    link: "https://www.loannetwork.app/"
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen  overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Hero Section */}
          <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 mb-16 sm:mb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/20] via-[rgb(var(--secondary))/10] to-[rgb(var(--primary))/20] rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--primary))/20] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--secondary))/20] rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="text-left">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))/30] via-[rgb(var(--secondary))/20] to-[rgb(var(--primary))/30] blur-3xl rounded-full"></div>
                  <h1 className="relative text-5xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))]">
                    Ratnesh Maurya
                  </h1>
                </motion.div>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-100 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                  Software Development Engineer specializing in backend development and cloud-native technologies
                </p>
                <div className="flex justify-center sm:justify-start gap-4 sm:gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://x.com/ratnesh_maurya_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--primary))/80] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Twitter className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/ratnesh-maurya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-[rgb(var(--secondary))] to-[rgb(var(--secondary))/80] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/ratnesh-maurya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Github className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </motion.a>
                </div>
              </div>
              <div className="relative mt-8 md:mt-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgb(var(--primary))/20] via-[rgb(var(--secondary))/10] to-[rgb(var(--primary))/20] p-1"
                >
                  <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-xl p-4 sm:p-6 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                      {Object.entries(tech).map(([category, items], index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
                        >
                          <h3 className="font-semibold text-sm sm:text-base text-[rgb(var(--primary))] dark:text-[rgb(var(--primary))] mb-1.5 sm:mb-2">{category}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-100 line-clamp-3">{items}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-24">
            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/10] via-[rgb(var(--secondary))/5] to-[rgb(var(--primary))/10] rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8 sm:mb-12">
                  <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-[rgb(var(--primary))]" />
                  <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))]">
                    Experience
                  </h2>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="w-full sm:w-48 flex-shrink-0 text-[rgb(var(--primary))] dark:text-[rgb(var(--primary))] font-medium text-base sm:text-lg">{exp.period}</div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-2 sm:mb-0">
                          <div className="font-semibold text-xl sm:text-2xl text-gray-700 dark:text-gray-100">{exp.role}</div>
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(var(--secondary))] dark:text-[rgb(var(--secondary))] hover:text-[rgb(var(--accent))] dark:hover:text-[rgb(var(--accent))] transition-colors text-lg sm:text-xl"
                          >
                            {exp.company}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Blogs Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/10] via-[rgb(var(--secondary))/5] to-[rgb(var(--primary))/10] rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8 sm:mb-12">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10 text-[rgb(var(--primary))]" />
                  <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))]">
                    Recent Blogs
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {blogs.map((blog, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <span className="text-sm sm:text-base text-[rgb(var(--primary))] dark:text-[rgb(var(--primary))] mb-2 sm:mb-3 block">{blog.date}</span>
                      <Link href={`/blogs/${blog.slug}`} className="text-xl sm:text-2xl text-gray-700 dark:text-gray-100 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-colors">
                        {blog.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Certifications Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/10] via-[rgb(var(--secondary))/5] to-[rgb(var(--primary))/10] rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8 sm:mb-12">
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-[rgb(var(--primary))]" />
                  <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))]">
                    Certifications
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-700 dark:text-gray-100 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-colors">
                          {cert.title}
                        </div>
                        <div className="text-[rgb(var(--secondary))] dark:text-[rgb(var(--secondary))] text-lg sm:text-xl">
                          by {cert.issuer}
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}