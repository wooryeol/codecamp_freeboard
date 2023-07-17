import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

const Wrapper = styled.div`
  text-align: right;
  padding-right: 20px;
  height: 50px;
  line-height: 50px;
  background-color: grey;
`;

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    _id
    name
    userPoint {
      amount
    }
  }
`;

export default function LayoutHeader(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
  console.log(data);

  return <Wrapper></Wrapper>;
}
