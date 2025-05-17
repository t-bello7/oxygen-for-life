import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px"
        },
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
                signika: ['var(--font-signika)', 'Signika', 'sans-serif']
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    md: '2rem',
                    lg: '4rem'
                }
            },
            colors: {
                gray: {
                    DEFAULT: '#8E8E8E',
                    1: '#BFBFBF',
                    2: '#F6F6F6'
                },
                primary: {
                    DEFAULT: '#A2F71D'
                },
                secondary: {
                    DEFAULT: '#EED741'
                },
                dark: {
                    DEFAULT: '#141414'
                },
                white: {
                    DEFAULT: '#FFFFFF'
                }

            }
        },
    },
    plugins: [],
};
export default config;
