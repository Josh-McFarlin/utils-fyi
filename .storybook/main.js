module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
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
            singleQuote: false,
          },
        },
        enforce: "pre",
      },
    },
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
};
