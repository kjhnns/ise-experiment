import React from 'react'
import styled from 'styled-components'



const SocialProof = styled.div`
padding: 10px 0;
width: 460px;
height: 154px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
`;

const Circle = styled.div`
border: 5px solid #BE8F1F;
box-sizing: border-box;
width: 126px;
height:126px;
border-radius: 63px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
`;

const Proof = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: 22px;
font-size: 25px;
text-align: center;
color: #BE8F1F;
`;

const Mute = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 300;
margin-top: 5px;
line-height: 20px;
font-size: 18px;
text-align: center;
color: #727272;
`;

const Info = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: 34px;
font-size: 24px;
color: #515151;
margin-left: 15px;
`;

export default (props) => (
    <SocialProof>
    <Circle>
        <Proof>4 million</Proof>
        <Mute>visitors</Mute>
    </Circle>
    <Info>registered a new account<br/><u>this month</u></Info>
    </SocialProof>
)
