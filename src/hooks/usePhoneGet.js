import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const usePhoneGet = () => {
  return (
    useQuery({
      queryKey: ['phone'],
      queryFn : ()=> request.get("/phones").then((res) => res.data),
      onError: (data) => {
        toast.error(data.response.data.message);
       },
    })
  )
}
