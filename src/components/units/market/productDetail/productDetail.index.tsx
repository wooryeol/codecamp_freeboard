import * as S from "./productDetail.styles";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM } from "./productDetail.queries";
import { getDate } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";

export default function ProductDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.useditemId !== "string") return <></>;

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  console.log(data);

  const onClickMoveList = (): void => {
    void router.push("/markets");
  };
  console.log("detail info");
  console.log(data?.fetchUseditem);

  return (
    <>
      <S.Main>
        <S.WrapperHeader>
          <S.HeaderLeft src="/Vector (1).png" />
          <S.Header>
            <S.Title>{data?.fetchUseditem?.seller.name}</S.Title>
            <S.Date>Date : {getDate(data?.fetchUseditem?.createdAt)}</S.Date>
          </S.Header>
          <S.HeaderRight>
            <S.Icon src="/ic_link-24px.png" />
            <S.Icon src="/ic_location_on-24px.png" />
          </S.HeaderRight>
        </S.WrapperHeader>
        <S.WrapperBody>
          <S.BodyTopper>
            <div>
              <S.Remarks>{data?.fetchUseditem?.remarks}</S.Remarks>
              <S.ProductName>{data?.fetchUseditem?.name}</S.ProductName>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <S.Icon
                src="/Vector (2).png"
                style={{ width: "30px", height: "28px", margin: "0px" }}
              />
              <div style={{ fontSize: "18px", fontWeight: "500" }}>
                {data?.fetchUseditem?.pickedCount}
              </div>
            </div>
          </S.BodyTopper>
          <S.Price>{data?.fetchUseditem?.price}원</S.Price>
          <S.Body>
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data?.fetchUseditem.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Pic key={el} src={`https://storage.googleapis.com/${el}`} />
                  ))}
              </div>
            </div>
            <S.Contents>
              {typeof window !== "undefined" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.fetchUseditem?.contents),
                  }}
                />
              ) : (
                <div />
              )}
            </S.Contents>
            {data?.fetchUseditem?.tags?.map((el: string) =>
              el.split(" ").map((tag: string) => <S.Tags key={tag}>#{tag}</S.Tags>)
            )}
          </S.Body>
        </S.WrapperBody>
        <S.WrapperFooter>
          <S.Map></S.Map>
        </S.WrapperFooter>
        <div style={{ marginTop: "70px" }}>
          <S.Register onClick={onClickMoveList}>목록으로</S.Register>
          <S.Register>구매하기</S.Register>
        </div>
      </S.Main>
    </>
  );
}
