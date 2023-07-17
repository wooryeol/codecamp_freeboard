import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveBoard: () => void;
  onClickMoveEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  likeCount: number;
  dislikeCount: number;
  isEdit: boolean;
  images: string;
  youtubeUrl: string;
}
