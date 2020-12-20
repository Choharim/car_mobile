import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Frame = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <Container height={height}>{children}</Container>;
};

export default Frame;

const Container = styled.div`
  display: flex;
  max-width: 600px;
  margin: auto;
  min-height: ${(props) => `${props.height}px`};
`;
