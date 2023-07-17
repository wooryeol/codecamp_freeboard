import styled from "@emotion/styled";

export const Main = styled.div`
  box-sizing: border-box;
  margin: 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 100px;
  font-size: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperBody = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */
  font-weight: bold;
`;

export const InfoInput = styled.input`
  border: 1px solid #bdbdbd;
  height: 50px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  :focus {
    outline: 1px solid #ffd600;
    border: none;
  }
`;

export const WrapperFooter = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Login = styled.button`
  width: 130px;
  border: none;
  height: 40px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: #ffd600;
    border: none;
    color: white;
  }
`;

export const Join = styled.button`
  width: 130px;
  border: none;
  height: 40px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: #ffd600;
    border: none;
    color: white;
  }
`;
