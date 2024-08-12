import { useToast as useToastService } from 'primevue/usetoast'

export function useToast() {
  const toast = useToastService()

  function success(message: string) {
    toast.add({
      severity: 'success',
      summary: message,
      life: 2000
    })
  }

  function error(message: string) {
    toast.add({
      severity: 'error',
      summary: message,
      life: 4000
    })
  }

  return { success, error }
}
