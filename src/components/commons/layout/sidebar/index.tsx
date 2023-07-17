import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f2f2f2;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0px 10px 0px;
`;

const ProfileIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px 0px;
`;

const WrapperIndex = styled.div`
  /* border: 1px solid black; */
  width: 100px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  height: 19px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const Index = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #4f4f4f;
  /* border: 1px solid black; */
`;

const WrapperIndex2 = styled.div`
  /* border: 1px solid black; */
  width: 100px;
  height: 30px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Icon2 = styled.img`
  width: 20px;
  height: 19px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const Index2 = styled.div`
  font-size: 18px;
  color: #828282;
  :hover {
    color: black;
  }
`;

export default function LayoutSidebar(): JSX.Element {
  return (
    <Wrapper>
      <Title>MYPAGE</Title>
      <ProfileIcon src="/Vector (1).png" />
      <Title>우뎌디</Title>
      <WrapperIndex>
        <Icon src="/Pig.png" />
        <Index>100,000</Index>
      </WrapperIndex>
      <WrapperIndex2>
        <Icon2 src="/Cart2.png" />
        <Index2>내 장터</Index2>
      </WrapperIndex2>
      <WrapperIndex2>
        <Icon2 src="/Pig2.png" />
        <Index2>내 포인트</Index2>
      </WrapperIndex2>
      <WrapperIndex2>
        <Icon2 src="/Profile2.png" />
        <Index2>내 프로필</Index2>
      </WrapperIndex2>
    </Wrapper>
  );
}
