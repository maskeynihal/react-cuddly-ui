const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: "/.s[ca]ss$/",
      use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
