import React from 'react';
 
import { Preview } from '@storybook/react';
import Providers from '../src/Providers'




export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: { disable: true }
};
export const tags = ["autodocs"];


const preview: Preview = {
  parameters,
  decorators: [
    (Story) => (
      <Providers>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Providers>
    ),
  ],
};
 
export default preview;
