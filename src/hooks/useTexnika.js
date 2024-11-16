import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useTexnika = () => {
  return (
  useQuery({
    queryKey: ['texnika'],
    queryFn:()=> request.get("/washingM").then((res) => res.data),  
    onError: (data) => {
      toast.error(data.response.data.message);
     },
  })
  )
}
