import type { RouteRecordRaw } from 'vue-router'

const routesName = ['home', 'dashboard', 'bookings', 'cabins', 'users', 'settings'] as const

export type RouteNameType = (typeof routesName)[number]

export type RouteRaw = RouteRecordRaw & {
  name?: RouteNameType
}
