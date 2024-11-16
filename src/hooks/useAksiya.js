import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useAksiya = () => {
  return (
    useQuery({
      queryKey: ['ads'],
      queryFn: ()=> request.get("/ads").then((res) => res.data),
      onError: (data) => {
        toast.error(data.response.data.message);
       },
    })
  )
}
