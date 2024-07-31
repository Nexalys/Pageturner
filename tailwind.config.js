/* @type {import('tailwindcss').Config} */
module.exports = { 
	content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
                'accent/20': 'hsl(var(--accent-20))',
            },
            fontSize: {
                sm: '0.750rem',
                base: '1rem',
                xl: '1.333rem',
                '2xl': '1.777rem',
                '3xl': '2.369rem',
                '4xl': '3.158rem',
                '5xl': '4.210rem',
            },
            borderRadius: {
                'sm': '10px',
                'm': '15px',
                'c': '20px',
            },
            cursor: {
                'custom': 'url(\'/public/Cursors/Rectangle 16.png\')',
            }
        }
	}, 
	plugins: [], 
}
