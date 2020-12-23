import React, { useState } from "react";
import Accident from "./_fragments/Accident";
import styled, { css } from "styled-components";
import Button from "../../components/button/Button";
import Repair from "./_fragments/Repair";
import Manufacturer from "./_fragments/Manufacturer";
import CarPicture from "./_fragments/CarPicture";
import CarPrice from "./_fragments/CarPrice";
import ResetSave from "./_fragments/ResetSave";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CarInfoContainer = () => {
  const [totalCount, setTotalCount] = useState(1);
  const [showCar, setShowCar] = useState(-1);
  const [isAccident, setIsAccident] = useState();
  const [repairInfo, setRepairInfo] = useState("");
  const [manufacturer, setManufacturer] = useState();
  const [filesArray, setFilesArray] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState("");
  const [state, setState] = useState();
  const [saveTime, setSaveTime] = useState();

  const showCarNumber = (event) => {
    const {
      target: { id },
    } = event;
    setShowCar(parseInt(id));
  };

  const addCar = () => {
    if (typeof state === "number") {
      setTotalCount(totalCount + 1);
    }
  };

  const storage = () => {
    const storageObj = {
      isAccident,
      repairInfo,
      manufacturer,
      filesArray,
      price,
    };
    localStorage.setItem("carInfo", JSON.stringify(storageObj));
  };

  return (
    <InfoContainer>
      <InfoTitle>중고차</InfoTitle>
      {[...Array(totalCount)].map((info, index) => {
        const carNumber = index + 1;
        return (
          <>
            <ShowInfoContainer>
              <ShowInfoTitle>중고차{carNumber} 정보</ShowInfoTitle>
            </ShowInfoContainer>
            {showCar > 0 && showCar === carNumber ? (
              <>
                <DownIcon id={-carNumber} onClick={showCarNumber} />
                <ContentContainer>
                  <Accident
                    isAccident={isAccident}
                    setIsAccident={setIsAccident}
                  />
                  <Repair
                    repairInfo={repairInfo}
                    setRepairInfo={setRepairInfo}
                  />
                  <Manufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                  />
                  <CarPicture
                    filesArray={filesArray}
                    setFilesArray={setFilesArray}
                    count={count}
                    setCount={setCount}
                  />
                  <CarPrice price={price} setPrice={setPrice} />
                  <ResetSave
                    id={carNumber}
                    state={state}
                    setState={setState}
                    saveTime={saveTime}
                    setSaveTime={setSaveTime}
                  />
                </ContentContainer>
              </>
            ) : (
              <UpIcon id={carNumber} onClick={showCarNumber} />
            )}
          </>
        );
      })}
      <AddBtn round onClick={addCar}>
        <AddIcon />
        중고차량 추가하기
      </AddBtn>
      <SaveBtn color="#315676" onClick={storage}>
        판매 등록하기
      </SaveBtn>
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

const ContentContainer = styled.div`
  width: 100%;
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

const DownIcon = styled(IoIosArrowDown)`
  position: relative;
  left: 40%;
  top: -30px;
`;

const UpIcon = styled(IoIosArrowUp)`
  position: relative;
  left: 40%;
  top: -30px;
`;

const ShowInfoContainer = styled.div`
  width: 95%;
  margin: 10px 0;
  border-bottom: 1px solid #b8b8b8;
`;

const ShowInfoTitle = styled.p`
  margin: 0;
  padding-bottom: 5px;
  font-weight: 600;
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
