import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { userState } from 'settings/state/user'
import { ROUTE_AUTH_PATH } from 'supporting/constants'

export const useRedirect = () => {
  const { pathname } = useLocation()

  const navigate = useNavigate()

  const isAuth = userState.getState().isAuth

  useEffect(() => {
    const isAuthPath = pathname === ROUTE_AUTH_PATH

    if (!isAuthPath && !isAuth) {
      navigate(ROUTE_AUTH_PATH)
    }
  }, [pathname, isAuth])
}
