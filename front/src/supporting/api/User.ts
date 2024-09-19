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

export class User<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name DescriptionUser
   * @request DESCRIPTION:/user
   */
  descriptionUser = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/user`,
      method: 'DESCRIPTION',
      ...params,
    });
}
