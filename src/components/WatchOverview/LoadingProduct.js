import React from 'react'
import styled from 'styled-components'

import LoadingPlaceholder from './LoadingPlaceholder';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
max-width: 208px;
background: #ffffff;
padding: 10px;
margin: 10px;
border: 1px solid #e6eaec;
cursor: pointer;
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);

&:hover {
    border: 1px solid #cecece;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
}
`;

const Image = styled.div`
width: 208px;
height: 208px;
background: #efefef;
`;


const Title = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-between;
font-weight: bold;
width: 100%;
height: 40px;
line-height: 20px;
overflow: hidden;
margin-bottom: 10px;
font-size: 14px;
font-family: 'Roboto',sans-serif;
font-weight: 400;
margin-top:10px;
`;


const Price = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-end;
font-size: 18px;
line-height: 18px;
font-weight: 600;
color: #04293a;
font-family: 'Roboto',sans-serif;
text-align: right;
`;

const EuroSign = styled.span`
padding-left: 10px;
`;

function formatPrice(price) {
    return price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2); 
};

const LoadingProduct = props => (
    <Wrapper>
        <Image src={"http://localhost:8000/products/watch1.jpg"} />
        <Title><LoadingPlaceholder height="14px" width="150px" />
        <LoadingPlaceholder height="14px" width="80px" /></Title>
        <Price><LoadingPlaceholder height="18px" /><EuroSign>€</EuroSign></Price>
    </Wrapper>
    );
    

export default LoadingProduct;