import { keyframes, styled } from 'styled-components'

const opacity = keyframes`
  0% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.4;
  }
`

export const InitWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: fill;

    animation: ${opacity} 2s linear infinite;
  }
`

export const InitWrapperContent = styled.div`
  width: 100vw;
  height: 100vh;
`
