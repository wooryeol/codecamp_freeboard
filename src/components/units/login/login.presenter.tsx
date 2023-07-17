import * as S from "./login.styles";
import type { ChangeEvent } from "react";

interface ILoginUiProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickJoin: () => void;
}

export default function LoginUi(props: ILoginUiProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.WrapperBody>
        LOGIN
        <S.InfoInput
          onChange={props.onChangeEmail}
          type="text"
          placeholder="아이디를 입력해주세요"
        />
        <S.InfoInput
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </S.WrapperBody>
      <S.WrapperFooter>
        <S.Login onClick={props.onClickLogin}>로그인</S.Login>
        <S.Join onClick={props.onClickJoin}>회원가입</S.Join>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
