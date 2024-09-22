import { getIcon } from '../../../lib/getIcon'

import { BreadcrumbsProps } from './index.types'

import * as Styled from './index.styled'

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { name, iconName, handleClickExpand } = props

  return (
    <Styled.BreadcrumbsWrapper>
      {name && iconName && (
        <>
          {getIcon(iconName)}
          <p onClick={() => handleClickExpand()}>{name}</p>
        </>
      )}
    </Styled.BreadcrumbsWrapper>
  )
}
