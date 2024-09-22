/* eslint-disable no-useless-catch */
import axios, { AxiosError, type AxiosRequestConfig } from 'axios'
import { ErrorResponseData } from 'supporting/types'

import { HttpStatus, API_BASE_PATH } from '../constants'

const RESPONSE_TIMEOUT = 60000

class Http {
  _axios
  private _apiUrl = API_BASE_PATH

  constructor() {
    this._axios = axios.create({
      baseURL: this._apiUrl,
      withCredentials: true,
      timeout: RESPONSE_TIMEOUT,
      timeoutErrorMessage: 'Timeout expired' || undefined,
    })

    this._axios.interceptors.request.use(
      function (config) {
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )

    this._axios.interceptors.response.use(
      function (response) {
        const { data } = response

        return data
      },
      function (error: AxiosError<ErrorResponseData, ErrorResponseData>) {
        const { response, status = HttpStatus.NOT_FOUND } = error

        const { data } = response || {}

        const { message = '', detail = '' } = data || {}

        const responseError: ErrorResponseData = { message, detail, status }

        return Promise.reject(responseError)
      },
    )
  }

  async post<R = unknown, B = unknown>(
    url: string,
    body: B,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<R> {
    try {
      return await this._axios.post<B, R>(url, body, { ...{ headers } })
    } catch (e) {
      throw e
    }
  }

  async patch<R = unknown, B = unknown>(url: string, body: B): Promise<R> {
    try {
      return await this._axios.patch<B, R>(url, body)
    } catch (e: any) {
      throw e
    }
  }

  async put<R = unknown, B = unknown>(url: string, body: B): Promise<R> {
    try {
      return await this._axios.put<B, R>(url, body)
    } catch (e) {
      throw e
    }
  }

  async delete<R = unknown>(url: string): Promise<R> {
    try {
      return await this._axios.delete(url)
    } catch (e) {
      throw e
    }
  }

  async get<R = unknown, B = unknown>(url: string): Promise<R> {
    try {
      return await this._axios.get<B, R>(url)
    } catch (e: any) {
      throw e
    }
  }
}

export const http = new Http()
