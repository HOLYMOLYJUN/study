import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import apiClient from "@/utils/axios";

type TUseQueryOptions<T> = Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;

export function useCustomQuery<T>(
  queryKey: string[],
  url: string,
  options?: TUseQueryOptions<T>
) {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const response = await apiClient.get<T>(url);
      return response.data;
    },
    ...options,
  });
}

