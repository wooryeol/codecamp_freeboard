import * as S from "./uploads02.styles";
import { IUploads02UIProps } from "./uploads02.types";

export default function Uploads02UI(props: IUploads02UIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <S.picImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.PicAddButton type="button" onClick={props.onClickUpload}>
          <>+</>
          <br />
          <>upload</>
        </S.PicAddButton>
      )}
      <S.PicHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
}
