import React from 'react'
import styled from 'styled-components'

import Product from './Product'
import LoadingProduct from './LoadingProduct'
import products from './products.json';


import Layer from './Layer'


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
  background: #f2f4f5;
`;


const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1250px;
  padding: 0;
  margin: 0;
  padding-top: 80px;
  justify-content: center;
  filter: ${props => (props.blur ? 'blur(5px)' : 'inherit')};
`;

const HeaderBar = styled.div`
    position: absolute;
    top:0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    height: 80px;
    width: 100%;
    background: #3f3f3f;
    z-index: 10;
    color: #fff;
    filter: ${props => (props.blur ? 'blur(5px)' : 'inherit')};
`;

const Logo =styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
width: 1230px;

font-family: Roboto;
font-style: normal;
font-weight: 300;
line-height: 40px;
font-size: 28px;
text-align: center;
letter-spacing: 5px;

color: #fefefe;
`;

var loadingDummies = Array.apply(null, { length: 5 })

class WatchOverview extends React.Component {
    state = { showLayer: false }

    showLayer = () => {
        if(!this.state.showLayer) {
            this.setState({showLayer:true});
        }
    }

    render() {
      const {reciprocity, socialProof} = this.props;
      return (
        <Wrapper>
            {this.state.showLayer && 
                <Layer 
                    onCloseHandler={() => this.setState({showLayer:false}) } 
                    reciprocity={reciprocity}
                    socialProof={socialProof}
                    />}
            <HeaderBar blur={this.state.showLayer}><Logo>WATCH24</Logo></HeaderBar>
            <ProductList blur={this.state.showLayer}>
                {products.map(product => (
                    product.id === 94 ?
                    <Product key={product.id} info={product} onClickHandler={this.showLayer} />
                    :
                    <Product key={product.id} info={product} onInViewport={this.showLayer} onClickHandler={this.showLayer} />
                ))}
                {loadingDummies.map((a,i) => (
                    <LoadingProduct key={i} />
                ))}
            </ProductList>
        </Wrapper>
      )
    }
  }
  
  export default WatchOverview;
  