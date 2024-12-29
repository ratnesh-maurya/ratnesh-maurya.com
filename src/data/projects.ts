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
    tags: ["TypeScript", "React", "Node.js", "Tailwind-css" ,"Go"],
    links: {
      github: "https://github.com/Ratnesh-Team/Rehabify",
      live: "https://rehabify.ratn.tech/",
    },
    image: "/rehabify.png",
  },
  {
    id: "unzip-n-open",
    title: "Unzip N Open",
    description: "CLI File Management Tool",
    longDescription:
      "A command-line interface tool that simplifies file management for developers with intuitive commands and efficient operations.",
    tags: ["Go", "CLI"],
    links: {
      github: "https://github.com/ratnesh-maurya/Unzip_N_Open",
    },
    image: "/cli.png",
  },
  {
    id: "secret-operator",
    title: "Secret Operator",
    description: "Secure Key Management",
    longDescription:
      "A Kubernetes operator for managing secrets and sensitive information with enhanced security protocols.",
    tags: ["Go", "Kubernetes", "Security"],
    links: {
      github: "https://github.com/initializ/secrets-operator",
    },
    image: "/operator.png",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "Real-time Exchange Rates",
    longDescription:
      "A currency converter application that provides real-time exchange rates and supports multiple currencies for accurate conversions.",
    tags: ["TypeScript", "React", "Tailwind-css"],
    links: {
      github: "https://github.com/ratnesh-maurya/currency-converter ",
      live: "https://currency.ratn.tech/",
    },
    image: "/currency-converter.png",
  },
];
