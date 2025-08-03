// SEO Configuration for Ratnesh Maurya's Portfolio
export const seoConfig = {
  // Basic site information
  siteName: "Ratnesh Maurya Portfolio",
  siteUrl: "https://ratnesh-maurya.com",
  author: {
    name: "Ratnesh Maurya",
    alternateName: "रत्नेश मौर्य",
    email: "contact@ratnesh-maurya.com", // Replace with actual email
    jobTitle: "Software Development Engineer",
    company: "initializ.ai",
    location: "India",
    bio: "Software Development Engineer with expertise in Golang, TypeScript, React, Next.js, AWS, Kubernetes, Docker, and modern web technologies.",
    image: "https://ratnesh-maurya.com/ratn.jpg",
    socialProfiles: {
      linkedin: "https://www.linkedin.com/in/ratnesh-maurya",
      github: "https://github.com/ratnesh-maurya",
      twitter: "https://x.com/ratnesh_maurya_",
    },
    skills: [
      "Software Engineering",
      "Golang",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "AWS",
      "Kubernetes",
      "Docker",
      "Microservices",
      "Backend Development",
      "Cloud Computing",
      "DevOps",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST API",
    ],
  },

  // Default meta tags
  defaultMeta: {
    title: "Ratnesh Maurya - Software Development Engineer | Full Stack Developer",
    description: "Ratnesh Maurya is a Software Development Engineer with expertise in Golang, TypeScript, React, Next.js, AWS, Kubernetes, Docker, and modern web technologies. Explore my portfolio, projects, and technical blog.",
    keywords: [
      "Ratnesh Maurya",
      "रत्नेश मौर्य",
      "Software Engineer",
      "Software Development Engineer",
      "Full Stack Developer",
      "Backend Developer",
      "Cloud Engineer",
      "DevOps Engineer",
      "Golang Developer",
      "TypeScript Developer",
      "React Developer",
      "Next.js Developer",
      "AWS Certified",
      "Kubernetes Expert",
      "Docker Specialist",
      "Microservices Architecture",
      "Portfolio",
      "Tech Blog",
      "Open Source",
      "India",
      "initializ.ai",
    ],
    image: "https://ratnesh-maurya.com/ratn.jpg",
    locale: "en_US",
    type: "website",
  },

  // Social media handles
  social: {
    twitter: "@ratnesh_maurya_",
    linkedin: "ratnesh-maurya",
    github: "ratnesh-maurya",
  },

  // Open Graph defaults
  openGraph: {
    siteName: "Ratnesh Maurya Portfolio",
    locale: "en_US",
    type: "website",
    images: {
      default: {
        url: "https://ratnesh-maurya.com/ratn.jpg",
        width: 1200,
        height: 630,
        alt: "Ratnesh Maurya - Software Development Engineer",
      },
      blog: {
        width: 1200,
        height: 630,
      },
      project: {
        width: 1200,
        height: 630,
      },
    },
  },

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    site: "@ratnesh_maurya_",
    creator: "@ratnesh_maurya_",
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification codes (replace with actual codes)
  verification: {
    google: "your-google-verification-code",
    bing: "your-bing-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Analytics and tracking
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Replace with actual GA4 ID
    googleTagManager: "GTM-XXXXXXX", // Replace with actual GTM ID
    microsoftClarity: "xxxxxxxxx", // Replace with actual Clarity ID
  },

  // Performance and Core Web Vitals
  performance: {
    preconnectDomains: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.credly.com",
      "https://avatars.githubusercontent.com",
      "https://res.cloudinary.com",
      "https://cdn.simpleicons.org",
    ],
    dnsPrefetchDomains: [
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://clarity.microsoft.com",
    ],
  },

  // Structured data defaults
  structuredData: {
    organization: {
      name: "initializ.ai",
      url: "https://initializ.ai",
    },
    breadcrumbBase: "https://ratnesh-maurya.com",
  },

  // Page-specific configurations
  pages: {
    home: {
      title: "Ratnesh Maurya - Software Development Engineer | Full Stack Developer",
      description: "Welcome to Ratnesh Maurya's portfolio. Explore my journey as a Software Development Engineer specializing in Golang, TypeScript, React, AWS, and modern web technologies.",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    blogs: {
      title: "Technical Blog - Ratnesh Maurya",
      description: "Explore technical articles and insights on software engineering, cloud computing, web development, and modern technologies by Ratnesh Maurya.",
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    projects: {
      title: "Software Projects - Ratnesh Maurya",
      description: "Discover the software projects and applications built by Ratnesh Maurya, including web applications, CLI tools, and open-source contributions.",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    gallery: {
      title: "Gallery - Ratnesh Maurya",
      description: "Explore the visual gallery showcasing moments, achievements, and experiences from Ratnesh Maurya's professional journey.",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
  },
};

// Utility functions for SEO
export const generatePageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return seoConfig.defaultMeta.title;
  return `${pageTitle} | ${seoConfig.author.name}`;
};

export const generateCanonicalUrl = (path: string): string => {
  return `${seoConfig.siteUrl}${path}`;
};

export const generateImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith('http')) return imagePath;
  return `${seoConfig.siteUrl}${imagePath}`;
};

// Keywords generator for different content types
export const generateKeywords = (contentType: 'blog' | 'project' | 'page', additionalKeywords: string[] = []): string => {
  const baseKeywords = seoConfig.defaultMeta.keywords;
  const typeSpecificKeywords = {
    blog: ['Technical Blog', 'Software Engineering Blog', 'Programming Tutorial', 'Tech Insights'],
    project: ['Software Project', 'Web Application', 'Open Source', 'GitHub Project'],
    page: ['Portfolio', 'Professional Profile', 'Software Engineer Portfolio'],
  };
  
  return [...baseKeywords, ...typeSpecificKeywords[contentType], ...additionalKeywords].join(', ');
};
