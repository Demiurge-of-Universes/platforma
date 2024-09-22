import { Drawer, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HOME_PATH } from 'supporting/constants'

import { navigateItems } from '../config/navigateItems'

import { SideBarProps } from './index.types'

import * as Styled from './index.styled'

export const SideBar = (props: SideBarProps) => {
  const { collapsed, handleOpenSideBar } = props

  const navigate = useNavigate()

  const handleChoiceMenu: Required<MenuProps>['onClick'] = ({ key }) => {
    navigate(key)
    handleOpenSideBar()
  }

  return (
    <Drawer
      placement="left"
      title="Navigation"
      onClose={handleOpenSideBar}
      open={collapsed}>
      <Styled.SideBarWrapper>
        <Menu
          onClick={handleChoiceMenu}
          style={{ width: '100%' }}
          defaultSelectedKeys={[ROUTE_HOME_PATH]}
          mode="inline"
          items={navigateItems}
        />
      </Styled.SideBarWrapper>
    </Drawer>
  )
}
