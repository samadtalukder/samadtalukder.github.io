/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ['"Poppins"', "sans-serif"],
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in forwards',
                slideUp: 'slideUp 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                slideUp: {
                    '0%': {transform: 'translateY(100px)', opacity: '0'},
                    '100%': {transform: 'translateY(0)', opacity: '1'},
                },
            },
        },
    },
    utilities: {
        '.animation-delay-300': {
            'animation-delay': '300ms',
        },
        '.animation-delay-500': {
            'animation-delay': '500ms',
        },
        '.animation-delay-700': {
            'animation-delay': '700ms',
        },
    },

}