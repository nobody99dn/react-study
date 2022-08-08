const {
  backgroundImage: defaultBackgroundImage
} = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultBackgroundImage,
  ...{
    // eslint-disable-next-line quotes
    login: "url('/images/background.jpg')"
  }
};
