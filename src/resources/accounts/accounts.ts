// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { PNLSummary } from './pnl-summary';
import * as AccountsAPI from './accounts';
import { Account, AccountListResponse, type Accounts, LocateOrder, Order, Position, Trade } from './accounts';
import * as BulkOrdersAPI from './bulk-orders';
import * as EasyBorrowsAPI from './easy-borrows';
import * as LocateOrdersAPI from './locate-orders';
import * as OrdersAPI from './orders';
import * as PNLDetailsAPI from './pnl-details';
import * as PNLSummaryAPI from './pnl-summary';
import * as PositionsAPI from './positions';
import * as TradesAPI from './trades';

export class Accounts extends APIResource {
  bulkOrders: BulkOrdersAPI.BulkOrders = new BulkOrdersAPI.BulkOrders(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  locateOrders: LocateOrdersAPI.LocateOrders = new LocateOrdersAPI.LocateOrders(this._client);
  easyBorrows: EasyBorrowsAPI.EasyBorrows = new EasyBorrowsAPI.EasyBorrows(this._client);
  pnlSummary: PNLSummaryAPI.PNLSummary = new PNLSummaryAPI.PNLSummary(this._client);
  pnlDetails: PNLDetailsAPI.PNLDetails = new PNLDetailsAPI.PNLDetails(this._client);

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

export namespace Accounts {
  export import Account = AccountsAPI.Account;
  export import LocateOrder = AccountsAPI.LocateOrder;
  export import Order = AccountsAPI.Order;
  export import PNLSummaryForAccount = AccountsAPI.PNLSummaryForAccount;
  export import Position = AccountsAPI.Position;
  export import Trade = AccountsAPI.Trade;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import BulkOrders = BulkOrdersAPI.BulkOrders;
  export import BulkOrderCreateResponse = BulkOrdersAPI.BulkOrderCreateResponse;
  export import BulkOrderCreateParams = BulkOrdersAPI.BulkOrderCreateParams;
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
  export import PNLSummary = PNLSummaryAPI.PNLSummary;
  export import PNLDetails = PNLDetailsAPI.PNLDetails;
  export import PNLDetailListResponse = PNLDetailsAPI.PNLDetailListResponse;
}
