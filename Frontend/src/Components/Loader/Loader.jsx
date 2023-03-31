import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Col>
      <ImgWrap>
        <LoaderM></LoaderM>
      </ImgWrap>
    </Col>
  );
};

export default Loader;
//styled css
const Col = styled.div`
  width: 90%;
  height: 420px;
  margin: auto;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoaderM = styled.span`
  content: " ";
  border: 5px solid #989898;
  border-radius: 30px;
  height: 30px;
  left: 50%;
  margin: -15px 0 0 -15px;
  opacity: 0;
  width: 30px;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  @keyframes pulsate {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;
