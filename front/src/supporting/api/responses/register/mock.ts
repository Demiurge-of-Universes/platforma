import { HttpStatus } from 'supporting/api/constants'
import { ErrorResponseData } from 'supporting/types'

export const mockError: ErrorResponseData = {
  status: HttpStatus.FORBIDDEN,
  message: 'error with register',
}
