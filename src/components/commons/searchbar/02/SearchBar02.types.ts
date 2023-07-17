import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export interface ISearchBars02Props {
  keyword: string;
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  // refetchUseditems: (
  //   variables: Partial<IQueryFetchUseditemsArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchBars02UIProps {
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMovetoSelling: (event: MouseEvent<HTMLButtonElement>) => void;
}
