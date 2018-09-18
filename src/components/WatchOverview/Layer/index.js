import React from 'react'
import styled from 'styled-components'
import Hero from './Hero';
import Welcome from './Welcome';
import Registration from './Registration';

const Layer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
`

class LayerExport extends React.Component {
    state = { showWelcome: true, showRegistration: false }
    render() {
      return (
        <Layer>
            <Hero>
                {this.state.showWelcome && 
                <Welcome onClickHandler={() => { this.setState({showWelcome: false, showRegistration: true}) }} /> }
                {this.state.showRegistration && 
                <Registration onClickHandler={() => { this.setState({showWelcome: false, showRegistration: false}) }} /> }
                
            </Hero>
        </Layer>
      )
    }
  }


export default LayerExport;
