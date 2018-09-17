import React from 'react';
import styled from 'styled-components';
import { themePx, themeGet } from '../util/style';

const colors = {
  primary: themeGet('colors.blue'),
  primaryLighter: themeGet('colors.lightblue')
};

const BaseButton = styled.a`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  width: ${props => props.block && '100%'};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : themePx('space.4'))};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  border-radius: ${themePx('radii.2')};
  text-decoration: none;
`;

const RegularButton = styled(BaseButton)`
  background: ${colors.primary};
  color: ${themeGet('colors.white')};
  box-shadow: 0px 4px 8px rgba(47, 39, 60, 0.2);

  &:hover {
    background: ${colors.primaryLighter};
  }
`;

export default ({ children, ...rest }) => {
  return <RegularButton {...rest}>{children}</RegularButton>;
};