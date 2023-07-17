import * as S from "./bestProduct.styles";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS_OF_THE_BEST } from "./bestProduct.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

interface IProps {
  _id?: string;
  images?: string | undefined;
  name?: string;
  remarks?: string;
  price?: number | string;
}

export default function BestProduct(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);
  return (
    <>
      <S.Wrapper>
        {data?.fetchUseditemsOfTheBest?.map((el: IProps) => (
          <S.WrapperBody
            key={el._id}
            onClick={el._id !== undefined ? onClickMoveToPage(`/markets/${el._id}`) : undefined}
          >
            <S.Pic
              src={el.images === undefined ? "" : `https://storage.googleapis.com/${el.images[0]}`}
            />
            <S.Title>{el.name}</S.Title>
            <S.SubTitle>{el.remarks}</S.SubTitle>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.Price>{el.price}</S.Price>
              <S.LikeBox style={{ display: "flex", flexDirection: "column" }}>
                <S.LikeIcon src="/Vector (2).png" />
                20
              </S.LikeBox>
            </div>
          </S.WrapperBody>
        ))}
      </S.Wrapper>
    </>
  );
}
