import styled from "@emotion/styled";
import { Rate } from "antd";
import { ISubmitButtonProps } from "./BoardCommentWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  margin-bottom: 50px;
`;

export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgrey;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
  border-top: 1px solid lightgrey;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#ffd600" : "black"};
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#ffd600" : "black"};
  color: ${(props: ISubmitButtonProps) => (props.isActive ? "black" : "white")};

  cursor: pointer;
`;

export const Star = styled(Rate)``;
