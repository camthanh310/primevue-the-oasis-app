import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from '@/composables/useToast'
import { createEditCabin } from '@/services/apiCabin'
import type { CabinRowType } from '@/types/Collection'
import { FETCH_CABINS } from '@/keys/query-keys'

export function useEditCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }: { newCabinData: CabinRowType; id: number }) =>
      createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited')
      queryClient.invalidateQueries({ queryKey: [FETCH_CABINS] })
    },
    onError: (err) => toast.error(err.message)
  })

  return { isEditing, editCabin }
}
