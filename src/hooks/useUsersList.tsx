import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

export const useUsersList = () => {
  const usersListQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
  const usersList = usersListQuery.data || [];
  const isLoading = usersListQuery.isLoading;
  const isError = usersListQuery.isError;

  return { usersList, isLoading, isError };
};
