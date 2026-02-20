import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const alt = 'Now — Ratnesh Maurya';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return buildOgImage({
    title: "What I'm doing now",
    subtitle: 'Current focus, learning & life — updated February 2026',
    breadcrumb: 'Now',
  });
}
