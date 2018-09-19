import React from 'react'
import styled from 'styled-components'

import Product from './Product'
import LoadingProduct from './LoadingProduct'
import products from './products.json';


import Layer from './Layer'


const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1250px;
  padding: 0;
  margin: 0;
  justify-content: center;
  filter: ${props => (props.blur ? 'blur('+props.blur+')' : '0')};
`

const HeaderBar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background: #000;
    z-index: 10;
    color: #fff;
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
        <Body>
            {this.state.showLayer && 
                <Layer 
                    onCloseHandler={() => this.setState({showLayer:false}) } 
                    reciprocity={reciprocity}
                    socialProof={socialProof}
                    />}
            <Wrapper blur={this.state.showLayer ? '5px': false}>
            <HeaderBar>Watch24</HeaderBar>
            {products.map(product => (
                product.id === 94 ?
                <Product key={product.id} info={product} onClickHandler={this.showLayer} />
                :
                <Product key={product.id} info={product} onInViewport={this.showLayer} onClickHandler={this.showLayer} />
            ))}
            {loadingDummies.map((a,i) => (
                <LoadingProduct key={i} />
            ))}
            </Wrapper>
        </Body>
      )
    }
  }
  
  export default WatchOverview;
  