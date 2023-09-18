/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#232329",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
