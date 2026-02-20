import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const alt = 'Uses — Ratnesh Maurya';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return buildOgImage({
    title: 'Tools & Stack',
    subtitle: 'The languages, tools and gear Ratnesh Maurya uses daily',
    breadcrumb: 'Uses',
  });
}
