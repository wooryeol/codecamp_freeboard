import * as S from "./SearchBar01.styles";
import { ISearchBars01UIProps } from "./SearchBar01.types";

export default function SearchBar01UI(
  props: ISearchBars01UIProps
): JSX.Element {
  return (
    <S.WrapperHeader>
      <S.SearchInput
        placeholder="검색어를 입력해주세요"
        type="text"
        onChange={props.onChangeSearchBar}
      ></S.SearchInput>
    </S.WrapperHeader>
  );
}
