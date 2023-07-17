import { Modal } from "antd";

export const checkValidationFile = (file?: File): boolean => {
  if (file?.size === undefined) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file?.size > 5 * 1024 * 1024) {
    Modal.error({ content: "5MB 크기 이하의 파일만 업로드 가능합니다." });
    return false;
  }
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.error({ content: "jpeg 또는 png 파일만 업로드 가능합니다" });
    return false;
  }
  return true;
};
