/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(210, 30%, 95%)',
        accent: 'hsl(320, 80%, 60%)',
        primary: 'hsl(210, 70%, 55%)',
        surface: 'hsl(0, 0%, 100%)',
        textPrimary: 'hsl(210, 30%, 15%)',
        textSecondary: 'hsl(210, 30%, 45%)',
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '6px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(0, 0%, 0%, 0.08)',
      },
      spacing: {
        lg: '24px',
        md: '12px',
        sm: '8px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-purple': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'pink-purple': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [],
};
