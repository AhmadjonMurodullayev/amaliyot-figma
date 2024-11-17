import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { toast } from "react-toastify";
import { saveState } from "../config/store";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("userData", data);
      toast.success(data.message);
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
