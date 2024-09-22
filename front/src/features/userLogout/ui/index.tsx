import { appState } from 'settings/state'
import { LoginOutlined } from 'supporting/icons'
import { IconButton } from 'supporting/ui/iconButton'

export const userLogout = () => {
  const cleanUser = appState.userState(state => state.cleanUser)

  const handleLogOut = () => {
    cleanUser()
  }

  return <IconButton icon={<LoginOutlined />} onClick={() => handleLogOut()} />
}
