import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { saveState } from "../config/store";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
    onSuccess: (data) => {
      toast.success(data.message);
      saveState("userData", data);
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
