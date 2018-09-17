import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from './theme'
import WatchOverview from "./WatchOverview";



export default () => (
  <ThemeProvider theme={theme}>
    <WatchOverview  />
  </ThemeProvider>
);

