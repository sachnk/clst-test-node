// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { RegtMargin } from './regt-margin';
import { PortfolioMargin } from './portfolio-margin';
import * as EntitiesAPI from './entities';
import * as PortfolioMarginAPI from './portfolio-margin';
import * as RegtMarginAPI from './regt-margin';
import * as RegtMarginSimulationsAPI from './regt-margin-simulations';

export class Entities extends APIResource {
  regtMargin: RegtMarginAPI.RegtMargin = new RegtMarginAPI.RegtMargin(this._client);
  portfolioMargin: PortfolioMarginAPI.PortfolioMargin = new PortfolioMarginAPI.PortfolioMargin(this._client);
  regtMarginSimulations: RegtMarginSimulationsAPI.RegtMarginSimulations =
    new RegtMarginSimulationsAPI.RegtMarginSimulations(this._client);

  /**
   * Get an entity by its ID.
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<Entity> {
    return this._client.get(`/entities/${entityId}`, options);
  }

  /**
   * List all available entities.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<EntityListResponse> {
    return this._client.get('/entities', options);
  }

  /**
   * Get PNL summary for all accounts in an entity.
   */
  pnlSummary(entityId: string, options?: Core.RequestOptions): Core.APIPromise<PnlSummary> {
    return this._client.get(`/entities/${entityId}/pnl-summary`, options);
  }
}

export interface Entity {
  client_code: string;

  /**
   * Entity ID for the legal entity.
   */
  entity_id: string;

  legal_name?: string;
}

export interface PnlSummary {
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

export interface PortfolioMargin {
  /**
   * Sum of add-on margin requirements. Formula:
   * `liquidity_add_on + concentration_add_on + discretionary_requirement`
   */
  add_on_requirement?: number;

  /**
   * The percentage add-on margin requirements in terms of total house requirement.
   * Formula: `add_on_requirement / house_requirement`
   */
  add_on_requirement_percent?: number;

  /**
   * A component margin requirement that captures risk based on gross exposure to
   * total equity.
   */
  concentration_add_on?: number;

  /**
   * The percentage concentration add-on margin requirements in terms of total house
   * requirement. Formula: `concentration_add_on / house_requirement`
   */
  concentration_add_on_percent?: number;

  /**
   * A component margin requirement that captures miscellaneous risk factors.
   */
  discretionary_requirement?: number;

  /**
   * The percentage discretionary margin requirements in terms of total house
   * requirement Formula: `discretionary_requirement / house_requirement`
   */
  discretionary_requirement_percent?: number;

  /**
   * The maring amount by taking the difference between total equity and the
   * effective requirement. A negative number reflects an effective margin deficit.
   */
  effecive_excess?: number;

  /**
   * The enforced margin requirement in effect.
   */
  effective_requirement?: number;

  /**
   * Portfolio margin groups
   */
  groups?: Array<PortfolioMargin.Group>;

  /**
   * The margin amount by taking the difference between total equity and the house
   * requirement. A negative number reflects a house margin deficit.
   */
  house_excess?: number;

  /**
   * Margin requirements based on Clear Street's house margin methodology.
   */
  house_requirement?: number;

  /**
   * A component margin requirement that captures risk based on liquidity, Market
   * Cap, and Average Daily Volume factors.
   */
  liquidity_add_on?: number;

  /**
   * The percentage liquidity add-on margin requirements in terms of total house
   * requirement. Formula: `liquidity_add_on / house_requirement`
   */
  liquidity_add_on_percent?: number;

  /**
   * Sum of market values across all positions.
   */
  net_market_value?: number;

  /**
   * A component margin requirement that captures risk for security instruments that
   * are not margin eligible.
   */
  non_marginable_requirement?: number;

  /**
   * The percentage non-marginable requirement in terms of total house requirement
   * Formula: `non_marginable_requirement / house_requirement`
   */
  non_marginable_requirement_percent?: number;

  /**
   * A component margin requirement that captures base-case risk under house margin
   * methodology.
   */
  risk_based_requirement?: number;

  /**
   * The percentage risk_base margin requirement in terms of total house requirement
   * Formula: `risk_based_requirement / house_requirement`
   */
  risk_based_requirement_percent?: number;

  /**
   * Timestamp of when this margin was calculated.
   */
  timestamp?: number;

  /**
   * A component margin requirement that captures risk based on vega.
   */
  vega_requirement?: number;

  /**
   * Unique identifier for this margin calculation.
   */
  version?: string;
}

export namespace PortfolioMargin {
  export interface Group {
    /**
     * The enforced margin requirement in effect for the group.
     */
    effective_requirement: number;

    /**
     * The percentage effective margin requirement in terms of the group market value.
     * Formula: `(effective_requirement / net_market_value)`
     */
    margin_percent: number;

    /**
     * The percentage effective margin requirement in terms of the total effective
     * requirement. Formula: `(effective_requirement / sum(effective_requirement))`
     */
    margin_percent_contribution: number;

    /**
     * The aggregated market value of all instruments for the group.
     */
    market_value: number;

    /**
     * The percentage market value of the group in terms of the total net_market_value
     * of all positions. Formula: `(market_value / net_market_value)`
     */
    market_value_percent: number;

    /**
     * A list of securities that comprise this group.
     */
    members: Array<Group.Member>;

    /**
     * Unique name of the group, typically the symbol of the underlier.
     */
    name: string;

    /**
     * A component margin requirement that captures risk for the group based on gross
     * exposure to total equity
     */
    concentration_requirement?: number;

    /**
     * A component margin requirement that captures miscellaneous risk factors for the
     * group.
     */
    discretionary_requirement?: number;

    /**
     * A component margin requirement that captures risk for the group based on
     * liquidity, Market Cap, and Average Daily Volume factors.
     */
    liquidity_requirement?: number;

    /**
     * A component margin requirement that captures risk for the group that are not
     * margin eligible.
     */
    non_marginable_requirement?: number;

    /**
     * Margin requirements based on OCC TIMS regulatory margin methodology
     */
    regulatory_requirement?: number;

    /**
     * A component margin requirement that captures base-case risk for the group under
     * house margin methodology
     */
    risk_based_requirement?: number;

    /**
     * Maps shock scenarios to their resulting pnl.
     */
    shocks?: Record<string, number>;

    /**
     * Margin requirements based on value-at-risk over any 5-day period in a 2 year
     * historic lookback
     */
    var_requirement?: number;
  }

  export namespace Group {
    export interface Member {
      /**
       * The asset class of the symbol.
       */
      asset_class?: 'other' | 'equity' | 'option' | 'debt';

      /**
       * Market value of the instrument.
       */
      market_value?: number;

      /**
       * The percentage market value of the instrument in terms of the total
       * `net_market_value` of all positions held. Formula:
       * `market_value / net_market_value`
       */
      market_value_percent?: number;

      /**
       * The quantity held for this instrument.
       */
      quantity?: string;

      /**
       * Maps shock scenarios to their resulting pnl.
       */
      shocks?: Record<string, number>;

      /**
       * The symbol for the instrument.
       */
      symbol?: string;
    }
  }
}

export interface RegtMargin {
  /**
   * The remaining amount of start_of_day_buying_power that captures any day-trading
   * activity.
   */
  day_trade_buying_power: number;

  /**
   * The enforced margin requirement in effect.
   */
  effective_requirement: number;

  /**
   * Margin requirements based on regulatory rules.
   */
  exchange_requirement: number;

  /**
   * Reg-T margin groups
   */
  groups: Array<RegtMargin.Group>;

  /**
   * The margin amount by taking the difference between total equity and the house
   * requirement. A negative number reflects a house margin deficit.
   */
  house_excess: number;

  /**
   * Margin requirements based on Clear Street's house margin methodology.
   */
  house_requirement: number;

  /**
   * Market value net of long and short market values.
   */
  net_market_value: number;

  /**
   * The limit, or "up-to" amount, of securities value that can be purchased and held
   * overnight.
   */
  overnight_buying_power: number;

  /**
   * Special Memorandum Account (SMA). The regulatory line of credit amount for
   * margin trading based on market value, trading activity, and available cash.
   */
  sma: number;

  /**
   * The limit, or "up-to" amount, of securities value that can be day-traded for a
   * given trading day.
   */
  sod_buying_power: number;

  /**
   * Timestamp of when this margin was calculated.
   */
  timestamp: number;

  /**
   * Unique identifier for this margin calculation.
   */
  version: string;

  /**
   * The maring amount by taking the difference between total equity and the
   * effective requirement. A negative number reflects an effective margin deficit.
   */
  effective_excess?: number;

  /**
   * The margin amount by taking the difference between total equity and the exchange
   * requirement. A negative number reflects an regulatory margin deficit.
   */
  exchange_excess?: number;
}

export namespace RegtMargin {
  export interface Group {
    /**
     * The enforced margin requirement in effect for the symbol group.
     */
    effective_requirement: number;

    /**
     * Margin requirements based on regulatory rules for the symbol group.
     */
    exchange_requirement: number;

    /**
     * Margin requirements based on Clear Street's house margin methodology for the
     * symbol group.
     */
    house_requirement: number;

    /**
     * The percentage effective margin requirement in terms of the symbol group market
     * value. Formula: `(effective_requirement / net_market_value)`
     */
    margin_percent: number;

    /**
     * The percentage effective margin requirement in terms of the total effective
     * requirement. Formula: `(effective_requirement / sum(effective_requirement))`
     */
    margin_percent_contribution: number;

    /**
     * The aggregated market value of all instruments for the symbol group.
     */
    market_value: number;

    /**
     * The percentage market value of the symbol group in terms of the total
     * net_market_value of all positions. Formula: `(market_value / net_market_value)`
     */
    market_value_percent: number;

    /**
     * A list of securities that comprise this group.
     */
    members: Array<Group.Member>;

    /**
     * Unique name of the group, typically the symbol of the underlier.
     */
    name: string;
  }

  export namespace Group {
    export interface Member {
      /**
       * The asset class of the symbol.
       */
      asset_class: 'other' | 'equity' | 'option' | 'debt';

      /**
       * Market value of the instrument.
       */
      market_value: number;

      /**
       * The percentage market value of the instrument in terms of the total
       * `net_market_value` of all positions held. Formula:
       * `market_value / net_market_value`
       */
      market_value_percent: number;

      /**
       * The quantity held for this instrument.
       */
      quantity: string;

      /**
       * The symbol for the instrument.
       */
      symbol: string;
    }
  }
}

export interface EntityListResponse {
  data?: Array<Entity>;
}

export namespace Entities {
  export import Entity = EntitiesAPI.Entity;
  export import PnlSummary = EntitiesAPI.PnlSummary;
  export import PortfolioMargin = EntitiesAPI.PortfolioMargin;
  export import RegtMargin = EntitiesAPI.RegtMargin;
  export import EntityListResponse = EntitiesAPI.EntityListResponse;
  export import RegtMarginSimulations = RegtMarginSimulationsAPI.RegtMarginSimulations;
  export import RegtMarginSimulation = RegtMarginSimulationsAPI.RegtMarginSimulation;
  export import SimulationID = RegtMarginSimulationsAPI.SimulationID;
  export import RegtMarginSimulationCreateResponse = RegtMarginSimulationsAPI.RegtMarginSimulationCreateResponse;
  export import RegtMarginSimulationCreateParams = RegtMarginSimulationsAPI.RegtMarginSimulationCreateParams;
}
