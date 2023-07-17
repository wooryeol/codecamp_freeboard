import { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";

export const WithAuth =
  // prettier-ignore
  // eslint-disable-next-line @typescript-eslint/ban-types
  (Component: ComponentType) => <P extends {}>(props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능합니당");
        void router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };
