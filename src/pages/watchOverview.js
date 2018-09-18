import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from '../layouts/theme'
import WatchOverview from "../components/WatchOverview";



export default () => (
  <ThemeProvider theme={theme}>
    <WatchOverview reciprocity={true} socialproof={true} />
  </ThemeProvider>
);

