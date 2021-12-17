import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { CoProvider, ColorSchemeProvider } from '@co-design/core';

export const parameters = { layout: 'fullscreen', darkMode: { current: 'light' } };

function ThemeWrapper(props: any) {
  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <CoProvider theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }} withGlobalStyles withNormalizeCSS>
        {props.children}
      </CoProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
