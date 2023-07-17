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
        <ContentStyle>🐥</ContentStyle>
      </div>
      <div>
        <ContentStyle>🚀</ContentStyle>
      </div>
      <div>
        <ContentStyle>🥲</ContentStyle>
      </div>
      <div>
        <ContentStyle>🌱</ContentStyle>
      </div>
    </Carousel>
  );
}
