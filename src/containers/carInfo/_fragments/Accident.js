import React, { useState } from "react";
import Button from "../../../components/button/Button";
import styled, { css } from "styled-components";

const Accident = () => {
  const [isAccident, setIsAccident] = useState(false);

  return (
    <AccidentContainer>
      <AccidentTitle>사고이력</AccidentTitle>
      <IsAccidentBtn round onClick={() => setIsAccident(true)}>
        사고이력 있음
      </IsAccidentBtn>
      <IsNotAccidentBtn round onClick={() => setIsAccident(false)}>
        사고이력 없음
      </IsNotAccidentBtn>
    </AccidentContainer>
  );
};

export default Accident;

const AccidentContainer = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const AccidentTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
  position: absolute;
  top: 0;
  left: 0;
`;

const IsAccidentBtn = styled(Button)`
  width: 50%;
  height: 40px;
  margin-right: 5px;
`;

const IsNotAccidentBtn = styled(Button)`
  width: 50%;
  height: 40px;
  margin-left: 5px;
`;
