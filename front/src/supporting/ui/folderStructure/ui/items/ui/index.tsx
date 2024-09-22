import { map } from 'lodash'
import { Skeleton } from 'supporting/ui/skeleton'

import { Breadcrumbs } from './breadcrumbs'
import { Cell } from './cell'

import type { ItemsProps } from './index.types'

import * as Styled from './index.styled'

const DEFAULT_SKELETON_ROWS = 10

export const Items = (props: ItemsProps) => {
  const {
    isLoadingItems,
    name,
    iconName,
    items,
    handleClickRow,
    handleClickExpand,
  } = props

  return (
    <Styled.ItemsWrapper>
      <Breadcrumbs {...{ handleClickExpand, name, iconName }} />
      <>
        {isLoadingItems ? (
          <Styled.ItemsLoader>
            <Skeleton rows={DEFAULT_SKELETON_ROWS} />
          </Styled.ItemsLoader>
        ) : (
          <Styled.ItemsCellsBlock>
            {map(items, item => (
              <Cell
                key={item.id}
                information={{
                  id: item.id,
                  name: item.name,
                  iconName: item.iconName,
                  isExpand: !!item.isMore,
                  handleClick: handleClickRow,
                  handleClickExpand,
                }}
              />
            ))}
          </Styled.ItemsCellsBlock>
        )}
      </>
    </Styled.ItemsWrapper>
  )
}
