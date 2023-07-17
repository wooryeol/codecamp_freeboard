import type { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

interface IInputProps {
  type?: "text" | "password" | "number";
  register: UseFormRegisterReturn;
  placeholder?: string;
}

export const InfoInput = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  :focus {
    outline: 1px solid #ffd600;
    border: none;
  }
  border-radius: 8px;
`;

export default function Input01(props: IInputProps): JSX.Element {
  return (
    <InfoInput
      placeholder={props.placeholder ?? ""}
      type={props.type ?? "text"}
      {...props.register}
    />
  );
}
