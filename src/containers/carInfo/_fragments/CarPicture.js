import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const CarPicture = () => {
  const [count, setCount] = useState(0);
  const [fileObj, setFileObj] = useState({ file: "", url: "" });

  const uploadFiles = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setFileObj({ file, url: reader.result });
    };
    reader.readAsDataURL(file);
    console.log(event.target.files);
  };

  return (
    <>
      <CarPictureTextContainer>
        <CarPictureTitle>차량 사진</CarPictureTitle>
        <div style={{ display: "flex" }}>
          <CountLabel>10장 등록 가능</CountLabel>
          <Count>{count}/10</Count>
        </div>
      </CarPictureTextContainer>
      <CarPictureContainer>
        <UpLoadPicture
          id="file"
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={uploadFiles}
        />
        <UpLoadLabel for="file">
          <AiOutlinePlus style={{ fontSize: "2rem" }} />
        </UpLoadLabel>
        {fileObj.file && <PicturePreview src={fileObj.url} />}
      </CarPictureContainer>
    </>
  );
};

export default CarPicture;

const CarPictureTextContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CarPictureContainer = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
`;

const CarPictureTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #50504f;
`;

const CountLabel = styled.p`
  margin: 0;
  padding-right: 10px;
  color: #b8b8b8;
  font-size: 0.8rem;
`;

const Count = styled.p`
  margin: 0;
  color: #315676;
  font-size: 0.8rem;
`;

const UpLoadPicture = styled.input`
  display: none;
`;

const UpLoadLabel = styled.label`
  padding: 45px;
  background-color: powderblue;
  border-radius: 10px;
  cursor: pointer;
`;

const PicturePreview = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 10px;
  margin: 0 5px;
`;
