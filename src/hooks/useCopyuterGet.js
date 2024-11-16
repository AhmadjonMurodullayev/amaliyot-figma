import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useCopyuterGet = () => {
  return useQuery({
    queryKey: ["copyuter"],
    queryFn: () => request.get("/computers").then((res) => res.data),
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
