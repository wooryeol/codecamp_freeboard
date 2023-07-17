import * as S from "./productList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "./productList.queries";
import { useState } from "react";
import type { MouseEvent } from "react";
import { wrapAsync } from "../../../../commons/libraries/asyncFunc";
import SearchBar02 from "../../../commons/searchbar/02/SearchBar02.container";
import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export default function ProductList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const onClickDetailPage = (event: MouseEvent): void => {
    void router.push(`/markets/${event.currentTarget.id}`);
  };

  const onLoadMore = async (): Promise<void> => {
    if (data === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil((data.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
        };
      },
    });
  };

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  const onClickMoveToProduct = (props: any): void => {
    void router.push("/markets/new");
  };

  return (
    <>
      <SearchBar02 keyword={keyword} refetch={refetch} onChangeKeyword={onChangeKeyword} />
      <div
        style={{
          width: "1300px",
          height: "630px",
          overflow: "auto",
        }}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={wrapAsync(onLoadMore)}
          hasMore={true}
          useWindow={false}
          style={{ scrollbarColor: "#ffd600" }}
        >
          {data?.fetchUseditems != null ? (
            data?.fetchUseditems.map((el: any) => (
              <div key={el._id}>
                <S.Wrapper>
                  <div>
                    {el.images.filter((image: string) => image).length === 0 ? (
                      <S.PicNone />
                    ) : (
                      <S.Pic
                        src={`https://storage.googleapis.com/${
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          el?.images.filter((image: string) => image)[0]
                        }`}
                      />
                    )}
                  </div>
                  <S.Body id={el._id} onClick={onClickDetailPage}>
                    <S.Name>{el.name}</S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <S.UserIcon src="/Vector (1).png" />
                      <S.UserName>{el.seller.name}</S.UserName>
                      <S.UserIcon src="/Vector (2).png" />
                      <S.UserName>{el.pickedCount}</S.UserName>
                    </div>
                  </S.Body>
                  <S.BodyRight>
                    <S.PriceIcon src="/Vector.png" />
                    <S.Price>{el.price}원</S.Price>
                  </S.BodyRight>
                </S.Wrapper>
              </div>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </div>
      <S.WrapperFooter>
        <S.AddPosting onClick={onClickMoveToProduct}>상품등록</S.AddPosting>
      </S.WrapperFooter>
    </>
  );
}
