import * as S from "./signUp.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../../commons/libraries/validation";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import { CREATE_USER } from "./signUp.queries";
import { useRouter } from "next/router";
import Button01 from "../../commons/buttons/01/index";
import Input02 from "../../commons/inputs/02/index";

interface IFormData {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

export default function SignUp(): JSX.Element {
  const router = useRouter();
  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(
    CREATE_USER
  );

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      console.log(result);
      alert("가입을 축하합니다🚀");
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.Main>
      <S.Wrapper>
        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
            borderBottom: "3px solid black",
          }}
        >
          SIGN UP
        </div>
        <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
          <S.InfoBox>
            이메일
            <Input02 register={register("email")} placeholder="이메일을 입력해주세요" />
          </S.InfoBox>
          <S.ErrorBox>{formState.errors.email?.message}</S.ErrorBox>
          <S.InfoBox>
            비밀번호
            <Input02
              type="password"
              register={register("password")}
              placeholder="비밀번호를 입력해주세요"
            />
          </S.InfoBox>
          <S.ErrorBox>{formState.errors.password?.message}</S.ErrorBox>
          <S.InfoBox>
            비밀번호 확인
            <Input02
              type="password"
              register={register("passwordCheck")}
              placeholder="비밀번호를 입력해주세요"
            />
          </S.InfoBox>
          <S.ErrorBox>{formState.errors.passwordCheck?.message}</S.ErrorBox>
          <S.InfoBox>
            이름
            <Input02 register={register("name")} placeholder="이름을 입력해주세요" />
          </S.InfoBox>
          <S.ErrorBox>{formState.errors.name?.message}</S.ErrorBox>
          <div style={{ textAlign: "center" }}>
            <Button01 title="가입하기" isActive={formState.isValid} />
          </div>
        </form>
      </S.Wrapper>
    </S.Main>
  );
}
