import { withMockError, withMockSucces } from 'supporting/api/withMock'
import {
  SUCCESS_REGISTER_RESPONSE,
  ERROR_REGISTER_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'
import { RegisterDTO } from 'supporting/dto'
import { ErrorResponseData } from 'supporting/types'

import { mockError } from './mock'

import { API_REGISTER_PATH } from '../../constants'
import { http } from '../../http'

export const registerResponse = (body: RegisterDTO) => {
  if (IS_MOCK_API && SUCCESS_REGISTER_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (IS_MOCK_API && ERROR_REGISTER_RESPONSE)
    return withMockError<ErrorResponseData>(mockError)

  return http.post<undefined, RegisterDTO>(API_REGISTER_PATH, body)
}
