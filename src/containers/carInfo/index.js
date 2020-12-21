import React, { useState } from "react";
import Accident from "./_fragments/Accident";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Repair from "./_fragments/Repair";
import Manufacturer from "./_fragments/Manufacturer";
import CarPicture from "./_fragments/CarPicture";

const CarInfoContainer = () => {
  const [save, setSave] = useState(false);

  const saveInfo = () => {
    setSave(true);
  };

  return (
    <InfoContainer>
      <InfoTitle>중고차</InfoTitle>
      <Accident />
      <Repair />
      <Manufacturer />
      <CarPicture />
      <SaveButton color="#315676" onClick={saveInfo}>
        판매 등록하기
      </SaveButton>
    </InfoContainer>
  );
};

export default CarInfoContainer;

const InfoContainer = styled.div`
  width: 100%;
  border: 1px solid #315676;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const InfoTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 10px 0;
  color: #315676;
`;

const SaveButton = styled(Button)`
  width: 100%;
  height: 70px;
  font-size: 1.4rem;
  position: absolute;
  bottom: 0;
`;
