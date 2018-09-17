import styled, { keyframes } from 'styled-components';
import { themePx, themeGet } from '../../util/style'

const placeHolderShimmer = keyframes`
  0% {
      background-position: -468px 0;
  }
  100% {
      background-position: 468px 0;
  }
`;

export default styled.div`
  width: ${props => (props.width ? props.width : '100px')};
  height: ${props => (props.height ? props.height : '16px')};
  margin-bottom: ${props =>
    props.mb !== undefined ? props.mb : themePx('space.2')};
  margin-top: ${props => (props.mt !== undefined ? props.mt : '0')};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1) 8%,
    rgba(0, 0, 0, 0.2) 15%,
    rgba(0, 0, 0, 0.1) 33%
  );
  background-size: 800px 104px;
  position: relative;
`;
