/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Barlow: ['Barlow','sans-serif'],
        Bellefair: ['Bellefair','serif'],
      },
    colors:{
        'primary': '#D0D6F9',
    },
    backgroundImage:{
      'home-desktop': "url('/public/Images/background-home-desktop.jpg')",
      'home-tablet': "url('/public/Images/background-home-tablet.jpg')",
      'home-mobile': "url('/public/Images/background-home-mobile.jpg')",
      "technology-desktop": "url(/public/Images/background-technology-desktop.jpg)",
      "technology-tablet": "url(/public/Images/background-technology-tablet.jpg)",
      "technology-mobile" : 'url(/public/Images/background-technology-mobile.jpg)',
      "crew-desktop": "url(/public/Images/background-crew-desktop.jpg)",
      "crew-tablet": "url(/public/Images/background-crew-tablet.jpg)",
      "crew-mobile" : 'url(/public/Images/background-crew-mobile.jpg)',
      "destination-desktop": "url(/public/Images/background-destination-desktop.jpg)",
      "destination-tablet": "url(/public/Images/background-destination-tablet.jpg)",
      "destination-mobile" : 'url(/public/Images/background-destination-mobile.jpg)',
    
    }
    },
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "home-bg": "url(/public/Images/background-home-desktop.jpg)",
//         "home-tablet": "url(/public/Images/background-home-tablet.jpg)",
//         "home-mobile" : 'url(/public/Images/background-home-mobile.jpg)',
//         "technology-bg": "url(/public/Images/background-technology-desktop.jpg)",
//         "technology-tablet": "url(/public/Images/background-technology-tablet.jpg)",
//         "technology-mobile" : 'url(/public/Images/background-technology-mobile.jpg)',
//         "crew-bg": "url(/public/Images/background-crew-desktop.jpg)",
//         "crew-tablet": "url(/public/Images/background-crew-tablet.jpg)",
//         "crew-mobile" : 'url(/public/Images/background-crew-mobile.jpg)',
//         "destination-bg": "url(/public/Images/background-destination-desktop.jpg)",
//         "destination-tablet": "url(/public/Images/background-destination-tablet.jpg)",
//         "destination-mobile" : 'url(/public/Images/background-destination-mobile.jpg)',
//         "logo-hamburger" : 'url(/public/Images/icon-hamburger.svg)',
//       },

//       fontFamily: {
//         barlow: ["Barlow", "sans-serif"],
//         condensed: ["Barlow", "Condensed", "sans-serif"],
//         belle: ["Bellefair", "serif"],
//       },
//       colors: {
//         "light-black": "rgba(255, 255, 255, 0.04)",
//         "home-head": "#D0D6F9",
//       },
//     },
//   },
//   plugins: [],
// };

