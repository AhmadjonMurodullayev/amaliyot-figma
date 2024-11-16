import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'
import { toast } from 'react-toastify'

export const useGetAll = (id) => {
  return (
    useQuery({
      queryKey: ['AllData',id],
      queryFn: ()=> request.get(`all/${id}`).then((res) => res.data),
      onError: (data) => {
        toast.error(data.response.data.message);
       },
    })
  )
}
