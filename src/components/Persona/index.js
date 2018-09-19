import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 30px;
  width: 600px;
  margin-top: 30px;
  background: #fafafa;
`


const HeadLine = styled.h1`
color: #3f3f3f;
`;


const Description = styled.div`
  margin:10px;
  background: #ccc;
  flex: display;
  flex: 1;
  line-height: 26px;
  color: #3f3f3f;
  background: #fff;
  padding: 10px;
`

const Paragraph = styled.p``

export default () => (
  <Hero>
    <HeadLine>Scenario</HeadLine>
    <Description>
      <Paragraph>
        <i>In the following you find a description of Alex. Please read it carefully and put yourself in the shoes of Alex. </i>
      </Paragraph>
      <Paragraph>
        Alex wants is interested in buying a luxury watch. 
        In the following Alex visits WATCH24 (an e-commerce platform that offers luxury watches) for the first time to browse and discover their offers. 
      </Paragraph>
      <Paragraph>
        Please explore the platform and get a first impression, you will be redirected to a questionaire afterwards to capture your experience. 
      </Paragraph>

    </Description>
    <Link to="/watch24/">Next</Link>
  </Hero>
)
