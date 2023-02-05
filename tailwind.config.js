/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/Home/Home.js",
    "./src/Components/Reusables/Story.js",
    "./src/Components/Reusables/Navbar.js",
    "./src/Components/Reusables/Footer.js",
    "./src/Components/Search/Search.js",
    "./src/Components/Reusables/NotFound.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange-color": "#fe6601",
        "main-orange-color-1": "#ff742b",
        "main-background-color": "#f7f7ef",
        "main-text-color": "#130101",
        "heading-text-color": "#393936",
        "sub-heading-text-color": "#958e91",
        "link-text-color": "#9e9aa5",
      },
    },
  },
  plugins: [],
};
