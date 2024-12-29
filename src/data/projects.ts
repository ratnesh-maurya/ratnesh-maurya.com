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

export const projects: Project[] = [
  {
    id: "rehabify",
    title: "Rehabify",
    description: "Addiction Recovery Platform",
    longDescription:
      "A comprehensive platform aimed at improving addiction recovery services with features for tracking progress and connecting with support groups.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/username/rehabify",
      live: "https://rehabify.demo",
    },
    image: "/ratn.png",
  },
  {
    id: "unzip-n-open",
    title: "Unzip N Open",
    description: "CLI File Management Tool",
    longDescription:
      "A command-line interface tool that simplifies file management for developers with intuitive commands and efficient operations.",
    tags: ["Go", "CLI", "File System"],
    links: {
      github: "https://github.com/username/unzip-n-open",
    },
    image: "/placeholder.svg",
  },
  {
    id: "secret-operator",
    title: "Secret Operator",
    description: "Secure Key Management",
    longDescription:
      "A Kubernetes operator for managing secrets and sensitive information with enhanced security protocols.",
    tags: ["Go", "Kubernetes", "Security"],
    links: {
      github: "https://github.com/username/secret-operator",
      live: "https://docs.secret-operator.dev",
    },
    image: "/placeholder.svg",
  },

];
