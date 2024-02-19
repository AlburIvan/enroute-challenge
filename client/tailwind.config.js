/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		{
      pattern: /bg-(.*)-(200|300|500|800|900)/,
			variants: ['hover','peer-checked'],
    },
	],
	theme: {
    fontFamily: {
			'grotesk': ['Space Grotesk', 'sans-serif'],
		},
    extend: {},
  },
  plugins: [],
}

