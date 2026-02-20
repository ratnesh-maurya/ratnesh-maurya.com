export interface BlogPost {
  title: string;
  desc: string;
  href: string;
  date: string;
  year: string;
  category: string;
}

function extractCdata(text: string): string {
  return text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

function between(src: string, open: string, close: string): string {
  const start = src.indexOf(open);
  if (start === -1) return '';
  const end = src.indexOf(close, start + open.length);
  if (end === -1) return '';
  return src.slice(start + open.length, end).trim();
}

export async function fetchBlogPosts(limit = 6): Promise<BlogPost[]> {
  try {
    const res = await fetch('https://blog.ratnesh-maurya.com/feed.xml', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const xml = await res.text();

    // Split into <item> blocks
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const posts: BlogPost[] = [];
    let match: RegExpExecArray | null;

    while ((match = itemRegex.exec(xml)) !== null && posts.length < limit) {
      const block = match[1];

      const title    = extractCdata(between(block, '<title>',       '</title>'));
      const desc     = extractCdata(between(block, '<description>', '</description>'));
      const href     = between(block, '<link>',    '</link>');
      const pubDate  = between(block, '<pubDate>', '</pubDate>');
      const category = extractCdata(between(block, '<category>',    '</category>'));

      const date = pubDate ? new Date(pubDate) : new Date();
      const year = date.getFullYear().toString();

      if (title && href) {
        posts.push({ title, desc, href, date: pubDate, year, category });
      }
    }

    return posts;
  } catch {
    return [];
  }
}
