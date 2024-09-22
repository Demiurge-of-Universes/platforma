import { useState } from 'react'

import { Auth } from 'components/auth'
import { Register } from 'components/register'

import * as Styled from './index.styled'

export const AuthBlock = () => {
  const [pageType, setPageType] = useState('auth')

  const changePageType = () => {
    if (pageType === 'auth') return setPageType('register')

    setPageType('auth')
  }

  return (
    <Styled.AuthBlockWrapper>
      {pageType === 'auth' ? (
        <Auth {...{ changePageType }} />
      ) : (
        <Register {...{ changePageType }} />
      )}
    </Styled.AuthBlockWrapper>
  )
}
