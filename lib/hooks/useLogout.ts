import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../server/users";

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      await queryClient.removeQueries();
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
}
