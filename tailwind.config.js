// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This maps 'font-archivo' to the Archivo font family
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        media768: "769px",
        media340: "340px",
        "below-sm": { max: "639px" },
      },
    },
  },
};
