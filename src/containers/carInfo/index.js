import React, { useState } from "react";
import Accident from "./_fragments/Accident";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Repair from "./_fragments/Repair";
import Manufacturer from "./_fragments/Manufacturer";
import CarPicture from "./_fragments/CarPicture";
import CarPrice from "./_fragments/CarPrice";
import ResetSave from "./_fragments/ResetSave";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const CarInfoContainer = () => {
  const [isAccident, setIsAccident] = useState();
  const [repairInfo, setRepairInfo] = useState("");
  const [manufacturer, setManufacturer] = useState();
  const [filesArray, setFilesArray] = useState([]);
  const [price, setPrice] = useState("");
  const [state, setState] = useState();
  const [saveTime, setSaveTime] = useState();
  const [dataArray, setDataArray] = useState([{}]);

  return (
    <InfoContainer>
      <InfoTitle>중고차</InfoTitle>
      {dataArray.map((dataObj, index) => {
        return (
          <>
            <ShowInfoContainer>
              <ShowInfoTitle>중고차 정보</ShowInfoTitle>
              <IoIosArrowDown />
            </ShowInfoContainer>
            <ContentContainer>
              <Accident isAccident={isAccident} setIsAccident={setIsAccident} />
              <Repair repairInfo={repairInfo} setRepairInfo={setRepairInfo} />
              <Manufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
              />
              <CarPicture
                filesArray={filesArray}
                setFilesArray={setFilesArray}
              />
              <CarPrice price={price} setPrice={setPrice} />
            </ContentContainer>
          </>
        );
      })}
      <ResetSave
        state={state}
        setState={setState}
        saveTime={saveTime}
        setSaveTime={setSaveTime}
      />
      <AddBtn round>
        <AddIcon />
        중고차량 추가하기
      </AddBtn>
      <SaveBtn color="#315676">판매 등록하기</SaveBtn>
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
`;

const InfoTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 10px 0;
  color: #315676;
`;

const ShowInfoContainer = styled.div`
  width: 95%;
  margin: 10px 0;
  border-bottom: 1px solid #b8b8b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowInfoTitle = styled.p`
  margin: 0;
  padding-bottom: 5px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddBtn = styled(Button)`
  width: 95%;
  height: 40px;
  margin-top: 10px;
  border: none;
  background-color: #e5e5e5;
`;

const AddIcon = styled(AiOutlinePlus)`
  padding: 5px;
  font-size: 1.2rem;
`;

const SaveBtn = styled(Button)`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  font-size: 1.4rem;
`;
