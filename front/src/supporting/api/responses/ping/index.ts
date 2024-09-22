import {
  SUCCESS_PING_RESPONSE,
  ERROR_PING_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'

import { mockError } from './mock'

import { API_PING_PATH } from '../../constants'
import { http } from '../../http'

export const pingResponse = () => {
  if (IS_MOCK_API) {
    return new Promise((resolve, reject) => {
      if (SUCCESS_PING_RESPONSE) resolve(mockError)

      if (ERROR_PING_RESPONSE) reject(mockError)
    })
  }

  return http.get(API_PING_PATH)
}
