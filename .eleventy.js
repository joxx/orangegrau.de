module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget('./src/css');
  eleventyConfig.addPassthroughCopy("./src/fonts/*.woff2");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
