module.exports = {
  plugins: [
    require("tailwindcss"), 
    require('autoprefixer'),
    require("postcss-preset-env"),
    // require("@fullhuman/postcss-purgecss")({
    //   content: [
    //     './styleguide/components/**/*.js',
    //     './styleguide/components/**/*.css',
    //     './pages/*.js'
    //   ]
    // })
  ]
};
