import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../../components/button/Button";

const Manufacturer = ({ manufacturer, setManufacturer, dataObj }) => {
  const manufacData = [
    { valueName: "hyundai", titleName: "현대" },
    { valueName: "samsung", titleName: "르노삼성" },
    { valueName: "kia", titleName: "기아" },
    { valueName: "ssangyong", titleName: "쌍용" },
    { valueName: "daewoo", titleName: "대우" },
    { valueName: "etc", titleName: "기타" },
  ];

  const saveManufac = (event) => {
    const {
      target: { name, checked },
    } = event;
    if (name === "foreign" && checked === false) {
      setManufacturer();
    } else {
      setManufacturer(name);
    }
  };

  return (
    <>
      <ManufacturerTextContainer>
        <ManufacturerTitle>제조사</ManufacturerTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CheckBoxLabel>외제차의 경우 체크하세요</CheckBoxLabel>
          <CarCheckBox
            type="checkbox"
            name="foreign"
            onChange={saveManufac}
            checked={
              dataObj.manufacturer === "foreign"
                ? true
                : manufacturer === "foreign"
                ? true
                : false
            }
          />
        </div>
      </ManufacturerTextContainer>
      <ManufacturerContainer>
        {manufacData.map((manufacObj, index) => (
          <CarBtn
            key={index}
            name={manufacObj.valueName}
            onClick={saveManufac}
            color={
              dataObj.manufacturer
                ? dataObj.manufacturer === manufacObj.valueName
                : manufacturer === manufacObj.valueName
            }
          >
            {manufacObj.titleName}
          </CarBtn>
        ))}
      </ManufacturerContainer>
    </>
  );
};

export default Manufacturer;

const ManufacturerTextContainer = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ManufacturerContainer = styled.div`
  width: 95%;
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

const CarCheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

const CheckBoxLabel = styled.p`
  margin: 0;
  color: #b8b8b8;
  font-size: 0.8rem;
`;

const CarBtn = styled(Button)`
  width: 33%;
  height: 40px;
  border-radius: 5px;
`;

const CenterCarBtn = styled(Button)`
  width: 33%;
  height: 40px;
  // margin: 0 10px 10px;
  border-radius: 5px;
`;
