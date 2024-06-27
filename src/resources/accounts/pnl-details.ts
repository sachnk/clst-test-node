// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PNLDetailsAPI from './pnl-details';

export class PNLDetails extends APIResource {
  /**
   * List PNL details for a given account.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PNLDetailListResponse> {
    return this._client.get(`/accounts/${accountId}/pnl-details`, options);
  }
}

export interface PNLDetailListResponse {
  data: Array<PNLDetailListResponse.Data>;
}

export namespace PNLDetailListResponse {
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

export namespace PNLDetails {
  export import PNLDetailListResponse = PNLDetailsAPI.PNLDetailListResponse;
}
