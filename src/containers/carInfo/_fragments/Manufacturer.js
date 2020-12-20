import React from "react";
import styled, { css } from "styled-components";
import Button from "../../../components/button/Button";

const Manufacturer = () => {
  return (
    <ManufacturerContainer>
      <div style={{ display: "flex", width: "100%" }}>
        <ManufacturerTitle>제조사</ManufacturerTitle>
      </div>
      <CarBtn round>현대</CarBtn>
      <CenterCarBtn round>르노 삼성</CenterCarBtn>
      <CarBtn round>기아</CarBtn>
      <CarBtn round>쌍용</CarBtn>
      <CenterCarBtn round>GM 대우</CenterCarBtn>
      <CarBtn round>기타</CarBtn>
    </ManufacturerContainer>
  );
};

export default Manufacturer;

const ManufacturerContainer = styled.div`
  width: 95%;
  height: 150px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const ManufacturerTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
`;

const CarBtn = styled(Button)`
  width: 31.5%;
  height: 30%;
`;

const CenterCarBtn = styled(Button)`
  width: 33%;
  height: 30%;
  margin: 0 10px 10px;
`;
