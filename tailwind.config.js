/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: "#100F5C",
        primaryred: "#CE2E33",
        secondaryblue: "#54C0FB",
        secondaryred: "#FE8156",
        grey: "#F3F4FC",
        orange: "#FE8156",
        buttonred: "#FF4F5B",
      },
      screens: {
        "2xl": { max: "1536px" },
        // => @media (max-width: 1535px) { ... }
        warehousecard: { max: "1440px" },

        xl: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "640px" },
        belowsm: { min: "640px" },

        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        "bg-image-1": "url('/loginbg.svg')",
      },
      boxShadow: {
        profile: "0px 0px 5px 1px rgba(16, 15, 92, 0.25)",
      },
    },
  },
  plugins: [],
};
