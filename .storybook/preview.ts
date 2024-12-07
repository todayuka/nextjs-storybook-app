import type { Preview } from "@storybook/react";
//preview.tsにglobals.css入れ忘れてた
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
