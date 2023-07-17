import LoginUi from "./login.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useMutation } from "@apollo/client";
import type { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import type { ChangeEvent } from "react";
import { LOGIN_USER } from "./login.queries";

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        alert("Failed to login! Please try again!");
        return;
      }
      setAccessToken(accessToken);

      void router.push("/markets");
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickJoin = (): void => {
    void router.push("/signup");
  };

  return (
    <>
      <LoginUi
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
        onClickJoin={onClickJoin}
      />
    </>
  );
}
