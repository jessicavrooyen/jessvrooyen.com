import Typography from 'typography';


const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Fira Serif', 'serif'],
  bodyFontFamily: ['Roboto Condensed', 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 700,
  googleFonts: [
    {
      name: 'Fira Serif',
      styles: ['700'],
    },
    {
      name: 'Roboto Condensed',
      styles: ['400'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
