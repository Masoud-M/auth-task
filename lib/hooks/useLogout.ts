import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logoutAction } from "../server/users";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => logoutAction(),
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      router.push("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
      router.push("/error");
    },
  });
}
