import React from "react";
import { Carousel } from "antd";
import styled from "@emotion/styled";

const ContentStyle = styled.h3`
  height: 160px;
  font-size: 30px;
  color: #ffffff;
  line-height: 160px;
  text-align: center;
  background: lightgrey;
  font-weight: bold;
`;

export default function App(): JSX.Element {
  return (
    <Carousel autoplay>
      <div>
        <ContentStyle>안녕하세요</ContentStyle>
      </div>
      <div>
        <ContentStyle>김우렬입니다.</ContentStyle>
      </div>
      <div>
        <ContentStyle>잘 부탁드립니다.</ContentStyle>
      </div>
      <div>
        <ContentStyle>감사합니다.</ContentStyle>
      </div>
    </Carousel>
  );
}
