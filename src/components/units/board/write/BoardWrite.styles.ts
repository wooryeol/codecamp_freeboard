import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

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
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  font-size: 16px;
  font-weight: 500;
`;

export const InfoInput = styled.input`
  width: 100%;
  margin-top: 10px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  :focus {
    outline: 1px solid #ffd600;
    border: none;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
`;

export const InputContents = styled.textarea`
  width: 100%;
  height: 480px;
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  padding-top: 15px;
  :focus {
    outline: 1px solid #ffd600;
    border: none;
  }
`;

export const Address = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 30px;
`;

export const AddressBox = styled.div`
  display: flex;
`;

export const InputAddress = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  text-align: center;
  :focus {
    outline: 1px solid #ffd600;
    border: none;
  }
`;

export const AddressButton = styled.button`
  width: 124px;
  height: 52px;
  background: black;
  color: white;
  font-size: 16px;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
`;

export const Youtube = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

export const Pic = styled.div`
  width: 100%;
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

interface IPropsButton {
  isActive: boolean;
}

export const Register = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: ${(props: IPropsButton) => (props.isActive ? "#ffd600" : "")};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const ErrorBox = styled.div`
  margin-top: 8px;
  height: 50px;
  padding-left: 15px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
