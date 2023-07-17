import styled from "@emotion/styled";

export const Main = styled.div`
  box-sizing: border-box;
  margin: 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 15px;
  margin: 50px 0px;
`;

export const InfoBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: Column;
  align-items: flex-start;
`;

export const ErrorBox = styled.div`
  height: 20px;
  color: red;
  font-size: 12px;
  margin: 5px 0px 10px 0px;
`;
