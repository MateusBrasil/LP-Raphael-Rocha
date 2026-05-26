/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink:    '#0A0A0A',
        ink2:   '#111111',
        ink3:   '#161616',
        cream:  '#F5F0E8',
        cream2: 'rgba(245,240,232,0.75)',
        cream3: 'rgba(245,240,232,0.45)',
        gold: {
          DEFAULT: '#C9A84C',
          dark:    '#A8882C',
          light:   '#E5C870',
          dim:     'rgba(201,168,76,0.10)',
          border:  'rgba(201,168,76,0.25)',
        },
        line:  'rgba(245,240,232,0.08)',
        line2: 'rgba(201,168,76,0.20)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.02em',
        btn:     '0.08em',
        eyebrow: '0.22em',
      },
      lineHeight: {
        tight2: '1.0',
        snug2:  '1.15',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
