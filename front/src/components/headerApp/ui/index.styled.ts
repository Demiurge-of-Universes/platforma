import { Layout } from 'antd'
import { styled } from 'styled-components'

const { Header } = Layout

export const LayoutHeaderWrapper = styled(Header)`
  padding: 8px 16px;

  width: 100%;
  height: 70px;

  background-color: #fff;
  border-bottom: 1px solid grey;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LayoutHeaderActions = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`
