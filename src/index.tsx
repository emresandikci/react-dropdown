import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from 'react-jss';
import { defaultTheme } from 'utils';
import global from 'jss-plugin-global';
import { jss } from 'react-jss';

jss.use(global());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
