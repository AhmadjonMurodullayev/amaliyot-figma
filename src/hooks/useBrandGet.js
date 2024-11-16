import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useBrandGet = () => {
  return useQuery({
    queryKey: ["brand"],
    queryFn: () => request.get("/brand").then((res) => res.data),
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
