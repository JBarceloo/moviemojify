/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#201A30',
				colorButton: '#0CF3E1',
				colorFocus: '#38304D'
		},
		fontFamily: {
			'monserrat': ['Monserrat', 'sans-serif'],
		},
	},
},
	plugins: [],
}
