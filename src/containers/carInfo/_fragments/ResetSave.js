import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../../components/button/Button";

const ResetSave = ({
  state,
  setState,
  saveTime,
  setSaveTime,
  immediateSave,
  immediateRefresh,
}) => {
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
      immediateSave();
    } else if (name === "reset") {
      immediateRefresh();
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
        <>
          <IntermediSaveTime>{saveTime} 임시저장 되었습니다.</IntermediSaveTime>
          <ModalContainer>{saveTime}에 임시저장 되었습니다.</ModalContainer>
        </>
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

const ModalFadeOut = keyframes`
   from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`;

const ModalContainer = styled.p`
  width: 95%;
  padding: 10px 0;
  margin: 0;
  border-radius: 5px;
  text-align: center;
  background-color: #373737;
  color: white;
  font-size: 0.8rem;
  animation: ${ModalFadeOut} 1s ease forwards;
`;
