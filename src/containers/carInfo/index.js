import React, { useState, useEffect } from "react";
import Accident from "./_fragments/Accident";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Repair from "./_fragments/Repair";
import Manufacturer from "./_fragments/Manufacturer";
import CarPicture from "./_fragments/CarPicture";
import CarPrice from "./_fragments/CarPrice";
import ResetSave from "./_fragments/ResetSave";
import { AiOutlinePlus } from "react-icons/ai";
import ToggleBtn from "../../components/ToggleBtn";

const CarInfoContainer = () => {
  const [isAccident, setIsAccident] = useState("");
  const [repairInfo, setRepairInfo] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [filesArray, setFilesArray] = useState([]);
  const [pictureCount, setPictureCount] = useState(0);
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [saveTime, setSaveTime] = useState("");
  const [dataArray, setDataArray] = useState([{}]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tempSave_carInfo"))) {
      setDataArray(JSON.parse(localStorage.getItem("tempSave_carInfo")));
    }
  }, []);

  const addAnotherCar = () => {
    if (Object.keys(dataArray[dataArray.length - 1]).length === 0) {
      //dataArray맨 마지막 obj에 정보가 담겨있지 않으면 임시저장 안했다는 거니까
      return;
    } else {
      setDataArray(dataArray.concat({}));
    }
  };
  const immediateSave = (index) => {
    setDataArray(
      dataArray.map((obj, id) =>
        id === index
          ? {
              isAccident: obj.isAccident ? obj.isAccident : isAccident,
              repairInfo: obj.repairInfo ? obj.repairInfo : repairInfo,
              manufacturer: obj.manufacturer ? obj.manufacturer : manufacturer,
              filesArray:
                obj.filesArray && obj.filesArray[0]
                  ? obj.filesArray
                  : filesArray,
              price: obj.price ? obj.price : price,
            }
          : obj
      )
    );

    setIsAccident("");
    setRepairInfo("");
    setManufacturer("");
    setFilesArray([]);
    setPictureCount(0);
    setPrice("");
    setSaveTime("");
    localStorage.setItem(
      "tempSave_carInfo",
      JSON.stringify(
        dataArray.map((obj, id) =>
          id === index
            ? {
                isAccident: obj.isAccident ? obj.isAccident : isAccident,
                repairInfo: obj.repairInfo ? obj.repairInfo : repairInfo,
                manufacturer: obj.manufacturer
                  ? obj.manufacturer
                  : manufacturer,
                filesArray:
                  obj.filesArray && obj.filesArray[0]
                    ? obj.filesArray
                    : filesArray,
                price: obj.price ? obj.price : price,
              }
            : obj
        )
      )
    );
  };
  const immediateRefresh = (index) => {
    if (dataArray.length !== 1) {
      setDataArray(dataArray.filter((obj, id) => id !== index));
      localStorage.setItem(
        "tempSave_carInfo",
        JSON.stringify(dataArray.filter((obj, id) => id !== index))
      );
    } else {
      setDataArray([{}]);
      localStorage.setItem("tempSave_carInfo", JSON.stringify([{}]));
    }
    setIsAccident("");
    setRepairInfo("");
    setManufacturer("");
    setFilesArray([]);
    setPictureCount(0);
    setPrice("");
    setSaveTime("");
  };
  const addStorage = () => {
    dataArray.forEach((dataObj) => {
      if (
        dataObj.isAccident !== "" &&
        dataObj.repairInfo !== "" &&
        dataObj.manufacturer !== "" &&
        dataObj.price !== ""
      ) {
        localStorage.setItem("carInfo", JSON.stringify(dataArray));
      }
    });
  };

  return (
    <InfoContainer>
      <InfoTitle>중고차</InfoTitle>
      {dataArray.map((dataObj, index) => {
        return (
          <>
            <ShowInfoTitle>중고차{index + 1} 정보</ShowInfoTitle>

            <ToggleBtn>
              <Accident
                isAccident={isAccident}
                setIsAccident={setIsAccident}
                dataObj={dataObj}
              />
              <Repair
                repairInfo={repairInfo}
                setRepairInfo={setRepairInfo}
                dataObj={dataObj}
              />
              <Manufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                dataObj={dataObj}
              />
              <CarPicture
                filesArray={filesArray}
                setFilesArray={setFilesArray}
                pictureCount={pictureCount}
                setPictureCount={setPictureCount}
                dataObj={dataObj}
              />
              <CarPrice price={price} setPrice={setPrice} dataObj={dataObj} />
              <ResetSave
                index={index}
                immediateSave={immediateSave}
                immediateRefresh={immediateRefresh}
                state={state}
                setState={setState}
                saveTime={saveTime}
                setSaveTime={setSaveTime}
              />
            </ToggleBtn>
          </>
        );
      })}

      <AddBtn round onClick={addAnotherCar}>
        <AddIcon />
        중고차량 추가하기
      </AddBtn>
      <SaveBtn color="#315676" onClick={addStorage}>
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
  margin: 10px 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: #315676;
`;

const ShowInfoTitle = styled.p`
  width: 95%;
  margin: 10px 0;
  border-bottom: 1px solid #b8b8b8;
  padding: 15px 0 5px 0;
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
