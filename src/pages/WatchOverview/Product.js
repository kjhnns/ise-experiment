import React from 'react'
import styled from 'styled-components'
import { themePx, themeGet } from '../../util/style'

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

const Image = styled.img`
width: 208px;
height: 208px;
`;


const Title = styled.div`
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
font-size: 18px;
line-height: 18px;
font-weight: 600;
color: #04293a;
font-family: 'Roboto',sans-serif;
text-align: right;
`;

function formatPrice(price) {
    return price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2); 
};

const Product = props => (
    <Wrapper>
        <Image src={"http://localhost:8000/products/watch"+props.info.id+".jpg"} />
        <Title>{props.info.name}</Title>
        <Price>{formatPrice(props.info.price)} €</Price>
    </Wrapper>
    );
    

export default Product;