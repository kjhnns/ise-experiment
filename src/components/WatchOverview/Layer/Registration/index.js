import React from 'react'
import styled from 'styled-components'
import SocialProof from './SocialProof';
import closeImg from './close.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
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
`;

const Button = styled.a`
  width: 306px;
  height: 44px;
  background: #be8f1f;
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
  &:active {
    background: rgba(255, 214, 79, 0.86);
  }
`

const EmailTextInput = styled.input`
  width: 306px;
  height: 44px;
  margin-bottom: 10px;

  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 18px;
  text-align: center;
  &::placeholder {
    color: #a6a6a6;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const CloseWrapper = styled.div`
width: 100%;
text-align: right;
`;
const Close = styled.img`
margin-right: 30px;
margin-top: 20px;
cursor:pointer;

`;


export default props => (
  <Wrapper>
    <CloseWrapper><Close src={closeImg} onClick={props.onCloseHandler} /></CloseWrapper>
    <Headline>Create your user account  </Headline>
      <SocialProof />
    <Form>
      <EmailTextInput placeholder="Your e-mail address" />
      <Button onClick={props.onSubmitHandler}>Register</Button>
    </Form>
  </Wrapper>
)
