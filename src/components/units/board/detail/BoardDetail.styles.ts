import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 100px;
  width: 1200px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  /* border: 1px solid #828282; */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 1200px;
`;

export const BoardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileIcon = styled.img`
  width: 46px;
  height: 46px;
  margin-right: 10px;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const BoardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;
`;

export const BoardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  padding: 20px 0px;
`;

export const BoardPic = styled.img`
  width: 100%;
  /* height: 480px; */
  /* border: solid 1px #828282; */
  margin-bottom: 60px;
`;

export const BoardContents = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Recommendation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const RecommendationBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`;

export const LikePic = styled.img`
  padding-bottom: 10px;
  cursor: pointer;
`;

export const Like = styled.div`
  font-size: 18px;
  text-align: center;
  color: #828282;
`;

export const UnLikePic = styled.img`
  padding-bottom: 10px;
  cursor: pointer;
`;

export const UnLike = styled.div`
  font-size: 18px;
  text-align: center;
  color: #828282;
`;

export const BoardFooter = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 100px;
`;

export const ToEdit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: white;
  margin: 30px;
  cursor: pointer;
`;
