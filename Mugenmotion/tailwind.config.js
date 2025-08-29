/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "neon-green": "#39FF14",
                "neon-pink": "#FF6EC7",
            },
        },
    },
    plugins: [],
};

