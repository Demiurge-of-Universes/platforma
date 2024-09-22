import {
  SUCCESS_GET_USER_RESPONSE,
  ERROR_GET_USER_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'
import { User } from 'supporting/types'

import { mockError, mockUser } from './mock'

import { API_USER_PATH } from '../../../constants'
import { http } from '../../../http'

export const getUserResponse = (): Promise<User> => {
  if (IS_MOCK_API) {
    return new Promise((resolve, reject) => {
      if (SUCCESS_GET_USER_RESPONSE) resolve(mockUser)

      if (ERROR_GET_USER_RESPONSE) reject(mockError)
    })
  }

  return http.get<User>(API_USER_PATH)
}
