import { HttpStatus } from 'supporting/api'

export type BaseResponse = SuccessResponse | ErrorResponse

type BaseResponseUnion<Type extends 'success' | 'error', D> = {
  type: Type
  data: D
}

type SuccessResponse = BaseResponseUnion<
  'success',
  SuccessResponseData<unknown>
>

type SuccessResponseData<T> = {
  data: T
}

type ErrorResponse = BaseResponseUnion<'error', ErrorResponseData>

export type ErrorResponseData = {
  status: HttpStatus
  message: string
  detail?: string
}
