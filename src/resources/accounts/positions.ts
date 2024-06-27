// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PositionsAPI from './positions';
import * as AccountsAPI from './accounts';

export class Positions extends APIResource {
  /**
   * Get current positions for a given account for a given symbol.
   */
  retrieve(
    accountId: string,
    symbol: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountsAPI.Position> {
    return this._client.get(`/accounts/${accountId}/positions/${symbol}`, options);
  }

  /**
   * List current positions for a given account.
   */
  list(
    accountId: string,
    query?: PositionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PositionListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PositionListResponse>;
  list(
    accountId: string,
    query: PositionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PositionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/positions`, { query, ...options });
  }
}

export interface PositionListResponse {
  data: Array<AccountsAPI.Position>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
}

export interface PositionListParams {
  /**
   * Number of positions to return per page.
   */
  page_size?: number;

  /**
   * Cursor for the page to return.
   */
  page_token?: string;
}

export namespace Positions {
  export import PositionListResponse = PositionsAPI.PositionListResponse;
  export import PositionListParams = PositionsAPI.PositionListParams;
}
