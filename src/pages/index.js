import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from '../layouts/theme'
import Introduction from "../components/Introduction";



export default () => (
  <ThemeProvider theme={theme}>
    <Introduction 
      headline="Dear Participant" 
      description="Imagine being on a web-based platform for luxury watches. You are doing research on watches you like to buy (in the future). The provider intends to improve services and needs you to evaluate changes implemented on the platform. During browsing watches a layer wil pop up and requires inputs from you. Afterwards you are asked to answer a questionaire regarding your experience while interacting on the platform. The whole process will take less than 10 minutes of your time. Thank you for your attendance!"  />
  </ThemeProvider>
);

