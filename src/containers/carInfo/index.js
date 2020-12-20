import React from "react";
import Accident from "./_fragments/Accident";
import styled from "styled-components";
import Button from "../../components/button/Button";

const CarInfoContainer = () => {
  return (
    <InfoContainer>
      <InfoTitle>중고차</InfoTitle>
      <Accident />
      <Button color="#315676">판매 등록하기</Button>
    </InfoContainer>
  );
};

export default CarInfoContainer;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 10px 0;
`;
