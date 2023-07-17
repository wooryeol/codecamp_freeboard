import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  Main,
  BoardHeader,
  ProfileIcon,
  Writer,
  Date,
  BoardBody,
  BoardTitle,
  BoardPic,
  BoardContents,
  Recommendation,
  RecommendationBox,
  LikePic,
  Like,
  UnLikePic,
  UnLike,
  BoardFooter,
  ToEdit,
} from "./BoardDetail.styles";
import ReactPlayer from "react-player/lazy";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <Wrapper>
      <Main>
        <BoardHeader>
          <ProfileIcon src="/images/avatar.png"></ProfileIcon>
          <div>
            <Writer>{props.data?.fetchBoard?.writer ?? ""}</Writer>
            <Date>Date : {getDate(props.data?.fetchBoard?.createdAt ?? "")}</Date>
          </div>
        </BoardHeader>
        <BoardBody>
          <BoardTitle>{props.data?.fetchBoard?.title ?? ""}</BoardTitle>
          <div>
            {props.data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el) => (
                <BoardPic key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </div>
          <BoardContents>{props.data?.fetchBoard?.contents ?? ""}</BoardContents>
          <ReactPlayer
            url={props.youtubeUrl ?? ""} // 플레이어 url
            // width="800px" // 플레이어 크기 (가로)
            // height="600px" // 플레이어 크기 (세로)
            playing={true} // 자동 재생 on
            muted={true} // 자동 재생 on
            controls={true} // 플레이어 컨트롤 노출 여부
            light={false} // 플레이어 모드
          />
          <Recommendation>
            <RecommendationBox>
              <LikePic src="/images/board/detail/Vector.png" onClick={props.onClickLike} />
              <Like>{props.likeCount}</Like>
            </RecommendationBox>
            <RecommendationBox>
              <UnLikePic src="/images/board/detail/Vector (1).png" onClick={props.onClickDislike} />
              <UnLike>{props.dislikeCount}</UnLike>
            </RecommendationBox>
          </Recommendation>
        </BoardBody>
      </Main>
      <BoardFooter>
        <ToEdit onClick={props.onClickMoveBoard}>목록으로</ToEdit>
        <ToEdit onClick={props.onClickMoveEdit}>수정하기</ToEdit>
        <ToEdit onClick={props.onClickDelete}>삭제하기</ToEdit>
      </BoardFooter>
    </Wrapper>
  );
}
