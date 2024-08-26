import { useToast } from '@/composables/useToast'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { updateSetting as updateSettingApi } from '@/services/apiSettings'
import { FETCH_SETTINGS } from '@/keys/query-keys'

export function useUpdateSetting() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully edited')
      queryClient.invalidateQueries({
        queryKey: [FETCH_SETTINGS]
      })
    },
    onError: (error) => toast.error(error.message)
  })

  return { updateSetting, isUpdating }
}
