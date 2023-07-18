import { useMoveToPage } from "../src/components/commons/hooks/useMoveToPage";

export default function LandingPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return <div onClick={onClickMoveToPage("/boards")}>나는야 첫 화면 입니당🐥</div>;
}
