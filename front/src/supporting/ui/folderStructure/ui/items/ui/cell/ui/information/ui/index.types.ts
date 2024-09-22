export type InformationProps = {
  id: string
  isExpand?: boolean
  iconName?: string
  name: string
  handleClick: (id: string) => void
  handleClickExpand: (id: string) => void
}
