import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useCatalog = (name = "") => {
  return (
    useQuery({
        queryKey: ['catalog',name],
        queryFn: ()=> request.get(`${name}`).then((res) => res.data),
        onError: (data) => {
            toast.error(data.response.data.message);
        }
    })
  )
}
