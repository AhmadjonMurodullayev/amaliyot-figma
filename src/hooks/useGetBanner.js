import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useGetBanner = () => {
  return (
    useQuery({
      queryKey: ['banner'],
      queryFn: ()=> request.get("/banners").then((res) => res.data),
      onError: (data) => {
        toast.error(data.response.data.message);
       },
    })
  )
}
