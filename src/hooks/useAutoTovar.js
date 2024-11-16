import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useAutoTovar = () => {
  return (
   useQuery({
    queryKey: ['autoTovar'],
    queryFn:()=> request.get("/steeringWheel").then((res) => res.data),
    onError: (data) => {
      toast.error(data.response.data.message);
     },
   })
  )
}
