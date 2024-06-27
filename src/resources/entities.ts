// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EntitiesAPI from './entities';
import * as Shared from './shared';

export class Entities extends APIResource {
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
   * Simulate Reg-T margin calculation for a given hypothetical set of prices and/or
   * trades. This is useful for understanding the impact of price fluctuations or
   * trades on margin requirements. Once a simulation is created, it remains
   * available for 48-hours, after which it will automatically be deleted.
   *
   * Simulations created through the API are visible in the Studio UI under the Risk
   * & Margin section, after enabling the "Risk Simulations" toggle.
   */
  createRegTMarginSimulation(
    entityId: string,
    body: EntityCreateRegTMarginSimulationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityCreateRegTMarginSimulationResponse> {
    return this._client.post(`/entities/${entityId}/regt-margin-simulations`, { body, ...options });
  }

  /**
   * Get PNL summary for all accounts in an entity.
   */
  retrievePNLSummary(entityId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PNLSummary> {
    return this._client.get(`/entities/${entityId}/pnl-summary`, options);
  }

  /**
   * Get latest portfolio margin calculation for the given entity
   */
  retrievePortfolioMargin(entityId: string, options?: Core.RequestOptions): Core.APIPromise<PortfolioMargin> {
    return this._client.get(`/entities/${entityId}/portfolio-margin`, options);
  }

  /**
   * Get the latest Reg-T margin calculation for the given entity
   */
  retrieveRegTMargin(entityId: string, options?: Core.RequestOptions): Core.APIPromise<RegTMargin> {
    return this._client.get(`/entities/${entityId}/regt-margin`, options);
  }

  /**
   * Get a Reg-T margin simluation that was previously created. Note, simulations are
   * automatically deleted after 48-hours.
   */
  retrieveRegTMarginSimulation(
    entityId: string,
    simulationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegTMarginSimulation> {
    return this._client.get(`/entities/${entityId}/regt-margin-simulations/${simulationId}`, options);
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

export interface RegTMargin {
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
  groups: Array<RegTMargin.Group>;

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

export namespace RegTMargin {
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

export interface RegTMarginSimulation {
  /**
   * The margin calculation after applying simulated trades.
   */
  after: RegTMargin;

  /**
   * The margin calculation before applying simulated trades.
   */
  before: RegTMargin;

  /**
   * Timestamp of when this simulation was created.
   */
  created_at: number;

  /**
   * Name of this simulation that you provided when creating it.
   */
  name: string;

  /**
   * Unique ID for a simulation.
   */
  simulation_id: string;
}

export interface EntityListResponse {
  data?: Array<Entity>;
}

export interface EntityCreateRegTMarginSimulationResponse {
  /**
   * Unique ID for a simulation.
   */
  simulation_id: string;
}

export interface EntityCreateRegTMarginSimulationParams {
  /**
   * A name for this simulation for reference.
   */
  name: string;

  /**
   * If true, the simulation will ignore any existing positions and balances in the
   * account. Set to true if you want to simulate from a clean slate, i.e. an empty
   * account.
   */
  ignore_existing?: boolean;

  /**
   * List of prices to use in the simulation, i.e. fair-market-values you specify for
   * each symbol. If this is not provided, current market prices will be used, if
   * they are available.
   */
  prices?: Array<EntityCreateRegTMarginSimulationParams.Price>;

  /**
   * List of hypothetical trades to include in the simulation, if any.
   */
  trades?: Array<EntityCreateRegTMarginSimulationParams.Trade>;
}

export namespace EntityCreateRegTMarginSimulationParams {
  export interface Price {
    /**
     * The price to use in the simulation.
     */
    price: string;

    /**
     * The symbol for the instrument.
     */
    symbol: string;

    /**
     * Denotes the format of the provided `symbol` field.
     */
    symbol_format?: 'cms' | 'osi';
  }

  export interface Trade {
    /**
     * The price of the simulated trade.
     */
    price: string;

    /**
     * The quantity of the simulated trade.
     */
    quantity: string;

    /**
     * The side of the simulated trade.
     */
    side: 'buy' | 'sell';

    /**
     * The symbol for the instrument.
     */
    symbol: string;

    /**
     * Denotes the format of the provided `symbol` field.
     */
    symbol_format?: 'cms' | 'osi';
  }
}

export namespace Entities {
  export import Entity = EntitiesAPI.Entity;
  export import PortfolioMargin = EntitiesAPI.PortfolioMargin;
  export import RegTMargin = EntitiesAPI.RegTMargin;
  export import RegTMarginSimulation = EntitiesAPI.RegTMarginSimulation;
  export import EntityListResponse = EntitiesAPI.EntityListResponse;
  export import EntityCreateRegTMarginSimulationResponse = EntitiesAPI.EntityCreateRegTMarginSimulationResponse;
  export import EntityCreateRegTMarginSimulationParams = EntitiesAPI.EntityCreateRegTMarginSimulationParams;
}
