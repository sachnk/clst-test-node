// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as BulkOrdersAPI from './bulk-orders';

export class BulkOrders extends APIResource {
  /**
   * Creates multiple orders in a single request, up to 1000. Note that a successful
   * call to this endpoint does not necessarily mean your orders have been accepted,
   * e.g. a downstream venue might reject your order. You should therefore utilize
   * our WebSocket APIs to listen for changes in order lifecycle events.
   *
   * The response will contain an array of objects, indicating whether your order was
   * submitted. If the order was submitted, the `order_id` field will be populated
   * with the order ID assigned to this order. If the order was rejected, the
   * `reason` field will be populated with the reason for rejection. The data array
   * returned in the response object is guaranteed to be ordered in the same order as
   * the orders you provided in the request. Again, note that even if your order was
   * submitted, that doesn't mean it was _accepted_, and may still be rejected by
   * downstream venues.
   */
  create(
    accountId: string,
    body: BulkOrderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkOrderCreateResponse> {
    return this._client.post(`/accounts/${accountId}/bulk-orders`, { body, ...options });
  }
}

export interface BulkOrderCreateResponse {
  /**
   * Array indicating whether each respective order was submitted or not. This array
   * is guaranteed to be sorted in the same order as the orders you provided in your
   * request.
   */
  data: Array<BulkOrderCreateResponse.Data>;

  /**
   * Total number of orders rejected
   */
  rejected: number;

  /**
   * Total number of orders submitted
   */
  submitted: number;
}

export namespace BulkOrderCreateResponse {
  export interface Data {
    /**
     * True if the order was submitted successfully, false otherwise.
     */
    submitted: boolean;

    /**
     * If the order was submitted, the order ID assigned to this order. Empty if the
     * order was rejected.
     */
    order_id?: string;

    /**
     * If the order rejected, the reason for rejection. Empty if the order was
     * accepted.
     */
    reason?: string;
  }
}

export interface BulkOrderCreateParams {
  /**
   * An array of orders to create.
   */
  orders: Array<BulkOrderCreateParams.Order>;
}

export namespace BulkOrderCreateParams {
  export interface Order {
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
}

export namespace BulkOrders {
  export import BulkOrderCreateResponse = BulkOrdersAPI.BulkOrderCreateResponse;
  export import BulkOrderCreateParams = BulkOrdersAPI.BulkOrderCreateParams;
}
