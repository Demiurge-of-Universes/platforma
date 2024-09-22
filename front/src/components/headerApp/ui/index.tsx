import { userLogout } from 'features/userLogout'

import * as Styled from './index.styled'

export const HeaderApp = () => {
  return (
    <Styled.LayoutHeaderWrapper>
      <Styled.LayoutHeaderActions>{userLogout()}</Styled.LayoutHeaderActions>
    </Styled.LayoutHeaderWrapper>
  )
}
