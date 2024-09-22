import { Actions } from './actions'
import { Items } from './items'

import { FolderStructureProps } from './index.types'

export const FolderStructure = (props: FolderStructureProps) => {
  const { actions, items } = props

  return (
    <div>
      {actions && <Actions {...actions} />}
      <Items {...{ ...items }} />
    </div>
  )
}
