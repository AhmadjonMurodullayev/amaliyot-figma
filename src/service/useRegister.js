import { toast } from "react-toastify";
import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
    return useMutation({
        mutationFn: (data) =>
            request.post("/register", data).then((res) => res.data),
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (data) => {
            toast.error(data.response.data.message);
        },
    });
};
