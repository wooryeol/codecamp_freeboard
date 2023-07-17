import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 영문, 숫자, 특수문자(@$!%*?&)를 포함한 8 ~ 16자리로 입력해주세요.")
    .max(16, "비밀번호는 영문, 숫자, 특수문자(@$!%*?&)를 포함한 8 ~ 16자리로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자(@$!%*?&)를 포함한 8 ~ 16자리로 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자(@$!%*?&)를 포함한 8 ~ 16자리로 입력해주세요."
    )
    .required(),
  email: yup
    .string()
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "올바은 이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요."),
  //
  //
  // required: yup.string().required("필수 입력사항입니다.."),
  // // price: yup.string().required("판매 가격을 입력해주세요."),
  // // productContents: yup.string().required("상품설명을 적어주세요."),
  // tag: yup.string().required("최소 한개의 태그를 입력해주세요."),
});

export const schema3 = yup.object({
  name: yup.string().required("상품명을 작성해주세요."),
  remarks: yup.string().required("상품요약을 작성해주세요."),
  contents: yup.string().required("상품을 설명해주세요."),
  price: yup.number().required("판매 가격을 입력해주세요."),
  address: yup.string(),
  tags: yup.string(),
});
