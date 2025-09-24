import { useQuery } from "@tanstack/react-query";
import { getUser } from "../server/users";

export function useGetUser() {
  return useQuery({
    queryFn: async () => await getUser(),
    queryKey: ["user"],
  });
}
