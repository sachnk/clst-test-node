// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as LocateOrdersAPI from './locate-orders';
import * as AccountsAPI from './accounts';

export class LocateOrders extends APIResource {
  /**
   * Create locate order to borrow inventory for short-selling.
   */
  create(
    accountId: string,
    body: LocateOrderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountsAPI.LocateOrder> {
    return this._client.post(`/accounts/${accountId}/locate-orders`, { body, ...options });
  }

  /**
   * Get locate order by its unique locate order ID.
   */
  retrieve(
    accountId: string,
    locateOrderId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountsAPI.LocateOrder> {
    return this._client.get(`/accounts/${accountId}/locate-orders/${locateOrderId}`, options);
  }

  /**
   * Accept or decline locate order that has been offered.
   */
  update(
    accountId: string,
    locateOrderId: string,
    body: LocateOrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch(`/accounts/${accountId}/locate-orders/${locateOrderId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List all locate orders
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<LocateOrderListResponse> {
    return this._client.get(`/accounts/${accountId}/locate-orders`, options);
  }
}

export interface LocateOrderListResponse {
  data: Array<AccountsAPI.LocateOrder>;
}

export interface LocateOrderCreateParams {
  /**
   * The market participant where the locate will be sent.
   */
  mpid: string;

  /**
   * String representation of quantity.
   */
  quantity: string;

  /**
   * Your unique ID for this locate order.
   */
  reference_id: string;

  symbol: string;

  /**
   * Any additional comments for the locate request.
   */
  comments?: string;
}

export interface LocateOrderUpdateParams {
  /**
   * Accept or decline the locate order.
   */
  accept: boolean;
}

export namespace LocateOrders {
  export import LocateOrderListResponse = LocateOrdersAPI.LocateOrderListResponse;
  export import LocateOrderCreateParams = LocateOrdersAPI.LocateOrderCreateParams;
  export import LocateOrderUpdateParams = LocateOrdersAPI.LocateOrderUpdateParams;
}
