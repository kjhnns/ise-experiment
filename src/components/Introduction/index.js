import React from 'react'
import styled from 'styled-components'
import { themePx, themeGet } from '../../util/style'
import HeadLine from '../../components/HeadLine'
import Link from 'gatsby-link'

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

// const Button = styled(Link)`
// display: ${props => (props.block ? 'flex' : 'inline-flex')};
// width: ${props => props.block && '100%'};
// cursor: pointer;
// justify-content: center;
// align-items: center;
// height: ${props => (props.height ? props.height : themePx('space.4'))};
// font-size: 13px;
// font-weight: 600;
// letter-spacing: 0.2px;
// border-radius: ${themePx('radii.2')};
// text-decoration: none;
// background: ${colors.primary};
// color: ${themeGet('colors.white')};
// box-shadow: 0px 4px 8px rgba(47, 39, 60, 0.2);

// &:hover {
//   background: ${colors.primaryLighter};
// }
// `;


export default (props) => (
        <Hero>
          <HeadLine>{props.headline}</HeadLine>
          <Description>{props.description}</Description>
          <Link to="/watchOverview/">Next</Link>
        </Hero>
      )