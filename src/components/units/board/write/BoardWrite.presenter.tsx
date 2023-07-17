import {
  Main,
  Posting,
  Info,
  InfoDetail,
  InfoInput,
  Title,
  Contents,
  InputContents,
  Address,
  AddressBox,
  InputAddress,
  AddressButton,
  Youtube,
  Pic,
  PicBox,
  MainOption,
  RadioButton,
  InputRadio,
  Register,
  ErrorBox,
  AddressModal,
  AddressSearchInput,
} from "./BoardWrite.styles";
import Uploads01 from "../../../commons/uploads/01/uploads01.container";
import type { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  console.log(props.data);
  return (
    <>
      {props.isOpen && (
        <AddressModal visible={true}>
          <AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </AddressModal>
      )}
      <Main>
        <Posting>{props.isEdit ? "게시글 수정" : "게시글 등록"}</Posting>
        <Info>
          <InfoDetail>
            작성자
            <InfoInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
            ></InfoInput>
            <ErrorBox>{props.writerError}</ErrorBox>
          </InfoDetail>
          <div style={{ width: "20px" }}></div>
          <InfoDetail>
            비밀번호
            <InfoInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
            ></InfoInput>
            <ErrorBox>{props.passwordError}</ErrorBox>
          </InfoDetail>
        </Info>
        <Title>
          제목
          <InfoInput
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          ></InfoInput>
          <ErrorBox>{props.titleError}</ErrorBox>
        </Title>
        <Contents>
          내용
          <InputContents
            placeholder="내용을 작성해주세요"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></InputContents>
          <ErrorBox>{props.contentsError}</ErrorBox>
        </Contents>
        <Address>
          주소
          <AddressBox>
            <InputAddress
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ""
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <AddressButton onClick={props.onClickAddressSearch}>
              우편번호 <br></br>검색
            </AddressButton>
          </AddressBox>
          <InfoInput
            readOnly
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <InfoInput
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
            placeholder="상세주소를 입력해주세요."
          />
        </Address>
        <Youtube>
          유튜브
          <InfoInput
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </Youtube>
        <Pic>
          사진첨부
          <PicBox>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </PicBox>
        </Pic>
        <MainOption>
          메인설정
          <RadioButton>
            <InputRadio type="radio" name="radio-button"></InputRadio> 유튜브
            <InputRadio type="radio" name="radio-button"></InputRadio> 사진
          </RadioButton>
        </MainOption>
        <Register
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </Register>
      </Main>
    </>
  );
}
