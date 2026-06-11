/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ash-black": "#242829",
        "m-black": "#1E1E1E",
        "m-yellow": "#FACD66",
        "ash-text": "#ffffff4d",
        "ash-l-text": "#ffffffcc",
      },
    },
  },
  plugins: [],
};

//
// m-black: musica black
// ash-l-text: ash-light-text
