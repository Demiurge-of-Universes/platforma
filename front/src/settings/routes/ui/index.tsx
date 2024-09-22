import { Route, Routes, Navigate } from 'react-router-dom'
import {
  ROUTE_AUTH_PATH,
  ROUTE_BASE_PATH,
  ROUTE_MAIN_PATH,
  ROUTE_MAIN_HOME_PATH,
} from 'supporting/constants'

import { AuthPage } from 'pages/auth'
import { MainHomePage, MainPage } from 'pages/main'

import { InitWrapper } from './initWrapper'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path={ROUTE_BASE_PATH} element={<InitWrapper />}>
        <Route path={ROUTE_AUTH_PATH} element={<AuthPage />} />
        <Route path={ROUTE_MAIN_PATH} element={<MainPage />}>
          <Route path={ROUTE_MAIN_HOME_PATH} element={<MainHomePage />} />
        </Route>
      </Route>

      <Route path="/*" element={<Navigate to={ROUTE_BASE_PATH} replace />} />
    </Routes>
  )
}
