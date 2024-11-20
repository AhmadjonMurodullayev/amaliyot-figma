import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useUsersGet = () => {
  return useMutation({
    mutationFn: (data) => request.post("/users", data).then((res) => res.data),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
