import React, { useState } from "react";
import styled from "styled-components";

const Repair = ({ repairInfo, setRepairInfo }) => {
  const saveRepairInfo = (event) => {
    const {
      target: { value },
    } = event;
    setRepairInfo(value);
  };
  return (
    <>
      <RepaiarTextContaier>
        <RepairTitle>수리내역</RepairTitle>
      </RepaiarTextContaier>
      <RepairContainer>
        <RepairInput
          value={repairInfo}
          onChange={saveRepairInfo}
          wrap="hard"
          placeholder="ex) 범퍼교환"
        />
      </RepairContainer>
    </>
  );
};

export default Repair;

const RepaiarTextContaier = styled.div`
  width: 95%;
  margin-top: 10px;
`;

const RepairContainer = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
`;

const RepairTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
`;

const RepairInput = styled.textarea`
  background-color: #e5e5e5;
  padding: 10px;
  width: 100%;
  height: 100px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
`;
