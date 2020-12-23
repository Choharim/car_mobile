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
  const [storage, setStorage] = useState(false);
  const [totalCount, setTotalCount] = useState(1);
  const [showCar, setShowCar] = useState(-1);

  const showCarNumber = (event) => {
    const {
      target: { id },
    } = event;
    setShowCar(parseInt(id));
  };

  return (
    <InfoContainer>
      <InfoTitle>중고차</InfoTitle>
      {[...Array(totalCount)].map((info, index) => {
        const carNumber = index + 1;
        console.log(typeof -carNumber);
        return (
          <>
            <ShowInfoContainer>
              <ShowInfoTitle>중고차{carNumber} 정보</ShowInfoTitle>
              {showCar > 0 && showCar === carNumber ? (
                <IoIosArrowDown id={-carNumber} onClick={showCarNumber} />
              ) : (
                <IoIosArrowUp id={carNumber} onClick={showCarNumber} />
              )}
            </ShowInfoContainer>
            {showCar > 0 && showCar === carNumber && (
              <>
                <Accident />
                <Repair />
                <Manufacturer />
                <CarPicture />
                <CarPrice />
                <ResetSave />
              </>
            )}
          </>
        );
      })}
      <AddBtn round onClick={() => setTotalCount(totalCount + 1)}>
        <AddIcon />
        중고차량 추가하기
      </AddBtn>
      <SaveBtn color="#315676" onClick={() => setStorage(true)}>
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
