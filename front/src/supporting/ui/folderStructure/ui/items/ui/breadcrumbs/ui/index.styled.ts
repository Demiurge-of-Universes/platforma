import { styled } from 'styled-components'

export const BreadcrumbsWrapper = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;

  svg {
    width: 18px;
    height: 18px;
  }

  p {
    cursor: 'pointer';
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    cursor: pointer;
  }
`
