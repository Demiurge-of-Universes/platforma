import { HttpStatus } from 'supporting/api/constants'
import { ErrorResponseData, User } from 'supporting/types'

export const mockUser: User = {
  id: '',
  name: '',
}

export const mockError: ErrorResponseData = {
  status: HttpStatus.FORBIDDEN,
  message: 'error find user',
}
