module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Rajdhani',
      secondary: 'Inter',
      tertiary: 'Aldrich',
      special : 'Orbitron'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        blue: '#00C2CB',
        red: '#FF5757',
        yellow: '#FFDE59',
        grey: '#2A2E30',
        primary: '#000000',
        accent: '#ff5757',
      },
      backgroundImage: {
        about: "url('./assets/about.png')",
        team: "url('./assets/mehdi.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
