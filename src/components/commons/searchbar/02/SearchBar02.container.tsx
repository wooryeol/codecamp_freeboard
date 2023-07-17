import SearchBar02UI from "./SearchBar02.presenter";
import _ from "lodash";
import { ISearchBars02Props } from "./SearchBar02.types";
import type { ChangeEvent } from "react";
import { useRouter } from "next/router";

export default function SearchBar02(props: ISearchBars02Props): JSX.Element {
  const router = useRouter();
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    props.onChangeKeyword(value);
  }, 300);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event?.currentTarget.value);
  };

  const onClickMovetoSelling = (): void => {
    void router.push("/markets");
  };

  return (
    <SearchBar02UI
      onChangeSearchBar={onChangeSearchBar}
      onClickMovetoSelling={onClickMovetoSelling}
    />
  );
}
