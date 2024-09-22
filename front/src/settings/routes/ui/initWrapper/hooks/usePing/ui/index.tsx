import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { appState } from 'settings/state'
import { pingResponse } from 'supporting/api'
import { PING_TIMER, ROUTE_AUTH_PATH } from 'supporting/constants'

export const usePing = () => {
  const navigate = useNavigate()

  const isAuth = appState.userState(state => state.getIsAuth())

  useEffect(() => {
    const interval = setInterval(() => {
      pingResponse().catch(() => navigate(ROUTE_AUTH_PATH))
    }, PING_TIMER)

    if (!isAuth && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAuth])
}
