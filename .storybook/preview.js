import React from "react";
import addons from "@storybook/addons";
import { addParameters, addDecorator } from "@storybook/react";
import "@storybook/addon-console";
import "../public/static/styles/Components.scss";
import "../public/static/styles/Colors.scss";

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[1].kind === "Welcome") {
        return -1;
      }

      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true });
    },
  },
});

addParameters({
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
});

addParameters({
  darkMode: {
    stylePreview: true,
  },
});

const channel = addons.getChannel();
let storybookIsDark = false;
channel.on("DARK_MODE", () => {
  storybookIsDark = true;
});

const ThemeWrapper = (props) => {
  const [isDark, setDark] = React.useState(storybookIsDark);

  React.useLayoutEffect(() => {
    channel.on("DARK_MODE", setDark);

    return () => channel.removeListener("DARK_MODE", setDark);
  }, []);

  return (
    <div id="storybook-wrapper" className={isDark ? "dark-mode" : "light-mode"}>
      {props.children}
    </div>
  );
};

addDecorator((renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>);
