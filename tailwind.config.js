/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'vignette': 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)',
            },
            keyframes: {
                flicker: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.95' },
                    '25%, 75%': { opacity: '0.85' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                invertColors: {
                    '0%': { filter: 'invert(0)' },
                    '50%': { filter: 'invert(1)' },
                    '100%': { filter: 'invert(0)' },
                },
            },
            animation: {
                'flicker': 'flicker 3s linear infinite',
                'fadeIn': 'fadeIn 1s ease-in',
                'invertColors': 'invertColors 0.2s linear infinite',
            },
        },
    },
    plugins: [],
};