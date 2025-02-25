export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  