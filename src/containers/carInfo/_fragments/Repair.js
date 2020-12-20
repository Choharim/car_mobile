import React, { useState } from "react";
import styled from "styled-components";

const Repair = () => {
  const [repairInfo, setRepairInfo] = useState("");

  const saveRepairInfo = (event) => {
    const {
      target: { value },
    } = event;
    setRepairInfo(value);
  };
  return (
    <RepairContainer>
      <RepairTitle>수리내역</RepairTitle>
      <RepairInput
        value={repairInfo}
        onChange={saveRepairInfo}
        wrap="hard"
      ></RepairInput>
    </RepairContainer>
  );
};

export default Repair;

const RepairContainer = styled.div`
  width: 95%;
  height: 100px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const RepairTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
`;

const RepairInput = styled.textarea`
  background-color: #e5e5e5;
  margin-top: 10px;
  padding: 10px;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
`;
