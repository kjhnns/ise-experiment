import React from 'react'
import styled from 'styled-components'
import Voucher from './Voucher';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items:center;
  height: 80%;
  padding-top: 20px;
`

const Headline = styled.h1`

font-family: Roboto;
font-style: normal;
font-weight: 300;
line-height: 40px;
font-size: 28px;
text-align: center;

color: #3F3F3F;

`;


const Button =styled.a`
text-decoration: none;
width: 229px;
height: 49px;
background: rgba(232, 195, 72, 0.86);
box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 18px;
text-align: center;
color: #383838;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content:center;
align-items:center;

&:active {
    background: rgba(255, 214, 79, 0.86);
    box-shadow: 0px 5px 39px rgba(0, 0, 0, 0.25);
  }

  &:hover {

    box-shadow: 0px 5px 39px rgba(0, 0, 0, 0.25);
  }
`;

export default (props) => (
    <Wrapper>
        <Headline>We like to welcome you</Headline>
        <Voucher />
        <Button onClick={props.onClickHandler}>Next</Button>
    </Wrapper>
)
