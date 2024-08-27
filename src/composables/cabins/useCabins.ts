import { FETCH_CABINS } from '@/keys/query-keys'
import { getCabins } from '@/services/apiCabin'
import { useQuery } from '@tanstack/vue-query'

export function useCabins() {
  const {
    data: cabins,
    error,
    isLoading
  } = useQuery({
    queryKey: [FETCH_CABINS],
    queryFn: getCabins
  })

  return { cabins, error, isLoading }
}
