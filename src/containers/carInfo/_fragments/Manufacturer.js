import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../../components/button/Button";

const Manufacturer = () => {
  const [manufacturer, setManufacturer] = useState();
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
    <ManufacturerContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ManufacturerTitle>제조사</ManufacturerTitle>
        <div style={{ display: "flex" }}>
          <CheckBoxLabel>외제차의 경우 체크하세요</CheckBoxLabel>
          <CarCheckBox
            type="checkbox"
            name="foreign"
            onChange={saveManufac}
            checked={manufacturer !== "foreign" ? false : true}
          />
        </div>
      </div>
      <CarBtn
        name="hyundai"
        onClick={saveManufac}
        color={manufacturer === "hyundai"}
      >
        현대
      </CarBtn>
      <CenterCarBtn
        name="samsung"
        onClick={saveManufac}
        color={manufacturer === "samsung"}
      >
        르노 삼성
      </CenterCarBtn>
      <CarBtn name="kia" onClick={saveManufac} color={manufacturer === "kia"}>
        기아
      </CarBtn>
      <CarBtn
        name="ssangyong"
        onClick={saveManufac}
        color={manufacturer === "ssangyong"}
      >
        쌍용
      </CarBtn>
      <CenterCarBtn
        name="daewoo"
        onClick={saveManufac}
        color={manufacturer === "daewoo"}
      >
        GM 대우
      </CenterCarBtn>
      <CarBtn name="etc" onClick={saveManufac} color={manufacturer === "etc"}>
        기타
      </CarBtn>
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
  width: 31.5%;
  height: 30%;
  border-radius: 5px;
`;

const CenterCarBtn = styled(Button)`
  width: 33%;
  height: 30%;
  margin: 0 10px 10px;
  border-radius: 5px;
`;
