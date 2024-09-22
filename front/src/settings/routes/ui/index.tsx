import { Route, Routes, Navigate } from 'react-router-dom'
import {
  ROUTE_AUTH_PATH,
  ROUTE_BASE_PATH,
  ROUTE_COMMENT_HOME_PATH,
  ROUTE_HOME_PATH,
  ROUTE_PROFILE_HOME_PATH,
} from 'supporting/constants'
import { MainLayout } from 'supporting/layouts'

import { AuthPage } from 'pages/auth'
import { CommentPage } from 'pages/comment'
import { HomePage } from 'pages/home'
import { ProfilePage } from 'pages/profile'

import { InitWrapper } from './initWrapper'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path={ROUTE_BASE_PATH} element={<InitWrapper />}>
        <Route path={ROUTE_AUTH_PATH} element={<AuthPage />} />
        <Route path="" element={<MainLayout />}>
          <Route path={ROUTE_HOME_PATH} element={<HomePage />} />
          <Route path={ROUTE_PROFILE_HOME_PATH} element={<ProfilePage />} />
          <Route path={ROUTE_COMMENT_HOME_PATH} element={<CommentPage />} />
        </Route>
      </Route>

      <Route path="/*" element={<Navigate to={ROUTE_BASE_PATH} replace />} />
    </Routes>
  )
}
