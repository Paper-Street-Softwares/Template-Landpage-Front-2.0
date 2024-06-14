/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0376A0", // Com primária (escura)
        secondary: "#FFFFFF", // Cor primária (clara, sobressai sobre a primária)
        lighter: "#21A202",
        darker: "00131B",
        tertiary: "#0189BB", // Links
        quaternary: "#636363", // Cinza neutro -> Parágrafos
        quinary: "#F6F6F6 ", // Com primária bem clara ou cinza -> Bg de seções
        paragraphLight: "#636363", // Cinza neutro -> Parágrafos
      },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
        secondFont: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        paragraph1: "0.625rem", // 10px
        paragraph2: "0.75rem", // 12px
        paragraph3: "0.875rem", // 14px
        paragraph4: "1rem", // 16px
        paragraph5: "1.125rem", // 18px
        title1: "1.25rem", // 20px
        title2: "1.375rem", // 22px
        title3: "1.5rem", // 24px
        title4: "1.875rem", // 30px
        title5: "2.25rem", // 36px
        title6: "3rem", // 48px
        title7: "3.4375rem", // 55px
      },
      spacing: {
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      screens: {
        phone1: "320px",
        phone2: "375px",
        phone3: "425px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-5%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-5%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 1s ease",
        "slide-up": "slideUp 1s ease",
      },
    },
  },
  plugins: [],
};
