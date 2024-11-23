const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {
            container: {
                center: true,
            },
        },
    },
    plugins: [flowbite.plugin()],
};
