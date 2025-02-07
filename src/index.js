import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
    media: {
      phone : '(max-width:799px)',
    }
}
const Global = createGlobalStyle`
position: relative;

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
            <App />
            <Global/>
    </ThemeProvider>
);


