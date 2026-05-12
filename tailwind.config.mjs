/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#D1D1D1',
        navy: '#1A1A2E',
        ink: '#1A1A2E',
        body: '#1A1A2E',
        teal: '#0F6478',
        'teal-deep': '#0F3D4A',
        'teal-pale': '#EDF4F5',
        'teal-pill': '#D5E5E8',
        'teal-tag': '#C5DDE2',
        offwhite: '#FFFFFF',
        muted: '#6B6B7A',
        // Per-section card backgrounds
        'card-featured': '#DBE6E8',
        'card-featured-border': '#C7D6D9',
        'card-current': '#CFE0E3',
        'card-projects': '#EAE1D3',
        'card-projects-border': '#D8CDB8',
        'card-writing': '#E8DCD8',
        'card-writing-border': '#D7C8C3',
        'card-experience': '#E5E8EA',
        'card-experience-border': '#D2D7DB',
        'card-personal': '#DEE5DA',
        'card-personal-border': '#C6D1BE',
        'contact-row': '#E8EEEF',
        'contact-hover': '#C8D9DC',
        // Dark teal for Projects cards
        'teal-dark-border': '#0A5260',
        'teal-mid': '#1E7A8E',
        'teal-light': '#A8C5CA',
        'ice-pale': '#DCE9EB',
      },
      boxShadow: {
        card: '0 1px 3px rgba(26, 26, 46, 0.08)',
        'card-dark': '0 2px 6px rgba(15, 100, 120, 0.15)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Calibri', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        wider2: '0.18em',
      },
    },
  },
  plugins: [],
};
