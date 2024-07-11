import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'regal-blue': '#446381',
			},
			fontWeight: {
				medium: '500',
			},
			margin: {
				auto: '0px auto',
			},
		},
	},
	plugins: [],
};
export default config;
