// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TradesAPI from './trades';
import * as AccountsAPI from './accounts';

export class Trades extends APIResource {
  /**
   * Get trade a trade by its unique trade ID.
   */
  retrieve(
    accountId: string,
    tradeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountsAPI.Trade> {
    return this._client.get(`/accounts/${accountId}/trades/${tradeId}`, options);
  }

  /**
   * List trades for a given account for the current trading day.
   */
  list(
    accountId: string,
    query?: TradeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<TradeListResponse>;
  list(
    accountId: string,
    query: TradeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/trades`, { query, ...options });
  }
}

export interface TradeListResponse {
  data: Array<AccountsAPI.Trade>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
}

export interface TradeListParams {
  /**
   * Number of trades to return per page.
   */
  page_size?: number;

  /**
   * Cursor for the page to return.
   */
  page_token?: string;
}

export namespace Trades {
  export import TradeListResponse = TradesAPI.TradeListResponse;
  export import TradeListParams = TradesAPI.TradeListParams;
}
