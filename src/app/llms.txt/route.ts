import { fetchBlogPosts } from '@/lib/blog';

export const revalidate = 3600;

export async function GET() {
  const posts = await fetchBlogPosts(20);

  const postLines = posts
    .map((p) => `- [${p.title}](${p.href}): ${p.desc}`)
    .join('\n');

  const body = `# Ratnesh Maurya

> Personal portfolio and technical blog of Ratnesh Maurya — Software Development Engineer from India specialising in Go, Elixir, PostgreSQL, Kubernetes, and cloud-native backend systems. Currently building at Initializ.

## Portfolio

- [Home](https://ratnesh-maurya.com/): About, experience, projects, and writing.
- [Now](https://ratnesh-maurya.com/now): What I'm currently working on and thinking about.
- [Social](https://ratnesh-maurya.com/social): X (Twitter) and LinkedIn — posts and profile links.
- [Gallery](https://ratnesh-maurya.com/photos): Personal photos.
- [Résumé](https://ratnesh-maurya.com/resume.pdf): Full CV in PDF.

## Projects

- [Personal Tracker](https://tracker.ratnesh-maurya.com/): Habit, expense, sleep, and study tracker with MUI X Charts dashboards. Built with Next.js and TypeScript.
- [JSONic](https://jsonic.ratnesh-maurya.com): JSON parser, formatter, and validator for developer productivity.
- [mdconverter](https://mdconverter.ratnesh-maurya.com): Real-time Markdown converter with live preview.
- [npm-compare](https://npm-compare.ratnesh-maurya.com/): Side-by-side npm package comparison tool.
- [Rehabify](https://rehabify.ratnesh-maurya.com/): De-addiction centre management platform built with Next.js, Golang, and PostgreSQL.

## Blog — Ratn Labs

Technical writing on systems thinking, backend architecture, and cloud engineering.

${postLines}

## Social & Contact

- [GitHub](https://github.com/ratnesh-maurya): Open-source work and project source code.
- [LinkedIn](https://www.linkedin.com/in/ratnesh-maurya): Professional profile.
- [X / Twitter](https://x.com/ratnesh_maurya_): Thoughts and updates.
- [Blog](https://blog.ratnesh-maurya.com): Full archive of technical articles.
- Email: ratneshmaurya2311@gmail.com
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
