export interface ProjectMeta {
  url: string;
  ogImage: string | null;
}

async function fetchOgImageFor(siteUrl: string): Promise<string | null> {
  try {
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}`;
    const res = await fetch(apiUrl, { next: { revalidate: 86400 } }); // 24-hour cache
    if (!res.ok) return null;
    const data = (await res.json()) as { data?: { image?: { url?: string } } };
    return data?.data?.image?.url ?? null;
  } catch {
    return null;
  }
}

const PROJECT_URLS = [
  'https://tracker.ratnesh-maurya.com/',
  'https://jsonic.ratnesh-maurya.com',
  'https://mdconverter.ratnesh-maurya.com',
  'https://npm-compare.ratnesh-maurya.com/',
  'https://rehabify.ratnesh-maurya.com/',
];

export async function fetchProjectOgImages(): Promise<Record<string, string | null>> {
  const results = await Promise.allSettled(
    PROJECT_URLS.map(async (url) => ({ url, img: await fetchOgImageFor(url) }))
  );

  const map: Record<string, string | null> = {};
  for (const r of results) {
    if (r.status === 'fulfilled') map[r.value.url] = r.value.img;
  }
  return map;
}
