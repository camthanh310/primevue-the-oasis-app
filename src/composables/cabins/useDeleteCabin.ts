import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from '@/composables/useToast'
import { deleteCabin as deleteCabinApi } from '@/services/apiCabin'
import { FETCH_CABINS } from '@/keys/query-keys'

export function useDeleteCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id: number) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success('Cabin successfully deleted!')

      queryClient.invalidateQueries({
        queryKey: [FETCH_CABINS]
      })
    },
    onError: (error) => toast.error(error.message)
  })

  return { isDeleting, deleteCabin }
}
