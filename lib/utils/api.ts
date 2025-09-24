import { loginAction, signupAction } from "../server/users";

export async function signupRequest(values: {
  email: string;
  password: string;
}) {
  return signupAction(values);
}

export async function loginRequest(values: {
  email: string;
  password: string;
}) {
  return loginAction(values);
}
