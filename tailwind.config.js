/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      body: ['"Avenir Next"']
    },
    extend: {
      lineHeight: {
        "text-line-height": "34px",
      },
      colors: {
        primaryColor: "#432779",
        secondaryColor: "#F3FCF5",
        infoColor: "#FA9917",
        buttonColor: "#2AAF4A",
        modalColor: "#463E52",
        modalTextColor: "#0E0817",
        lightGreen: "rgb(165, 222, 165)",
        newBackground: "#060733",
        gradientBackground: "rgba(9, 9, 10, 1)",
        lightBlue: "#23667A",
        darkBlue: "#121321"
      },

      backgroundImage: {
        // Desktop Heros
        "desktop_home_deepening_financial_inclusion": "url('/public/assets/website/images/hero-img/desktop_home_deepening_financial_inclusion.jpeg')",
        "desktop_home_centre_of_excellence": "url('/public/assets/website/images/hero-img/desktop_home_centre_of_excellence.jpeg')",
        "desktop_home_empowering_the_ecosystem": "url('/public/assets/website/images/hero-img/desktop_home_empowering_the_ecosystem.jpeg')",
        "desktop_home_enhancing_knowledge": "url('/public/assets/website/images/hero-img/desktop_home_enhancing_knowledge.jpeg')",

        // Mobile Heros
        "mobile_home_deepening_financial_inclusion": "url('/public/assets/website/images/hero-img/mobile_home_deepening_financial_inclusion.jpeg')",
        "mobile_home_centre_of_excellence": "url('/public/assets/website/images/hero-img/mobile_home_centre_of_excellence.jpeg')",
        "mobile_home_empowering_the_ecosystem": "url('/public/assets/website/images/hero-img/mobile_home_empowering_the_ecosystem.jpeg')",
        "mobile_home_enhancing_knowledge": "url('/public/assets/website/images/hero-img/mobile_home_enhancing_knowledge.jpeg')",
        "media_hero_desktop": "url('/public/assets/website/images/hero-img/desktop_media.jpg')",
        "media_hero_mobile": "url('/public/assets/website/images/hero-img/mobile_media.jpg')",

        "about-hero-desktop": "url('/public/assets/website/images/hero-img/about-hero-bg-desktop.png')",
        "about-hero-mobile": "url('/public/assets/website/images/hero-img/about-hero-bg-mobile.png')",
        "contact-hero-desktop": "url('/public/assets/website/images/hero-img/desktop_contact.jpg')",
        "contact-hero-mobile": "url('/public/assets/website/images/hero-img/mobile_contact.jpg')",
        "agent-hero-desktop": "url('/public/assets/website/images/hero-img/desktop_agent.jpeg')",
        "agent-hero-mobile": "url('/public/assets/website/images/hero-img/mobile_agent.jpeg')",
        "footer-image-desktop": "url('/public/assets/website/images/hero-img/Footer-Image-Desktop.png')",
        "footer-image-mobile": "url('/public/assets/website/images/hero-img/Footer-Image-Mobile.png')",
        "mobile_nav_bg": "url('/public/assets/website/images/hero-img/Mobile-Background.png')",

        // NEWS
        "news_desktop_img": "url('/public/assets/website/images/news/news_details.png')",
        "news_mobile_img": "url('/public/assets/website/images/news/news_details_mobile.png')",

        // GALLERY
        "mobile_img_1": "url('/public/assets/website/images/gallery/gallery_mobile_1.png')",
        "mobile_img_2": "url('/public/assets/website/images/gallery/gallery_mobile_2.png')",
        "mobile_img_3": "url('/public/assets/website/images/gallery/gallery_mobile_3.png')",
        "mobile_img_4": "url('/public/assets/website/images/gallery/gallery_mobile_4.png')",
      },

      screens: {
        sm: '512px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
    }
  },
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio")
  ]
};
