import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const alt = 'Projects — Ratnesh Maurya';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return buildOgImage({
    title: 'Projects',
    subtitle: 'Open-source tools, web apps & backend systems',
    breadcrumb: 'Projects',
  });
}
