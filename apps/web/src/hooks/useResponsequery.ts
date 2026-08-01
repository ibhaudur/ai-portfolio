import { useQuery, useMutation } from "@tanstack/react-query";
import api from "../service/api";

interface Request {
  key: string;
  url: string;
}
export function useFetchData({ key, url }: Request) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get(url);
      return data;
    },
  });
}

export function usePostData({ key, url }: Request) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const config = { headers: { "Content-Type": "application/json" } };
      try {
        const response = await api.post(url, data, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
}
export function usePutData({ key, url }: Request) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const config = { headers: { "Content-Type": "application/json" } };
      try {
        const response = await api.put(url, data, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
}
export function usePostFormData({ key, url }: Request) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (formData) => {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      try {
        const response = await api.post(url, formData, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
}
export function useDeleteData({ key, url }: Request) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (id: String) => {
      const { data } = await api.delete(`${url}/${id}`);
      return data;
    },
  });
}
