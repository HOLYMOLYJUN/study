import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import apiClient from "@/utils/axios";

type TUseMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, Error, TVariables>,
  "mutationFn"
>;

export function useCustomMutation<TData, TVariables = unknown>(
  url: string,
  method: "POST" | "PUT" | "DELETE" | "PATCH" = "POST",
  options?: TUseMutationOptions<TData, TVariables>
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: async (variables) => {
      const response = await apiClient.request<TData>({
        url,
        method,
        data: variables,
      });
      return response.data;
    },
    ...options,
  });
}

