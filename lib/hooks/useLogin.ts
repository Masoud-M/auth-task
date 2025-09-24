import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "../utils/api";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      loginRequest(values),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
}
