import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }

  @font-face {
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: 300;
    src: url("../src/fonts/NanumGothicLight.woff2") format("woff2"),
      url("../src/fonts/NanumGothicLight.woff") format("woff"),
      url("../src/fonts/NanumGothicLight.otf") format("otf");
  }
`;
