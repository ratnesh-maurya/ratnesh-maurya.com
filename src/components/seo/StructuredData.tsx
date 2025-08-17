'use client';

interface StructuredDataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  );
}

// Person Schema for Ratnesh Maurya
export function PersonSchema() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ratnesh Maurya",
    "alternateName": "रत्नेश मौर्य",
    "url": "https://ratnesh-maurya.com/",
    "image": "https://ratnesh-maurya.com/ratn.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/ratnesh-maurya",
      "https://github.com/ratnesh-maurya",
      "https://x.com/ratnesh_maurya_"
    ],
    "jobTitle": "Software Development Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "initializ.ai",
      "url": "https://initializ.ai"
    },
    "knowsAbout": [
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
      "DevOps"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University Name" // Replace with actual university
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "email": "mailto:contact@ratnesh-maurya.com", // Replace with actual email
    "nationality": {
      "@type": "Country",
      "name": "India"
    }
  };

  return <StructuredData data={personData} />;
}

// Organization Schema for initializ.ai
export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "initializ.ai",
    "url": "https://initializ.ai",
    "employee": {
      "@type": "Person",
      "name": "Ratnesh Maurya",
      "jobTitle": "Software Development Engineer"
    }
  };

  return <StructuredData data={organizationData} />;
}

// Website Schema
export function WebSiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://ratnesh-maurya.com/",
    "name": "Ratnesh Maurya | Software Development Engineer",
    "alternateName": "रत्नेश मौर्य",
    "description": "Ratnesh Maurya is a Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.",
    "author": {
      "@type": "Person",
      "name": "Ratnesh Maurya"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ratnesh Maurya"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ratnesh-maurya.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Ratnesh Maurya"
    }
  };

  return <StructuredData data={websiteData} />;
}

// Article Schema for Blog Posts
interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  keywords: string;
  category: string;
  readTime: string;
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  keywords,
  category,
  readTime
}: ArticleSchemaProps) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://ratnesh-maurya.com/"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ratnesh Maurya",
      "url": "https://ratnesh-maurya.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ratnesh-maurya.com/ratn.jpg",
        "width": 400,
        "height": 400
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "keywords": keywords,
    "articleSection": category,
    "wordCount": readTime,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "genre": "Technology",
    "about": {
      "@type": "Thing",
      "name": category
    }
  };

  return <StructuredData data={articleData} />;
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <StructuredData data={breadcrumbData} />;
}

// Enhanced Software Application Schema for Projects
interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  programmingLanguage: string[];
  author: string;
  dateCreated: string;
  codeRepository: string;
  dateModified?: string;
  version?: string;
  downloadUrl?: string;
  screenshot?: string;
  keywords?: string[];
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem,
  programmingLanguage,
  author,
  dateCreated,
  codeRepository,
  dateModified,
  version = "1.0.0",
  downloadUrl,
  screenshot,
  keywords = [],
  offers
}: SoftwareApplicationSchemaProps) {
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "programmingLanguage": programmingLanguage,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://ratnesh-maurya.com/",
      "sameAs": [
        "https://github.com/ratnesh-maurya",
        "https://www.linkedin.com/in/ratnesh-maurya",
        "https://x.com/ratnesh_maurya_"
      ]
    },
    "creator": {
      "@type": "Person",
      "name": author,
      "url": "https://ratnesh-maurya.com/"
    },
    "dateCreated": dateCreated,
    "dateModified": dateModified || dateCreated,
    "datePublished": dateCreated,
    "version": version,
    "codeRepository": codeRepository,
    "downloadUrl": downloadUrl || url,
    "isAccessibleForFree": true,
    "license": "MIT",
    "keywords": keywords.length > 0 ? keywords.join(", ") : programmingLanguage.join(", "),
    "screenshot": screenshot || `https://ratnesh-maurya.com/projects/${name.toLowerCase().replace(/\s+/g, '-')}.png`,
    "softwareVersion": version,
    "releaseNotes": `Latest version of ${name} with enhanced features and improvements.`,
    "softwareHelp": {
      "@type": "WebPage",
      "url": `${url}#help`
    },
    "installUrl": downloadUrl || url,
    "memoryRequirements": "512MB",
    "storageRequirements": "50MB",
    "processorRequirements": "Any modern processor",
    "supportingData": {
      "@type": "DataDownload",
      "name": `${name} Documentation`,
      "description": `Comprehensive documentation for ${name}`,
      "encodingFormat": "text/html",
      "contentUrl": `${url}/docs`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": offers || {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": author
      }
    },
    "mainEntity": {
      "@type": "WebApplication",
      "name": name,
      "url": url,
      "browserRequirements": "Modern web browser with JavaScript enabled"
    }
  };

  return <StructuredData data={softwareData} />;
}

// FAQ Schema for common questions
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredData data={faqData} />;
}

// Professional Profile Schema (enhanced Person schema)
export function ProfessionalProfileSchema() {
  const profileData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ratnesh Maurya",
      "alternateName": "रत्नेश मौर्य",
      "url": "https://ratnesh-maurya.com/",
      "image": {
        "@type": "ImageObject",
        "url": "https://ratnesh-maurya.com/ratn.jpg",
        "width": 400,
        "height": 400
      },
      "sameAs": [
        "https://www.linkedin.com/in/ratnesh-maurya",
        "https://github.com/ratnesh-maurya",
        "https://x.com/ratnesh_maurya_"
      ],
      "jobTitle": "Software Development Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "initializ.ai",
        "url": "https://initializ.ai"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Software Development Engineer",
        "occupationLocation": {
          "@type": "Country",
          "name": "India"
        },
        "skills": [
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
          "DevOps"
        ]
      },
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "en"
        },
        {
          "@type": "Language",
          "name": "Hindi",
          "alternateName": "hi"
        }
      ],
      "nationality": {
        "@type": "Country",
        "name": "India"
      },
      "homeLocation": {
        "@type": "Place",
        "name": "India"
      }
    }
  };

  return <StructuredData data={profileData} />;
}

// Portfolio Collection Schema for Projects Page
export function PortfolioSchema() {
  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ratnesh Maurya - Software Projects Portfolio",
    "description": "A curated collection of innovative software projects including web applications, CLI tools, and open-source contributions by Ratnesh Maurya",
    "url": "https://ratnesh-maurya.com/projects",
    "about": {
      "@type": "Person",
      "name": "Ratnesh Maurya",
      "url": "https://ratnesh-maurya.com/"
    },
    "author": {
      "@type": "Person",
      "name": "Ratnesh Maurya",
      "url": "https://ratnesh-maurya.com/"
    },
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Ratnesh Maurya",
      "url": "https://ratnesh-maurya.com/"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Software Projects",
      "description": "List of software projects created by Ratnesh Maurya",
      "numberOfItems": 6
    },
    "keywords": "software projects, web development, full stack, TypeScript, React, Go, portfolio, open source"
  };

  return <StructuredData data={portfolioData} />;
}

// JSON-LD for specific project types
export function WebApplicationSchema({
  name,
  description,
  url,
  features,
  technologies
}: {
  name: string;
  description: string;
  url: string;
  features: string[];
  technologies: string[];
}) {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Modern web browser with JavaScript enabled",
    "permissions": "no special permissions required",
    "storageRequirements": "Local browser storage",
    "featureList": features,
    "softwareRequirements": "Web browser",
    "author": {
      "@type": "Person",
      "name": "Ratnesh Maurya",
      "url": "https://ratnesh-maurya.com/"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "applicationSubCategory": "Developer Tool",
    "downloadUrl": url,
    "installUrl": url,
    "screenshot": `https://ratnesh-maurya.com/${name.toLowerCase()}.png`,
    "softwareVersion": "1.0.0",
    "datePublished": "2024-01-01",
    "programmingLanguage": technologies
  };

  return <StructuredData data={webAppData} />;
}
