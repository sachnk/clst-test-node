// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountsAPI from './accounts';
import {
  Account,
  AccountCreateOrdersInBulkParams,
  AccountCreateOrdersInBulkResponse,
  AccountListResponse,
  AccountRetrievePNLDetailsResponse,
  type Accounts,
  LocateOrder,
  Order,
  Position,
  Trade,
} from './accounts';
import * as EasyBorrowsAPI from './easy-borrows';
import * as LocateOrdersAPI from './locate-orders';
import * as OrdersAPI from './orders';
import * as PositionsAPI from './positions';
import * as TradesAPI from './trades';

export class Accounts extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  locateOrders: LocateOrdersAPI.LocateOrders = new LocateOrdersAPI.LocateOrders(this._client);
  easyBorrows: EasyBorrowsAPI.EasyBorrows = new EasyBorrowsAPI.EasyBorrows(this._client);

  /**
   * Get an account by its ID.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AccountsAPI.Account> {
    return this._client.get(`/accounts/${accountId}`, options);
  }

  /**
   * List all available accounts.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AccountsAPI.AccountListResponse> {
    return this._client.get('/accounts', options);
  }

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
  createOrdersInBulk(
    accountId: string,
    body: AccountsAPI.AccountCreateOrdersInBulkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountsAPI.AccountCreateOrdersInBulkResponse> {
    return this._client.post(`/accounts/${accountId}/bulk-orders`, { body, ...options });
  }

  /**
   * List PNL details for a given account.
   */
  retrievePNLDetails(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountsAPI.AccountRetrievePNLDetailsResponse> {
    return this._client.get(`/accounts/${accountId}/pnl-details`, options);
  }

  /**
   * Get PNL summary for a given account.
   */
  retrievePNLSummary(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PNLSummary> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}

export interface Account {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Entity ID for the legal entity.
   */
  entity_id: string;

  name: string;
}

export interface LocateOrder {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Unique locate ID assigned by us.
   */
  locate_order_id: string;

  /**
   * Unique MPID assigned by us.
   */
  mpid: string;

  /**
   * The timestamp indicating when the locate order was requested.
   */
  requested_at: number;

  /**
   * String representation of quantity.
   */
  requested_quantity: string;

  /**
   * The status of the locate order.
   */
  status: 'pending' | 'offered' | 'filled' | 'rejected' | 'declined' | 'expired' | 'cancelled';

  symbol: string;

  /**
   * The timestamp indicating when the locate order was last updated.
   */
  updated_at: number;

  /**
   * The rate charged if the instrument is held overnight.
   */
  borrow_rate?: string;

  /**
   * Comment from the desk.
   */
  desk_comment?: string;

  /**
   * The timestamp indicating when the locate-order will expire.
   */
  expires_at?: number;

  /**
   * The locate ID, available once the locate order has been offered
   */
  locate_id?: string;

  /**
   * The timestamp indicating when the locate-order was located.
   */
  located_at?: number;

  /**
   * The quantity that has been located.
   */
  located_quantity?: string;

  /**
   * The reference ID provided by you.
   */
  reference_id?: string;

  /**
   * The total cost of the locate.
   */
  total_cost?: string;

  /**
   * Comment from the trader.
   */
  trader_comment?: string;
}

export interface Order {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * When the order was created in milliseconds since epoch.
   */
  created_at: number;

  /**
   * The quantity that has been filled.
   */
  filled_quantity: string;

  /**
   * An internally generated unique ID for this order.
   */
  order_id: string;

  /**
   * The type of order, can be one of the following:
   *
   * - `limit`: A limit order will execute at-or-better than the limit price you
   *   specify
   * - `market`: An order that will execute at the prevailing market prices
   */
  order_type: 'limit' | 'market';

  /**
   * The requested quantity on this order.
   */
  quantity: string;

  /**
   * Buy, sell, sell-short indicator.
   */
  side: 'buy' | 'sell' | 'sell-short';

  /**
   * Simplified order state, which is inferred from `OrderStatus`. Makes it easier to
   * determine whether an order can be executed against.
   *
   * - `open`: Order _can_ potentially be executed against.
   * - `rejected`: Order _cannot_ be executed against because it was rejected. This
   *   is a terminal state.
   * - `closed`: Order _cannot_ be executed against. This is a terminal state.
   */
  state: 'open' | 'rejected' | 'closed';

  /**
   * Granular order status using
   * [standard values come FIX tag 39](https://www.fixtrading.org/online-specification/order-state-changes).
   */
  status:
    | 'new'
    | 'partially-filled'
    | 'filled'
    | 'canceled'
    | 'replaced'
    | 'pending-cancel'
    | 'stopped'
    | 'rejected'
    | 'suspended'
    | 'pending-new'
    | 'calculated'
    | 'expired'
    | 'accepted-for-bidding'
    | 'pending-replace'
    | 'done-for-day';

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
   * When the order was updated in milliseconds since epoch.
   */
  updated_at: number;

  /**
   * A monotonically increasing number indicating the version of this order. A higher
   * number indicates a more recent version of the order.
   */
  version: number;

  /**
   * Calculated average price of all fills on this order.
   */
  average_price?: number;

  /**
   * The last reason why this order was updated
   */
  order_update_reason?: 'place' | 'modify' | 'cancel' | 'execution-report' | 'cancel-reject';

  /**
   * The requsted limit price on this order.
   */
  price?: string;

  /**
   * The ID you provided when creating this order.
   */
  reference_id?: string;

  /**
   * Free form text typically contains reasons for a reject.
   */
  text?: string;
}

export interface PNLSummary {
  /**
   * Profit and loss from intraday trading activities.
   */
  day_pnl: number;

  /**
   * Entity ID for the legal entity.
   */
  entity_id: string;

  /**
   * Net value of instruments held in the portfolio.
   */
  equity: number;

  /**
   * Absolute market value of long and short market values.
   */
  gross_market_value: number;

  /**
   * Market value of securities positioned long.
   */
  long_market_value: number;

  /**
   * Market value net of long and short market values.
   */
  net_market_value: number;

  /**
   * `total_pnl + total_fees`
   */
  net_pnl: number;

  /**
   * Profit and loss from previous trading date.
   */
  overnight_pnl: number;

  /**
   * Profit and loss realized from position closing trading activity
   */
  realized_pnl: number;

  /**
   * Market value of securities positioned short.
   */
  short_market_value: number;

  /**
   * Net value of instruments held in the portfolio at the start of a trading day.
   */
  sod_equity: number;

  /**
   * Absolute market value at the start of a trading day.
   */
  sod_gross_market_value: number;

  /**
   * Market value of securities positioned long at the start of a trading day.
   */
  sod_long_market_value: number;

  /**
   * Market value of securities positioned short at the start of a trading day.
   */
  sod_short_market_value: number;

  /**
   * Milliseconds since epoch.
   */
  timestamp: number;

  /**
   * Total fees incurred from trading activities.
   */
  total_fees: number;

  /**
   * `realized_pnl + unrealized_pnl`
   */
  total_pnl: number;

  /**
   * Profit and loss from market changes.
   */
  unrealized_pnl: number;
}

export interface Position {
  /**
   * Account ID for the account.
   */
  account_id?: string;

  /**
   * String representation of quantity.
   */
  quantity?: string;

  symbol?: string;
}

export interface Trade {
  /**
   * When this trade happened in milliseconds since epoch.
   */
  created_at: number;

  /**
   * The order ID of the order this trade occurred on.
   */
  order_id: string;

  /**
   * The traded price.
   */
  price: string;

  /**
   * The amount that was traded.
   */
  quantity: string;

  /**
   * The side this trade occurred on.
   */
  side: 'buy' | 'sell' | 'sell-short';

  /**
   * Unique trade ID assigned by us.
   */
  trade_id: string;

  /**
   * Account ID for the account.
   */
  account_id?: string;

  /**
   * The symbol this trade was for.
   */
  symbol?: string;
}

export interface AccountListResponse {
  data?: Array<AccountsAPI.Account>;
}

export interface AccountCreateOrdersInBulkResponse {
  /**
   * Array indicating whether each respective order was submitted or not. This array
   * is guaranteed to be sorted in the same order as the orders you provided in your
   * request.
   */
  data: Array<AccountCreateOrdersInBulkResponse.Data>;

  /**
   * Total number of orders rejected
   */
  rejected: number;

  /**
   * Total number of orders submitted
   */
  submitted: number;
}

export namespace AccountCreateOrdersInBulkResponse {
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

export interface AccountRetrievePNLDetailsResponse {
  data: Array<AccountRetrievePNLDetailsResponse.Data>;
}

export namespace AccountRetrievePNLDetailsResponse {
  export interface Data {
    /**
     * Account ID for the account.
     */
    account_id: string;

    /**
     * The asset class of the symbol.
     */
    asset_class: 'other' | 'equity' | 'option' | 'debt';

    /**
     * Quantity of a given instrument bought.
     */
    bought_quantity: string;

    /**
     * Total buys of a given instrument.
     */
    buys: number;

    /**
     * Profit and loss from intraday trading activities.
     */
    day_pnl: number;

    /**
     * Name of the legal entity.
     */
    entity_id: string;

    /**
     * Absolute market value of long and short market values.
     */
    gross_market_value: number;

    /**
     * Market value net of long and short market values.
     */
    net_market_value: number;

    /**
     * Profit and loss from previous trading date.
     */
    overnight_pnl: number;

    /**
     * Price used in this pnl calculation.
     */
    price: number;

    /**
     * String representation of quantity.
     */
    quantity: string;

    /**
     * Profit and loss realized from position closing trading activity.
     */
    realized_pnl: number;

    /**
     * Total sells of a given instrument.
     */
    sells: number;

    /**
     * Market value of a given instrument a the start of a trading day.
     */
    sod_market_value: number;

    /**
     * Price at the start of a trading day.
     */
    sod_price: number;

    /**
     * Quantity of a given instrument at the start of a trading day.
     */
    sod_quantity: string;

    /**
     * Quantity of a given instrument sold.
     */
    sold_quantity: string;

    symbol: string;

    /**
     * Description of the symbol.
     */
    symbol_description: string;

    /**
     * Milliseconds since epoch.
     */
    timestamp: number;

    /**
     * Total fees incurred from trading activities.
     */
    total_fees: number;

    /**
     * `realized_pnl + unrealized_pnl`
     */
    total_pnl: number;

    /**
     * The underlying instrument.
     */
    underlier: string;

    /**
     * Profit and loss from market changes.
     */
    unrealized_pnl: number;
  }
}

export interface AccountCreateOrdersInBulkParams {
  /**
   * An array of orders to create.
   */
  orders: Array<AccountsAPI.AccountCreateOrdersInBulkParams.Order>;
}

export namespace AccountCreateOrdersInBulkParams {
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

export namespace Accounts {
  export import Account = AccountsAPI.Account;
  export import LocateOrder = AccountsAPI.LocateOrder;
  export import Order = AccountsAPI.Order;
  export import PNLSummaryForAccount = AccountsAPI.PNLSummaryForAccount;
  export import Position = AccountsAPI.Position;
  export import Trade = AccountsAPI.Trade;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountCreateOrdersInBulkResponse = AccountsAPI.AccountCreateOrdersInBulkResponse;
  export import AccountRetrievePNLDetailsResponse = AccountsAPI.AccountRetrievePNLDetailsResponse;
  export import AccountCreateOrdersInBulkParams = AccountsAPI.AccountCreateOrdersInBulkParams;
  export import Orders = OrdersAPI.Orders;
  export import OrderCreateResponse = OrdersAPI.OrderCreateResponse;
  export import OrderRetrieveResponse = OrdersAPI.OrderRetrieveResponse;
  export import OrderListResponse = OrdersAPI.OrderListResponse;
  export import OrderDeleteResponse = OrdersAPI.OrderDeleteResponse;
  export import OrderCreateParams = OrdersAPI.OrderCreateParams;
  export import OrderListParams = OrdersAPI.OrderListParams;
  export import OrderDeleteParams = OrdersAPI.OrderDeleteParams;
  export import Trades = TradesAPI.Trades;
  export import TradeListResponse = TradesAPI.TradeListResponse;
  export import TradeListParams = TradesAPI.TradeListParams;
  export import Positions = PositionsAPI.Positions;
  export import PositionListResponse = PositionsAPI.PositionListResponse;
  export import PositionListParams = PositionsAPI.PositionListParams;
  export import LocateOrders = LocateOrdersAPI.LocateOrders;
  export import LocateOrderListResponse = LocateOrdersAPI.LocateOrderListResponse;
  export import LocateOrderCreateParams = LocateOrdersAPI.LocateOrderCreateParams;
  export import LocateOrderUpdateParams = LocateOrdersAPI.LocateOrderUpdateParams;
  export import EasyBorrows = EasyBorrowsAPI.EasyBorrows;
  export import EasyBorrowListResponse = EasyBorrowsAPI.EasyBorrowListResponse;
}
