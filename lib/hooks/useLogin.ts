import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "../utils/api";
import { useRouter } from "next/navigation";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      loginRequest(values),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      router.push("/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      router.push("/error");
    },
  });
}
