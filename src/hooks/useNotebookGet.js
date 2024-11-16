import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useNotebookGet = () => {
  return useQuery({
    queryKey: ["notebook"],
    queryFn: () => request.get("/notebook").then((res) => res.data),
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
};
