import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const alt = 'GitHub — Ratnesh Maurya';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return buildOgImage({
    title: 'GitHub',
    subtitle: 'Open-source contributions & repositories',
    breadcrumb: 'GitHub',
  });
}
