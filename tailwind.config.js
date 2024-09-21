/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'hsl(var(--accent))',
        'onAccent': 'hsl(var(--on-accent))',
        'background': 'hsl(var(--background))',
        'error': 'hsl(var(--error))',
        'primary': 'hsl(var(--primary))',
        'text': 'hsl(var(--text))',
        'trans-gray': 'hsl(var(--trans-gray))',
        'text-sc': 'hsl(var(--text-sc))',
      },
      fontSize: {
        sm: '0.800rem',
        base: '1rem',
        xl: '1.250rem',
        '2xl': '1.563rem',
        '3xl': '1.954rem',
        '4xl': '2.442rem',
        '5xl': '3.053rem',
      },
      borderRadius: {
        'sm': '5px',
        'm': '10px',
        'c': '12px',
      },
      cursor: {
        'custom': 'url(\'/public/Cursors/Rectangle 16.png\')',
      },
      strokeWidth: {
        'ma': '1.5px'
      }
    }
  },
  plugins: [],
}