import * as S from "./uploads01.styles";
import { IUploads01UIProps } from "./uploads01.types";

export default function Uploads01Ui(props: IUploads01UIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <S.picImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.PicAddButton onClick={props.onClickUpload}>
          <>+</>
          <br />
          <>upload</>
        </S.PicAddButton>
      )}
      <S.PicHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
