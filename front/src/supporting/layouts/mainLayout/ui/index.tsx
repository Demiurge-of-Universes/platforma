import { useState } from 'react'

import { Header } from 'components/header'
import { SideBar } from 'components/sidebar'
import { Outlet } from 'react-router-dom'

import * as Styled from './index.styled'

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleOpenSideBar = () => setCollapsed(prev => !prev)

  return (
    <Styled.LayoutWrapper>
      <Styled.LayoutBlock>
        <Header {...{ handleOpenSideBar }} />
        <Styled.LayoutBlock>
          <SideBar {...{ handleOpenSideBar, collapsed }} />
          <Styled.LayoutContent>{<Outlet />}</Styled.LayoutContent>
        </Styled.LayoutBlock>
        <Styled.LayoutFooter>Footer</Styled.LayoutFooter>
      </Styled.LayoutBlock>
    </Styled.LayoutWrapper>
  )
}
