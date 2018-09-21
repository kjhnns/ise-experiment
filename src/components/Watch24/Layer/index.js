import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Welcome from './Welcome'
import Registration from './Registration'

const Layer = styled.div`
  position: fixed;
  z-index: 99;
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
  state = { showWelcome: false, showRegistration: false, showRedirect: false, initialized: false };

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  initialize = (reciprocity) => {
    return { showWelcome: reciprocity, showRegistration: !reciprocity, showRedirect: false, initialized: true };
  }

  componentDidMount() {
    const { reciprocity } = this.props;
    if(!this.state.initialized) {
      this.setState(this.initialize(reciprocity));
    }
  }

  submitForm(textInput) {
    const { reciprocity, socialProof } = this.props;
    this.setState({ showWelcome: false, showRegistration: false, showRedirect: true })
    window.location.href=`http://survey.ise.tu-darmstadt.de/watch24/?act=Xjk7KN2cfgG6E5QVnXxDMxea&d=1&m=${textInput}&ir=${reciprocity}&is=${socialProof}&c=0`;
  }

  closeForm() {
    const { reciprocity, socialProof } = this.props;
    this.setState({ showWelcome: false, showRegistration: false, showRedirect: true })
    window.location.href=`http://survey.ise.tu-darmstadt.de/watch24/?act=Xjk7KN2cfgG6E5QVnXxDMxea&d=0&m=&ir=${reciprocity}&is=${socialProof}&c=1`;
  }


  render() {  
    const { socialProof } = this.props;
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
              socialProof={socialProof}
              onSubmitHandler={this.submitForm}
              onCloseHandler={this.closeForm}
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
