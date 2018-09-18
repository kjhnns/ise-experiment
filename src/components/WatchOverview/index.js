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
  background: #f2f4f5;
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

var loadingDummies = Array.apply(null, { length: 5 })

class WatchOverview extends React.Component {
    state = { showLayer: false }
    render() {
      return (
        <Body>
            {this.state.showLayer && <Layer />}
            <Wrapper blur={this.state.showLayer ? '5px': false}>
            {products.map(product => (
                product.id === 94 ?
                <Product key={product.id} info={product} />
                :
                <Product key={product.id} info={product} onInViewport={() => {
                    if(!this.state.showLayer) {
                        this.setState({showLayer:true})
                    }
                }} />
            ))}
            {loadingDummies.map((a,i) => (
                <LoadingProduct key={i} />
            ))}
            </Wrapper>
        </Body>
      )
    }
  }
  
  export default WatchOverview
  