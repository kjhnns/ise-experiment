import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from '../layouts/theme'
import Persona from "../components/Persona";



export default () => (
  <ThemeProvider theme={theme}>
    <Persona />
  </ThemeProvider>
);

