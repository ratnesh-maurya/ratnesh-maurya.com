import { Github, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Ratnesh Maurya",
  description: "Ratnesh Maurya's Portfolio showcasing his skills, projects, education, and experience in software engineering.",
};

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
  },
  {
    period: "03/2023 — 07/2024",
    role: "Software Developer Intern",
    company: "@ EMSEC Pvt. Ltd.",
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
    title: "Architectural Design for a Ride App such as OLA, UBER, RAPIDO",
    slug: "Architectural-Design-for-a-Ride-App-such-as-OLA-UBER-RAPIDO",
    date: "Jul 30, 2024",
  },
  {
    title: "Amazon SNS for Cost Reduction and Message Delivery Assurance in Startups",
    slug: "Amazon-SNS-for-Cost-Reduction-and-Message-Delivery-Assurance-in-Startups",
    date: "Dec 10, 2023",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto  px-2 font-sans shadow-2xl dark:bg-gray-950/70 shadow-black p-4 backdrop-blur-xl rounded-xl mr-2 ml-2">

      <div >
        <h1 className="text-3xl font-bold text-teal-600 dark:text-gray-200">Ratnesh Maurya</h1>
      </div>
      <div className="px-2">

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">Hey there! 👋</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I am a <span className="font-semibold">Software Development Engineer</span>, passionate about backend development and cloud-native technologies. Currently I am working at {" "}
            <a
              href="https://www.linkedin.com/company/initializ/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              Initializ
            </a>
            , where  I collaborate with <a
              href="https://www.loannetwork.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              Loannetwork
            </a> to enhance their digital lending platform by integrating services like NSDL, Aadhaar, and PAN verification. I also built a secure Key Management System with client-side encryption and designed a Kubernetes Controller. Previously, I interned at{" "}
            <a
              href="https://www.linkedin.com/company/emsec/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              EMSEC Pvt. Ltd.
            </a>
            , developing scalable RESTful APIs and data scraping frameworks.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Find me on</span>
            <a href="https://x.com/ratnesh_maurya_"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-orange-600 font-bold">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ratnesh-maurya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 font-bold">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/ratnesh-maurya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 font-bold">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-40 flex-shrink-0 text-muted-foreground">{exp.period}</div>
                <div className="flex flex-col md:flex-row items-start gap-2">
                  <div className="font">{exp.role}</div>
                  <div className="text-muted-foreground">{exp.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Technologies I have worked with</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {Object.entries(tech).map(([category, items]) => (
              <div key={category} className="flex flex-col md:flex-row items-start gap-2">
                <h3 className="font-semibold mb-1 underline ">{category}:</h3>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-2">
                <span className="text-muted-foreground">{blog.date}</span>
                <Link href={`/blogs/${blog.slug}`}>
                  <p className="underline hover:decoration-teal-600 hover:dark:decoration-orange-400">{blog.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>

  );
}