export type Structure = Partial<StructureItemsData> & {
  items: StructureItemsData[]
}

type StructureItemsData = {
  id: string
  name: string
  iconName: string
  isMore?: boolean
}
