import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useCatalogGet = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
