import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

interface OgOptions {
  title: string;
  subtitle: string;
  breadcrumb?: string;   // e.g. "Now" or "Projects"
  accent?: string;       // hex accent — defaults to teal
}

export function buildOgImage({ title, subtitle, breadcrumb, accent = '#14b8a6' }: OgOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #030d0e 0%, #061a1a 50%, #030d0e 100%)',
          padding: '64px',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle, ${accent}22 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}18 0%, transparent 65%)`,
          }}
        />
        {/* Content */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, color: '#475569' }}>
            <span>ratnesh-maurya.com</span>
            {breadcrumb && (
              <>
                <span style={{ color: '#334155' }}>›</span>
                <span style={{ color: accent }}>{breadcrumb}</span>
              </>
            )}
          </div>
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.0,
              color: '#f0fdfa',
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {/* Subtitle */}
          <div style={{ fontSize: 26, color: '#64748b', fontWeight: 400, marginTop: 4 }}>
            {subtitle}
          </div>
          {/* Brand badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 12,
              background: `${accent}14`,
              border: `1px solid ${accent}33`,
              borderRadius: 100,
              padding: '6px 16px',
              alignSelf: 'flex-start',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />
            <span style={{ color: accent, fontSize: 14, fontWeight: 600 }}>Ratnesh Maurya</span>
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
