import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 180px; */
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid black;
  /* line-height: 27px; */
  cursor: pointer;
`;

export const PicNone = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 20px;
  background-color: lightGray;
  border-radius: 10px;
`;

export const Pic = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const Body = styled.div`
  width: 800px;
  height: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Remarks = styled.div`
  color: #4f4f4f;
  margin: 5px 0px;
`;

export const Tags = styled.div`
  color: #bdbdbd;
  margin-bottom: 20px;
`;

export const BodyRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const PriceIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const UserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const UserName = styled.div`
  height: 20px;
  width: 80px;
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
`;

export const WrapperFooter = styled.div`
  width: 1200px;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AddPosting = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border: none;
    color: white;
  }
`;
