import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores/index";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // localStorage.setItem("visitedPage", path) // 로컬스토리지도 가능
    setVisitedPage(path); // 로그인페이지 일때는 set하지 않도록 조건 추가
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
