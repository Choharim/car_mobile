import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button";

const ResetSave = ({ state, setState, saveTime, setSaveTime }) => {
  const saveState = (event) => {
    const {
      target: { name },
    } = event;

    setState(name);
    if (name === "save") {
      const date = new Date();
      setSaveTime(
        `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`
      );
    }
  };

  return (
    <>
      <ResetSaveContainer>
        <ResetBtn
          name="reset"
          round
          color={state === "reset"}
          onClick={saveState}
        >
          초기화
        </ResetBtn>
        <IntermediSaveBtn
          name="save"
          round
          color={state === "save"}
          onClick={saveState}
        >
          중간저장
        </IntermediSaveBtn>
      </ResetSaveContainer>
      {saveTime && (
        <IntermediSaveTime>{saveTime} 임시저장 되었습니다</IntermediSaveTime>
      )}
    </>
  );
};

export default ResetSave;

const ResetSaveContainer = styled.div`
  width: 95%;
  margin-top: 15px;
  display: flex;
`;

const ResetBtn = styled(Button)`
  width: 50%;
  height: 40px;
  margin-right: 5px;
`;

const IntermediSaveBtn = styled(Button)`
  width: 50%;
  height: 40px;
  margin-left: 5px;
`;

const IntermediSaveTime = styled.p`
  width: 100%;
  text-align: center;
  color: #b8b8b8;
`;
