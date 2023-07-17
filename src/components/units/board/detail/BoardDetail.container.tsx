import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail(props: { isEdit: boolean }): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(
    DISLIKE_BOARD
  );

  const onClickMoveEdit = (): void => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveBoard = (): void => {
    console.log(router.query.boardId);
    void router.push(`/boards`);
  };

  // 글 삭제

  const onClickDelete = async (): Promise<void> => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      alert("게시글이 삭제 되었습니다.");
      console.log(result);
      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  //  좋아요 && 싫어요

  const onClickLike = (): void => {
    void likeBoard({
      variables: { boardId: router.query.boardId as string },
      optimisticResponse: {
        likeBoard: Number(data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
          data: {
            fetchBoard: {
              _id: router.query.boardId,
              __typename: "board",

              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  const onClickDislike = (): void => {
    void dislikeBoard({
      variables: { boardId: router.query.boardId as string },
      optimisticResponse: {
        dislikeBoard: Number(data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
          data: {
            fetchBoard: {
              _id: router.query.boardId,
              __typename: "board",

              disLikeCount: data?.dislikeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <BoardDetailUI
        data={data}
        likeCount={data?.fetchBoard?.likeCount}
        dislikeCount={data?.fetchBoard?.dislikeCount}
        isEdit={props.isEdit}
        onClickMoveEdit={onClickMoveEdit}
        onClickMoveBoard={onClickMoveBoard}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
        images={data?.fetchBoard?.images}
        youtubeUrl={data?.fetchBoard?.youtubeUrl}
      />
    </div>
  );
}
