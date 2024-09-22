import { styled } from 'styled-components'

export const SideBarWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;

  .ant-menu-root {
    border: none !important;
  }
`
