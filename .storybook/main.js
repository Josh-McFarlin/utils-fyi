module.exports = {
  addons: [
    "@storybook/preset-typescript",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: /\.stories\.tsx?$/,
        },
        loaderOptions: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false,
          },
        },
        enforce: "pre",
      },
    },
    "@storybook/addon-docs",
  ],
};
