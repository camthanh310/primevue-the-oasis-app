import { FETCH_SETTINGS } from '@/keys/query-keys'
import { getSettings } from '@/services/apiSettings'
import { useQuery } from '@tanstack/vue-query'

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings
  } = useQuery({
    queryKey: [FETCH_SETTINGS],
    queryFn: getSettings
  })

  return { isLoading, error, settings }
}
