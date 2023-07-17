import styled from "@emotion/styled";
import SimpleSlider from "../carousel/index";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  height: 210px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function LayoutBanner(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <SimpleSlider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
            height: "60px",
            width: "300px",
          }}
        >
          <div onClick={onClickMoveToPage("/boards")} style={{ cursor: "pointer", width: "100px" }}>
            게시판
          </div>
          <div
            onClick={onClickMoveToPage("/markets")}
            style={{ cursor: "pointer", width: "100px" }}
          >
            중고마켓
          </div>
          <div onClick={onClickMoveToPage("/mypage")} style={{ cursor: "pointer", width: "100px" }}>
            마이페이지
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
