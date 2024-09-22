import { withMockError, withMockSucces } from 'supporting/api/withMock'
import {
  SUCCESS_AUTH_RESPONSE,
  ERROR_AUTH_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'
import { AuthDTO } from 'supporting/dto'
import { ErrorResponseData } from 'supporting/types'

import { mockError } from './mock'

import { API_AUTH_PATH } from '../../constants'
import { http } from '../../http'

export const authResponse = (values: AuthDTO) => {
  if (IS_MOCK_API && SUCCESS_AUTH_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (IS_MOCK_API && ERROR_AUTH_RESPONSE)
    return withMockError<ErrorResponseData>(mockError)

  return http.post<undefined, AuthDTO>(API_AUTH_PATH, values)
}
