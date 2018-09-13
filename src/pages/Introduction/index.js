import React from "react";
import styled from "styled-components";
import { themeGet } from '../../util/style';

const Hero = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 3em;
`;

const Description = styled.div`
    margin: 2em;
    background: #ccc;
    color: ${themeGet('colors.text')};
`;


const HeadLine = styled.h1`
  color: ${themeGet('colors.blue')};
`;

const Introduction = props => (
    <Hero>
      <HeadLine>{props.headline}</HeadLine>
      <Description>{props.description}</Description>
    </Hero>
  );


export default () => (
  <Introduction headline="Hallo Welt" description="Hallooooo" />
);