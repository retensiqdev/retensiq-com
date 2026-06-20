/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── Font family ──────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      // ── Typography scale ─────────────────────────────────────────────────────
      fontSize: {
        // Hero (homepage main headline)
        'hero':      ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '600' }],
        // Sub-page heroes
        'page-hero': ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '600' }],
        // Section headings (h2)
        'section-title': ['clamp(1.625rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.018em', fontWeight: '600' }],
        // Eyebrow labels
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
        // Body sizes
        'body-lg':  ['1.125rem', { lineHeight: '1.75' }],
        'body':     ['1rem',     { lineHeight: '1.75' }],
        'body-sm':  ['0.875rem', { lineHeight: '1.625' }],
        'caption':  ['0.75rem',  { lineHeight: '1.5' }],
      },

      // ── Spacing tokens ───────────────────────────────────────────────────────
      spacing: {
        'section':    '6rem',   // py-section  — standard section vertical padding
        'section-lg': '8rem',   // py-section-lg — hero sections
        'content':    '3.5rem', // mt-content  — heading → content gap
        'card':       '1.5rem', // p-card      — card internal padding
      },

      // ── Colors ───────────────────────────────────────────────────────────────
      colors: {
        // Light surface (security page article)
        surface: '#FFFFFF',
        // Institutional dark tones
        navy: {
          700: '#2A3A4C',
          800: '#1E2A38',
        },
        // Assess accent palette (blue-focused)
        assess: {
          50:  'rgba(96,165,250,0.05)',
          100: 'rgba(96,165,250,0.10)',
          glow: 'rgba(37,99,235,0.20)',
          border: 'rgba(147,197,253,0.20)',
          text: 'rgba(147,197,253,0.75)',
        },
        // Prep accent palette (emerald-focused)
        prep: {
          50:  'rgba(52,211,153,0.05)',
          100: 'rgba(52,211,153,0.10)',
          glow: 'rgba(16,185,129,0.18)',
          border: 'rgba(110,231,183,0.20)',
          text: 'rgba(110,231,183,0.75)',
        },
      },

      // ── Shadows ──────────────────────────────────────────────────────────────
      boxShadow: {
        soft:   '0 20px 60px rgba(0,0,0,0.35)',
        card:   '0 4px 24px rgba(0,0,0,0.20)',
        subtle: '0 2px 8px rgba(0,0,0,0.12)',
      },

      // ── Max widths ───────────────────────────────────────────────────────────
      maxWidth: {
        'site': '72rem',    // 1152px — site max-width
        'prose-lg': '48rem', // 768px — wide text blocks
        'prose':    '40rem', // 640px — standard prose
        'prose-sm': '32rem', // 512px — narrow text
      },

      // ── Animations ───────────────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%':   { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.5s ease forwards',
        'fade-in':  'fade-in 0.4s ease forwards',
        'slide-in': 'slide-in 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};
