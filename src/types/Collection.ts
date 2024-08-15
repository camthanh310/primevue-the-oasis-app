import type { Database, Tables } from './Database.Types'

export type Schema = Database['public']['Tables']

export type SettingRowType = Partial<Tables<'settings'>>
export type Setting = Exclude<Array<keyof SettingRowType>[number], 'created_at' | 'id'>

export type CabinRowType = Database['public']['Tables']['cabins']['Row']
export type CabinInsertType = Database['public']['Tables']['cabins']['Insert']
export type CabinType = Partial<Tables<'cabins'>>

export interface CabinImage {
  name: string
}
type CabinImageType = {
  image?: string | null | CabinImage
}
export type Cabin = Omit<CabinType, 'image'> & CabinImageType
