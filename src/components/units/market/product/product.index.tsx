import dynamic from "next/dynamic";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import * as S from "./product.styles";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Map1 from "../../../commons/map/index";
import { useEffect, useState } from "react";
import Uploads02 from "../../../commons/uploads/02/uploads02.container";
import { v4 as uuidv4 } from "uuid";
import type { IQuery } from "../../../../commons/types/generated/types";
import { schema3 } from "../../../../commons/libraries/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input01 from "../../../commons/inputs/01";
import Button01 from "../../../commons/buttons/01";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

interface IUseditemProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

interface IFormData {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: string;
  images?: string;
  address?: string;
  tags?: string;
}

export default function Product(props: IUseditemProps): JSX.Element {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, setValue, trigger, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema3),
    mode: "onChange",
  });
  const [fileUrls, setFileUrls] = useState(["", ""]);

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeContents = (value: string): void => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: String(data.contents),
            price: Number(data.price),
            tags: data.tags,
            images: [...fileUrls],
          },
        },
      });

      if (result.data?.createUseditem._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      const { Modal } = await import("antd"); // code-splitting
      Modal.success({ content: "게시글 등록에 성공하였습니다🚀" });
      console.log(result.data?.createUseditem._id);

      // const productId: string = result.data.createUseditem._id;
      // console.log(productId);
      void router.push(`/markets/${result.data.createUseditem._id as string}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <S.Main>
      <S.Posting>상품 등록하기</S.Posting>
      <S.Info>
        <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
          <S.InfoDetail>상품명</S.InfoDetail>
          <Input01 placeholder="상품명을 작성해주세요." register={register("name")} />
          <S.Error>{formState.errors.required?.message}</S.Error>
          <S.InfoDetail>한줄요약</S.InfoDetail>
          <Input01 placeholder="상품명을 작성해주세요." register={register("remarks")} />
          <S.Error>{formState.errors.required?.message}</S.Error>
          <S.InfoDetail>상품설명</S.InfoDetail>
          <div
            style={{
              margin: "10px 0px",
              height: "380px",
            }}
          >
            <ReactQuill onChange={onChangeContents} style={{ height: "315px" }} />
          </div>
          <S.Error>{formState.errors.required?.message}</S.Error>
          <S.InfoDetail>판매 가격</S.InfoDetail>
          <Input01
            type="number"
            placeholder="판매 가격을 입력해주세요."
            register={register("price")}
          />
          <S.Error>{formState.errors.required?.message}</S.Error>
          <S.InfoDetail>태그입력</S.InfoDetail>
          <Input01 placeholder="#태그 #태그 #태그" register={register("tags")} />
          <S.Error>{formState.errors.tags?.message}</S.Error>

          <S.MapWrapper>
            <S.Map>
              <S.InfoDetail>거래위치</S.InfoDetail>
              <div style={{ paddingTop: "10px" }}>
                <Map1 />
              </div>
            </S.Map>
            <S.MapDetail>
              <S.InfoDetail>GPS</S.InfoDetail>
              <S.GPS>
                <S.GPSDetail defaultValue={"위도(LAT)"} />
                <S.GPSDetail defaultValue={"경도(LNG)"} />
              </S.GPS>
              <S.Address>
                <S.InfoDetail>주소</S.InfoDetail>
                <S.AddressDetail />
                <S.AddressDetail />
              </S.Address>
            </S.MapDetail>
          </S.MapWrapper>
          <S.InfoDetail>사진 첨부</S.InfoDetail>
          <S.PicBox>
            {fileUrls.map((el, index) => (
              <Uploads02
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </S.PicBox>
          <S.MainOption>
            메인 사진 설정
            <S.RadioButton>
              <S.InputRadio type="radio" name="radio-button"></S.InputRadio>
              사진1
              <S.InputRadio type="radio" name="radio-button"></S.InputRadio>
              사진2
            </S.RadioButton>
          </S.MainOption>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button01 title="등록하기" isActive={formState.isValid} />
          </div>
        </form>
      </S.Info>
    </S.Main>
  );
}
