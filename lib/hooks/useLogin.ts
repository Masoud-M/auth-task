import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAction } from "../server/users";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginAction,
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
}
