import { Outlet } from 'react-router-dom'
import { Loader } from 'supporting/ui/loader'

import { useInitData, usePing, useRedirect } from '../hooks'

import * as Styled from './index.styled'

export const InitWrapper = () => {
  const { isLoadingInitData } = useInitData()
  usePing()
  useRedirect()

  if (isLoadingInitData) {
    return (
      <Styled.InitWrapper>
        <Loader />
      </Styled.InitWrapper>
    )
  }

  return (
    <Styled.InitWrapperContent>
      <Outlet />
    </Styled.InitWrapperContent>
  )
}
