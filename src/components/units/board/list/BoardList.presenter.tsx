import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import SearchBar01 from "../../../commons/searchbar/01/SearchBar01.container";
import { IBoardListUIProps } from "./BoardList.types";

const SECRET = "@#$%";

export default function boardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Main>
      <SearchBar01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.WrapperBody>
        <S.DivideLine />
        <S.TitleWrapper1>
          <S.BodyNumber>ID</S.BodyNumber>
          <S.BodyTitle>제목</S.BodyTitle>
          <S.BodyWriter>작성자</S.BodyWriter>
          <S.BodyDate>날짜</S.BodyDate>
        </S.TitleWrapper1>
        {props.data?.fetchBoards?.map((el) => (
          <S.TitleWrapper key={el._id}>
            <S.List>{String(el._id).slice(-4).toUpperCase()}</S.List>
            <S.ListTitle id={el._id} onClick={props.onClickMoveDetail}>
              {el.title
                .replaceAll(props.keyword, `${SECRET}${props.keyword}${SECRET}`)
                .split(SECRET)
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{
                      color: el === props.keyword ? "#ffd600" : "black",
                    }}
                  >
                    {el}
                  </span>
                ))}
            </S.ListTitle>
            <S.List>{el.writer}</S.List>
            <S.List>{getDate(el.createdAt)}</S.List>
          </S.TitleWrapper>
        ))}
      </S.WrapperBody>
      <S.DivideLine2 />
      <Paginations01 refetch={props.refetch} count={props.count} />
      <S.WrapperFooter>
        <S.AddPosting onClick={props.onClickMoveNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.AddPosting>
      </S.WrapperFooter>
    </S.Main>
  );
}
