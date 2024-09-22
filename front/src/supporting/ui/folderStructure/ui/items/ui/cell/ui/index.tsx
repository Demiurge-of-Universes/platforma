import { Information } from './information'

import { CellProps } from './index.types'

import * as Styled from './index.styled'

export const Cell = (props: CellProps) => {
  const { information } = props

  return (
    <Styled.CellWrapper>
      <Information {...information} />
    </Styled.CellWrapper>
  )
}
