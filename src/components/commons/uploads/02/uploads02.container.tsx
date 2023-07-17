import { useRef } from "react";
import type { ChangeEvent } from "react";
import { UPLOAD_FILE } from "./uploads02.queries";
import { useMutation } from "@apollo/client";
import { checkValidationFile } from "./uploads02.validation";
import Uploads02UI from "./uploads02.presenter";
import type { IUploads02Props } from "./uploads02.types";
import { Modal } from "antd";

export default function Uploads02(props: IUploads02Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationFile(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
