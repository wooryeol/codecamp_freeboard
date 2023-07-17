import * as S from "./SearchBar02.styles";
import { ISearchBars02UIProps } from "./SearchBar02.types";
import DatePicker01 from "../../datePicker/index";

export default function SearchBar02UI(props: ISearchBars02UIProps): JSX.Element {
  return (
    <S.WrapperHeader>
      <S.WrapperLeft>
        <S.Sold onClick={props.onClickMovetoSelling}>판매중상품</S.Sold>
        <S.Sold>판매된상품</S.Sold>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.SearchInput
          placeholder="제품을 검색해주세요."
          type="text"
          onChange={props.onChangeSearchBar}
        ></S.SearchInput>
        <DatePicker01 />
        <S.SearchBtn>검색</S.SearchBtn>
      </S.WrapperRight>
    </S.WrapperHeader>
  );
}
