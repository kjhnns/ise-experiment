import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from '../layouts/theme'
import Introduction from "../components/Introduction";



export default () => (
  <ThemeProvider theme={theme}>
    <Introduction 
      headline="Hallo Welt" 
      description="Wir führen eine Befragung durch!"  />
  </ThemeProvider>
);

