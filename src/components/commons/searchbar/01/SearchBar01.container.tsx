import SearchBar01UI from "./SearchBar01.presenter";
import _ from "lodash";
import { ISearchBars01Props } from "./SearchBar01.types";
import type { ChangeEvent } from "react";

export default function SearchBar01(props: ISearchBars01Props): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 300);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event?.currentTarget.value);
  };

  return <SearchBar01UI onChangeSearchBar={onChangeSearchBar} />;
}
