import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from './theme'
import ReciprocityNudge from "./ReciprocityNudge";



export default () => (
  <ThemeProvider theme={theme}>
    <ReciprocityNudge  />
  </ThemeProvider>
);

