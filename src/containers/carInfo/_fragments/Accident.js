import React from "react";
import Button from "../../../components/button/Button";
import styled from "styled-components";

const Accident = ({ isAccident, setIsAccident, dataArray, dataObj }) => {
  const saveAccidentInfo = (event) => {
    const {
      target: { name },
    } = event;
    if (Object.keys(dataObj).length === 0) {
      setIsAccident(name);
    } else {
      setIsAccident(dataObj.isAccident);
    }
  };

  return (
    <>
      <AccidentTextContainer>
        <AccidentTitle>사고이력</AccidentTitle>
      </AccidentTextContainer>
      <AccidentContainer>
        <IsAccidentBtn
          round
          name="isAccident"
          color={isAccident === "isAccident"}
          onClick={saveAccidentInfo}
        >
          사고이력 있음
        </IsAccidentBtn>
        <IsNotAccidentBtn
          round
          name="isNotAccident"
          color={isAccident === "isNotAccident"}
          onClick={saveAccidentInfo}
        >
          사고이력 없음
        </IsNotAccidentBtn>
      </AccidentContainer>
    </>
  );
};

export default Accident;

const AccidentTextContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
`;

const AccidentContainer = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
`;

const AccidentTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
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
