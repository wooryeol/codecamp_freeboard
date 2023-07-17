import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  margin: 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 1200px;
`;

export const Posting = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
`;

export const InfoDetail = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
`;

export const InfoInput = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  :focus {
    outline: 1px solid #ffd600;
    border: none;
  }
`;

export const InfoInputProduct = styled.textarea`
  width: 100%;
  height: 320px;
  margin-bottom: 40px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  padding-top: 15px;
  border-top: none;
  focus {
    outline: 1px solid #ffd600;
    border: none;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  /* border: 1px solid black; */
  margin-bottom: 100px;
`;

export const Map = styled.div`
  width: 390px;
  height: 250px;
  /* border: 1px solid black; */
`;

export const MapDetail = styled.div`
  width: 580px;
  height: 250px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

export const GPS = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  padding-top: 10px;
`;

export const GPSDetail = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
`;

export const Address = styled.div``;

export const AddressDetail = styled.div`
  height: 50px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const PicBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const MainOption = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const RadioButton = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  padding-top: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const InputRadio = styled.input`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  accent-color: #ffd600;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Register = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const Error = styled.div`
  width: 300px;
  height: 30px;
  color: red;
  margin: 10px 0px 10px 0px;
  padding-left: 15px;
`;
