// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OrdersAPI from './orders';
import * as AccountsAPI from './accounts';

export class Orders extends APIResource {
  /**
   * Creates a new order and sends to our internal systems for execution. Note that a
   * successful call to this endpoint does not necessarily mean your order has been
   * accepted, e.g. a downstream venue might reject your order. You should therefore
   * utilize our WebSocket APIs to listen for changes in order lifecycle events.
   */
  create(
    accountId: string,
    body: OrderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderCreateResponse> {
    return this._client.post(`/accounts/${accountId}/orders`, { body, ...options });
  }

  /**
   * Get an order that was previously created.
   */
  retrieve(
    accountId: string,
    orderId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderRetrieveResponse> {
    return this._client.get(`/accounts/${accountId}/orders/${orderId}`, options);
  }

  /**
   * List orders for a given account for the current trading day, filtered on the
   * given query parameters.
   */
  list(
    accountId: string,
    query?: OrderListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<OrderListResponse>;
  list(
    accountId: string,
    query: OrderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/orders`, { query, ...options });
  }

  /**
   * Attempts to cancel all open orders for a given account. Cancelling an order
   * cannot be guaranteed as there might be in-flight executions.
   */
  delete(
    accountId: string,
    params?: OrderDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderDeleteResponse>;
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<OrderDeleteResponse>;
  delete(
    accountId: string,
    params: OrderDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(accountId, {}, params);
    }
    const { symbol, symbol_format } = params;
    return this._client.delete(`/accounts/${accountId}/orders`, {
      query: { symbol, symbol_format },
      ...options,
    });
  }

  /**
   * Attempts to cancel an existing order. Cancelling an order cannot be guaranteed
   * as there might be in-flight executions.
   */
  cancel(accountId: string, orderId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountId}/orders/${orderId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OrderCreateResponse {
  /**
   * An internally generated unique ID for this order.
   */
  order_id: string;
}

export interface OrderRetrieveResponse {
  order: AccountsAPI.Order;
}

export interface OrderListResponse {
  data: Array<AccountsAPI.Order>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
}

export interface OrderDeleteResponse {
  /**
   * Array of order IDs that were attempted to be cancelled.
   */
  data: Array<string>;
}

export interface OrderCreateParams {
  /**
   * The type of order, can be one of the following:
   *
   * - `limit`: A limit order will execute at-or-better than the limit price you
   *   specify
   * - `market`: An order that will execute at the prevailing market prices
   */
  order_type: 'limit' | 'market';

  /**
   * The maximum quantity to be executed.
   */
  quantity: string;

  /**
   * Buy, sell, sell-short indicator.
   */
  side: 'buy' | 'sell' | 'sell-short';

  /**
   * Strategy type used for execution, can be one of below. Note, we use sensible
   * defaults for strategy parameters at the moment. In future, we will provide a way
   * to provide specify these parameters.
   *
   * - `sor`: Smart order router
   * - `dark`: Dark pool
   * - `ap`: Arrival price
   * - `pov`: Percentage of volume
   * - `twap`: Time weighted average price
   * - `vwap`: Volume weighted average price
   *
   * For more information on these strategies, please refer to our
   * [documentation](https://docs.clearstreet.io/studio/docs/execution-strategies).
   */
  strategy_type: 'sor' | 'dark' | 'ap' | 'pov' | 'twap' | 'vwap';

  /**
   * The symbol this order is for. See `symbol_format` for supported symbol formats.
   */
  symbol: string;

  /**
   * The lifecycle enforcement of this order.
   *
   * - `day`: The order will exist for the duration of the current trading session
   * - `ioc`: The order will immediately be executed or cancelled
   * - `day-plus`: The order will exist only for the duration the current trading
   *   session plus extended hours, if applicable
   * - `at-open`: The order will exist only for the opening auction of the next
   *   session
   * - `at-close`: The order will exist only for the closing auction of the current
   *   session
   */
  time_in_force: 'day' | 'ioc' | 'day-plus' | 'at-open' | 'at-close';

  /**
   * If you're short-selling and using an away broker for a locate, provide the
   * broker name here.
   */
  locate_broker?: string;

  /**
   * The price to execute at-or-better.
   */
  price?: string;

  /**
   * An ID that you provide.
   */
  reference_id?: string;

  /**
   * Denotes the format of the provided `symbol` field.
   */
  symbol_format?: 'cms' | 'osi';
}

export interface OrderListParams {
  /**
   * Milliseconds since epoch timestamp. This will constrain the search for orders
   * created after this timestamp, inclusively. Timestamps for orders prior the
   * current trading day will be ignored.
   */
  from?: number;

  /**
   * Number of orders to return per page.
   */
  page_size?: number;

  /**
   * Cursor for the page to return.
   */
  page_token?: string;

  /**
   * Milliseconds since epoch timestamp. This will constrain the search for orders
   * created before this timestamp, inclusively. Timestamps for orders beyond the
   * current trading day will be ignored.
   */
  to?: number;
}

export interface OrderDeleteParams {
  /**
   * Cancel orders only for this specific symbol. If this is omitted, all open orders
   * will be cancelled.
   */
  symbol?: string;

  /**
   * Format of the provided symbol.
   */
  symbol_format?: 'cms' | 'osi';
}

export namespace Orders {
  export import OrderCreateResponse = OrdersAPI.OrderCreateResponse;
  export import OrderRetrieveResponse = OrdersAPI.OrderRetrieveResponse;
  export import OrderListResponse = OrdersAPI.OrderListResponse;
  export import OrderDeleteResponse = OrdersAPI.OrderDeleteResponse;
  export import OrderCreateParams = OrdersAPI.OrderCreateParams;
  export import OrderListParams = OrdersAPI.OrderListParams;
  export import OrderDeleteParams = OrdersAPI.OrderDeleteParams;
}
