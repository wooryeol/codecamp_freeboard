import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  margin: 100px;
  margin-bottom: 0px;
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0px;
`;

export const HeaderLeft = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

export const Header = styled.div`
  width: 700px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-evenly; */
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const Date = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const WrapperBody = styled.div`
  width: 835px;
  margin-top: 30px;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 40px;
`;

export const BodyTopper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Remarks = styled.div`
  font-size: 18px;
  color: #bdbdbd;
`;

export const ProductName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4f4f4f;
  margin-top: 5px;
`;
export const Price = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 10px 0px;
`;

export const Body = styled.div``;

export const Pic = styled.img`
  width: 500px;
  height: 500px;
  /* border: 1px solid #bdbdbd; */
  margin: 80px 0px;
`;

export const Contents = styled.div`
  width: 100%;
  margin: 20px 0px;
  font-size: 18px;
  color: #4f4f4f;
`;

export const Tags = styled.div`
  color: #bdbdbd;
`;

export const WrapperFooter = styled.div`
  width: 835px;
  /* margin: 30px; */
  border-bottom: 1px solid #bdbdbd;
  padding: 60px 0px;
`;

export const Map = styled.div`
  width: 100%;
  height: 360px;
  border: 1px solid #bdbdbd;
`;

export const Register = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: #dbdbdb;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 20px;
  :hover {
    background-color: #ffd600;
  }
`;
