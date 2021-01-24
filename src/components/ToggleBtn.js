import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styled, { css } from "styled-components";

const ToggleBtn = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <ShowHideIcon onClick={() => setShow(!show)} show={show} />
      <ContentContainer show={show}>{children}</ContentContainer>
    </>
  );
};

export default ToggleBtn;

const ShowHideIcon = styled(IoIosArrowUp)`
  padding: 5px;
  ${(props) =>
    props.show &&
    css`
      transform: rotate(180deg);
    `};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.show &&
    css`
      display: none;
    `}
`;
