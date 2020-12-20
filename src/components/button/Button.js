import React from "react";
import styled, { css } from "styled-components";

const ButtonComponet = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponet;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #315676;
  color: #315676;
  background-color: transparent;
  font-weight: 700;
  font-size: 0.9rem;

  ${(props) =>
    props.round &&
    css`
      border-radius: 5px;
    `}
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
      color: white;
    `}
`;
