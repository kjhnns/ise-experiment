import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Welcome from './Welcome'
import Registration from './Registration'

const Layer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const Redirect = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 300;
line-height: 40px;
font-size: 28px;
text-align: center;
margin-top: 60px;
color: #3f3f3f;
`;

class LayerExport extends React.Component {
  state = { showWelcome: true, showRegistration: false, showRedirect: false };
  render() {
    const {onCloseHandler } = this.props;
    return (
      <Layer>
        <Hero>
          {this.state.showWelcome && (
            <Welcome
              onClickHandler={() => {
                this.setState({ showWelcome: false, showRegistration: true, showRedirect: false })
              }}
            />
          )}
          {this.state.showRegistration && (
            <Registration
              onSubmitHandler={() => {
                this.setState({ showWelcome: false, showRegistration: false, showRedirect: true })
                window.location.href="http://google.de";
              }}
              onCloseHandler={() => {
                this.setState({ showWelcome: false, showRegistration: false, showRedirect: true })
                window.location.href="http://amazon.de";
              }}
            />
          )}
          {this.state.showRedirect && (
            <Redirect>Redirecting ...</Redirect>
          )}
        </Hero>
      </Layer>
    )
  }
}

export default LayerExport
