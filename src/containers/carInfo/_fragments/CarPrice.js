import React from "react";
import styled from "styled-components";

const CarPrice = () => {
  return (
    <>
      <CarPriceTextContainer>
        <CarPriceTitle>가격 제시하기</CarPriceTitle>
        <CarPriceText>희망 가격을 제시해 주세요</CarPriceText>
      </CarPriceTextContainer>
      <CarPriceContainer>
        <CarPriceInput type="number" />
      </CarPriceContainer>
    </>
  );
};

export default CarPrice;

const CarPriceTextContainer = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const CarPriceContainer = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
`;

const CarPriceTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
`;

const CarPriceText = styled.p`
  margin: 0;
  color: #b8b8b8;
  font-size: 0.8rem;
`;

const CarPriceInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #b8b8b8;
  width: 100%;
  height: 25px;
  padding-bottom: 5px;
`;
