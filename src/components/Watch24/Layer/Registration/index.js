import React from 'react'
import styled from 'styled-components'
import SocialProof from './SocialProof'
import closeImg from './close.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`

const Headline = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  font-size: 28px;
  text-align: center;
  color: #3f3f3f;
`

const Form = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`

const ButtonRegister = styled.a`
  width: 306px;
  height: 44px;
  background: #3f3f3f;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-align: center;

  cursor: pointer;

  text-transform: uppercase;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #7d7d7d;
  }
`

const ButtonClose = styled.a`
width: auto;
background: none;
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
text-align: center;
cursor: pointer;
color: #3f3f3f;
margin: 18px 0;
font-size: 16px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
padding: 4px;
&:hover {
  color: #7d7d7d;
}
`;



class Registration extends React.Component {
  render() {
    const { onCloseHandler, onSubmitHandler, socialProof } = this.props

    return (
      <Wrapper>
        <Headline>Create a free user account</Headline>
        {socialProof && <SocialProof />}
        <Form>
          <ButtonRegister onClick={onSubmitHandler}>Register</ButtonRegister>
          <ButtonClose onClick={onCloseHandler}>Do Not Register</ButtonClose>
        </Form>
      </Wrapper>
    )
  }
}

export default Registration;