import { signupAction } from "../server/users";

export async function signupRequest(values: {
  email: string;
  password: string;
}) {
  return signupAction(values);
}
