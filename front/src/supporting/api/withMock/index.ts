import { DELAY_MOCK_API } from 'supporting/constants'

export const withMockSucces = <T>(data: T): Promise<T> => {
  return new Promise<T>(resolve => {
    setTimeout(() => {
      return resolve(data)
    }, DELAY_MOCK_API)
  })
}

export const withMockError = <T>(data: T): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      return reject(data)
    }, DELAY_MOCK_API)
  })
}
