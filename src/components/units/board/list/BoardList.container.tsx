import BoardListUi from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState } from "react";
import type { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";

export default function boardList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

  const onClickMoveNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <>
      <BoardListUi
        data={data}
        onClickMoveNew={onClickMoveNew}
        onClickMoveDetail={onClickMoveDetail}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        count={dataBoardsCount?.fetchBoardsCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
      />
    </>
  );
}
