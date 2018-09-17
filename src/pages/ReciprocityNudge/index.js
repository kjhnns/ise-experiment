import React from 'react'
import styled from 'styled-components'
import { themePx, themeGet } from '../../util/style'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: ${themePx('space.3')};
  width: ${themePx('space.8')};
  background: #FAFAFA;
`



export default (props) => (
        <Hero>
            hallo Welt
        </Hero>
      )