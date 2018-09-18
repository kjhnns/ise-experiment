import React from 'react'
import styled from 'styled-components'
import { themePx, themeGet } from '../../util/style'
import HeadLine from '../../components/HeadLine'
import Button from '../../components/Button'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: ${themePx('space.3')};
  width: ${themePx('space.8')};
  background: #FAFAFA;
`

const Description = styled.div`
  margin: ${themePx('space.3')};
  background: #ccc;
  flex: display;
  flex: 1;
  color: ${themeGet('colors.text')};
  background: ${themeGet('colors.gray.9')};
  padding: ${themePx('space.3')};
`



export default (props) => (
        <Hero>
          <HeadLine>{props.headline}</HeadLine>
          <Description>{props.description}</Description>
          <Button href="/page-2">Next</Button>
        </Hero>
      )