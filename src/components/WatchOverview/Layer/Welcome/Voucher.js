import React from 'react'
import styled from 'styled-components'

import giftImage from './gift.png';


const Voucher = styled.div`
border: 4px solid #BE8F1F;
box-sizing: border-box;
border-radius: 17px;
width: 460px;
height: 154px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
`;

const Info =styled.div` 
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin-left: 10px;
`;

const Title = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: 36px;
font-size: 32px;
color: #3F3F3F;
`;

const Code = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: 300;
line-height: 33px;
font-size: 20px;
text-align: center;
letter-spacing: 0.24em;
color: #000000;
background: #fff;
width: 241px;
height: 43px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
`;


const GiftImage = styled.img`
margin-top: 10px;
margin-left: 10px;
width: 111px;
height: 111px;
`;

export default (props) => (
    <Voucher>
        <GiftImage src={giftImage} />
        <Info>
            <Title>5% voucher code</Title>
            <Code>ILOVEWATCHES</Code>
        </Info>
    </Voucher>
)
