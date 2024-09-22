import { Skeleton as SkeletonUI } from 'antd'

import { SkeletonProps } from './index.types'

const DEFAULT_ROWS = 1

export const Skeleton = (props: SkeletonProps) => {
  const { rows = DEFAULT_ROWS } = props

  return <SkeletonUI active paragraph={{ rows }} title={false} round />
}
