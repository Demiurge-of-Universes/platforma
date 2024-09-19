/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HttpClient, RequestParams } from './http-client';

export class UserController<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags userController
   * @name RegisterUser
   * @request POST:/user
   */
  registerUser = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/user`,
      method: 'POST',
      ...params,
    });
}
