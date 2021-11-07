const defaultTheme = require('tailwindcss/defaultTheme');
const mediaQueries = require('./theme/media-queries.json');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			...mediaQueries
		},
		fontFamily: {
			serif: ['ui-serif', 'Georgia'],
			sans: [
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Open Sans',
				'Helvetica Neue',
				'sans-serif'
			],
			mono: ['ui-monospace', 'SFMono-Regular']
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
