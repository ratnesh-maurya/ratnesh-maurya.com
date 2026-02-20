import Portfolio from '@/components/Portfolio';
import { fetchBlogPosts } from '@/lib/blog';

export const revalidate = 3600;

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Ratnesh Maurya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is a Software Development Engineer from India specialising in backend engineering with Go and Elixir. He builds scalable distributed systems, cloud-native applications, and AI-powered backend solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Ratnesh Maurya do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is a backend engineer who builds scalable systems, microservices architectures, RAG-based AI assistants, Kubernetes controllers, and secure APIs. He has experience with high-traffic fintech platforms, defence data infrastructure, and cloud-native tooling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Ratnesh Maurya from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is from Sutanpur, India. He completed his B.Tech in Computer Science from Dr. APJ Abdul Kalam Technical University, Kanpur, and currently works in Gurugram.',
      },
    },
    {
      '@type': 'Question',
      name: 'What programming languages does Ratnesh Maurya use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya primarily uses Go (Golang) and Elixir for backend development, TypeScript for full-stack web applications, and Python for data pipelines and AI integrations. He also writes SQL and has experience with C++ and JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What certifications does Ratnesh Maurya hold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is an AWS Certified Solutions Architect — Associate (Oct 2023), and also holds the LFD121: Developing Secure Software certification from the Linux Foundation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What companies has Ratnesh Maurya worked at?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is currently a Software Development Engineer at Initializ (Aug 2023 – present), where he has worked on defence data lakes, RAG AI systems, fintech platforms, and Kubernetes infrastructure. He previously interned at EMSEC Pvt. Ltd. (Mar 2023 – Aug 2023).',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Ratnesh Maurya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Ratnesh Maurya by email at ratneshmaurya2311@gmail.com, or connect on LinkedIn at linkedin.com/in/ratnesh-maurya, or on GitHub at github.com/ratnesh-maurya.',
      },
    },
    {
      '@type': 'Question',
      name: 'What projects has Ratnesh Maurya built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya has built Personal Tracker (habit/expense tracker PWA), Rehabify (de-addiction centre management platform), JSONic (JSON utility tool), mdconverter (Markdown converter), npm-compare (package comparison tool), and Unzip N Open (Go CLI tool). All projects are available on his GitHub.',
      },
    },
  ],
};

export default async function Home() {
  const posts = await fetchBlogPosts(6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <Portfolio posts={posts} projectImages={{}} />
    </>
  );
}
