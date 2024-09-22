import type { Structure } from 'supporting/types'

export type ItemsProps = {
  items: Structure['items']
  isLoadingItems?: boolean
  handleClickRow: (id: string) => void
  handleClickExpand: (id?: string) => void
  name?: string
  iconName?: string
}
