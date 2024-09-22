import { MenuOutlined } from 'supporting/icons'
import { IconButton } from 'supporting/ui/iconButton'

import { userLogout } from 'features/userLogout'

import { HeaderProps } from './index.types'

import * as Styled from './index.styled'

export const Header = (props: HeaderProps) => {
  const { handleOpenSideBar } = props

  return (
    <Styled.HeaderWrapper>
      <IconButton icon={<MenuOutlined />} onClick={() => handleOpenSideBar()} />
      {userLogout()}
    </Styled.HeaderWrapper>
  )
}
