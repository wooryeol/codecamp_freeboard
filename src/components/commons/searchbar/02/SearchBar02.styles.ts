import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
`;

export const WrapperLeft = styled.div`
  width: calc(100% - 900px);
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Sold = styled.button`
  color: #4f4f4f;
  font-size: 16px;
  background-color: white;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  :focus {
    color: black;
    font-weight: bold;
    border-bottom: 1px solid #ffd600;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 282px;
  height: 52px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  :focus {
    outline: 1px solid #ffd600;
    color: black;
  }
  padding-left: 10px;
  color: #f2f2f2;
`;

export const SearchBtn = styled.button`
  width: 78px;
  height: 52px;
  color: black;
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;
