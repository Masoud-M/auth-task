import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupRequest } from "../utils/api";

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      signupRequest(values),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
}
