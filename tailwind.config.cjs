/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#201A30',
				textColor: '#0CF3E1',
				colorFocus: '#38304D',
				submitButton: 'rgba(12, 243, 225, 0.8)'
		},
		fontFamily: {
			'monserrat': ['Monserrat', 'sans-serif'],
		},
	},
},
	plugins: [],
}
