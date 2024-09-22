import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { appState } from 'settings/state'
import { getUserResponse } from 'supporting/api'
import { ROUTE_AUTH_PATH, ROUTE_MAIN_HOME_PATH } from 'supporting/constants'

export const useInitData = () => {
  const navigate = useNavigate()

  const [isLoadingInitData, setIsLoadingInitData] = useState(true)

  const cleanUser = appState.userState(state => state.cleanUser)
  const setUser = appState.userState(state => state.setUser)
  const isAuth = appState.userState(state => state.getIsAuth())

  useEffect(() => {
    setIsLoadingInitData(true)
    getUserResponse()
      .then(d => {
        setUser(d)
        navigate(ROUTE_MAIN_HOME_PATH)
      })
      .catch(() => {
        navigate(ROUTE_AUTH_PATH)
        cleanUser()
      })
      .finally(() => setIsLoadingInitData(false))
  }, [isAuth])

  return { isLoadingInitData }
}
