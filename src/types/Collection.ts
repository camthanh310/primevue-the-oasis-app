import type { Database } from './Database.Types'

export type SettingType = Database['public']['Tables']['settings']['Row']
export type UpdateSettingType = Database['public']['Tables']['settings']['Update']
