import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from './useToast'
import { createEditCabin } from '@/services/apiCabin'
import { FETCH_CABINS } from '@/keys/query-keys'

export function useCreateCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({ queryKey: [FETCH_CABINS] })
    },
    onError: (err) => toast.error(err.message)
  })

  return { createCabin, isCreating }
}
