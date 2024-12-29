/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			textShadow: {
				white: "0 0 10px rgba(255, 255, 255, 0.8)",
				whitelg: "0 0 15px rgba(255, 255, 255, 0.8)",
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"]
			}
		},
	},
	plugins: [
		require('tailwindcss-textshadow'),
	],
}

