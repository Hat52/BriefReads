/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				typography: '#EEEEEE',
				primary: '#222831',
				secondary: '#393E46',
				outline: '#00ADB5'
			}
		}
	},
	plugins: []
};
