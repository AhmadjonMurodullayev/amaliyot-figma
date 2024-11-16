import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useSport = () => {
  return (
    useQuery({
      queryKey: ['sport'],
      queryFn: ()=> request.get("/sport").then((res) => res.data),
      onError: (data) => {
        toast.error(data.response.data.message);
       },
    })
  )
}
