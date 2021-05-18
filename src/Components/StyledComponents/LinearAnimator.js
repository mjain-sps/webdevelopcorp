import styled, { css, keyframes } from "styled-components";

const linearKF = (percent) => keyframes`
  from{
    width: 0%
  }
  to{
    width: ${percent}%
  }
  `;

const LinearStyledComponent = styled.div`
  height: 3px;
  background-color: var(--orange);
  width: 0%;
  margin: 0px 0px 8px 0px;

  ${(props) =>
    props.linearTrigger &&
    css`
      animation: ${linearKF(props.percent)} 3s ease-in-out 0s 1 forwards normal;
      color: black;
    `}
`;

export default LinearStyledComponent;
