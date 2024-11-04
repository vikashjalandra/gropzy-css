/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            green: {
                custom: '#6CBF00',
                customLight: '#F3FFDA',
                lightGreen: '#FAFFEF'
            },
            blue: {
                custom: '#223354'
            },
            yellow: {
                customLight: '#FFFAF1'

            },
            gray: {
                custom: "#D7D7D7",
                custom2: "#292929"
            },
            orange: {
                custom: '#FFF6E5'
            }
        }
    }
},
  plugins: [],
}