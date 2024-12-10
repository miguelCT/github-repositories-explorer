export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    parameters: {
      actions: { argTypesRegex: '^on.*' },
    },
  },
  a11y: { disable: true },
};
export const tags = ["autodocs"];
