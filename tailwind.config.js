module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#6B46C1',
            secondary: '#805AD5',
            accent: '#9F7AEA',
            background: '#FAF5FF',
            text: '#2D3748'
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif']
          }
        },
      },
      plugins: [],
    }
