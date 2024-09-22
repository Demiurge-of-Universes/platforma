import { getIcon } from '../../../../../lib/getIcon'

import { InformationProps } from './index.types'

import * as Styled from './index.styled'

export const Information = (props: InformationProps) => {
  const {
    id,
    name,
    iconName,
    handleClick,
    isExpand = false,
    handleClickExpand,
  } = props

  return (
    <Styled.InformationWrapper>
      <Styled.InformationExpandBlock
        onClick={() => isExpand && handleClickExpand(id)}
        {...{ isExpand }}>
        {getIcon(iconName)}
      </Styled.InformationExpandBlock>
      <Styled.InformationTitle onClick={() => handleClick(id)}>
        {name}
      </Styled.InformationTitle>
    </Styled.InformationWrapper>
  )
}
