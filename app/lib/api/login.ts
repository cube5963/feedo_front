import { gql } from "@apollo/client"
import client from "../apolloClient";

const LOGIN = gql`
mutation Login($loginid: String!, $password: String!) {
  login(loginInput: { loginid: $loginid, password: $password }) {
    accessToken
    loginid
  }
}
`;


export async function login(loginid: string, password: string) {
  const { data } = await client.mutate({
    mutation: LOGIN,
    variables: { loginid, password }
  })
  document.cookie = `loginid=${data.login.loginid}; path=/;`;
  console.log(data)
}