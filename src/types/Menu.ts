import type { Component } from 'vue'
import type { RouteNameType } from '@/types/Router'

export interface Menu {
  href: RouteNameType
  name: string
  icon: Component
}

export interface HeaderMenu {
  value: string
  icon: Component
  action: () => void
}
