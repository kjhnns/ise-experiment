import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from '../layouts/theme'
import Watch24 from "../components/Watch24";



export default () => (
  <ThemeProvider theme={theme}>
    <Watch24  />
  </ThemeProvider>
);

