import styled from "@emotion/styled";

interface IButtonProps {
  isActive: boolean;
  title: string;
  // onClick: () => void;
}
const Btn = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
`;

export default function Button01(props: IButtonProps): JSX.Element {
  return (
    <Btn
      style={{
        backgroundColor: props.isActive ? "#ffd600" : "",
        border: props.isActive ? "none" : "",
        color: props.isActive ? "black" : "white",
      }}
    >
      {props.title}
    </Btn>
    // <Btn>{props.title}</Btn>
  );
}
