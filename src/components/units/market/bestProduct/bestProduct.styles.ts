import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0px;
`;

export const WrapperBody = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Pic = styled.img`
  width: 242px;
  height: 242px;
  border-radius: 10px;
  border: none;
  background: lightGray;
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 20px 0px 5px 0px;
`;

export const SubTitle = styled.div`
  font-size: 12px;
  color: #4f4f4f;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
`;

export const LikeBox = styled.div``;

export const LikeIcon = styled.img`
  width: 20px;
  height: 18.35px;
  margin-bottom: 5px;
`;
