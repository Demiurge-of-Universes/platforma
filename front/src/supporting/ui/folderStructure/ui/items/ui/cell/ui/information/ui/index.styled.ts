import { styled } from 'styled-components'

type IsExpand = {
  isExpand: boolean
}

export const InformationWrapper = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`

export const InformationExpandBlock = styled.div<IsExpand>`
  width: 20px;
  height: 20px;

  cursor: ${({ isExpand }) => (isExpand ? 'pointer' : 'default')};

  svg {
    width: 18px;
    height: 18px;
  }
`

export const InformationTitle = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  cursor: pointer;
`
