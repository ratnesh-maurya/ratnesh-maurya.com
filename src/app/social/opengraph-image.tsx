import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image';

export const alt = 'Social — Ratnesh Maurya on X & LinkedIn';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return buildOgImage({
    title: 'Social',
    subtitle: 'X (Twitter) & LinkedIn — posts, updates & professional profile',
    breadcrumb: 'Social',
  });
}
