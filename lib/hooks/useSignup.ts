import { signupAction } from "../server/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signupAction,
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
}
