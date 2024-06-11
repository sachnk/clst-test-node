// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as RegTMarginSimulationsAPI from './regt-margin-simulations';
import * as EntitiesAPI from './entities';

export class RegTMarginSimulations extends APIResource {
  /**
   * Simulate Reg-T margin calculation for a given hypothetical set of prices and/or
   * trades. This is useful for understanding the impact of price fluctuations or
   * trades on margin requirements. Once a simulation is created, it remains
   * available for 48-hours, after which it will automatically be deleted.
   *
   * Simulations created through the API are visible in the Studio UI under the Risk
   * & Margin section, after enabling the "Risk Simulations" toggle.
   */
  create(
    entityId: string,
    body: RegTMarginSimulationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegTMarginSimulationCreateResponse> {
    return this._client.post(`/entities/${entityId}/regt-margin-simulations`, { body, ...options });
  }

  /**
   * Get a Reg-T margin simluation that was previously created. Note, simulations are
   * automatically deleted after 48-hours.
   */
  retrieve(
    entityId: string,
    simulationId: SimulationID,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegTMarginSimulation> {
    return this._client.get(`/entities/${entityId}/regt-margin-simulations/${simulationId}`, options);
  }
}

export interface RegTMarginSimulation {
  /**
   * The margin calculation after applying simulated trades.
   */
  after: EntitiesAPI.RegTMargin;

  /**
   * The margin calculation before applying simulated trades.
   */
  before: EntitiesAPI.RegTMargin;

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
  simulation_id: SimulationID;
}

/**
 * Unique ID for a simulation.
 */
export type SimulationID = string;

export interface RegTMarginSimulationCreateResponse {
  /**
   * Unique ID for a simulation.
   */
  simulation_id: SimulationID;
}

export interface RegTMarginSimulationCreateParams {
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
  prices?: Array<RegTMarginSimulationCreateParams.Price>;

  /**
   * List of hypothetical trades to include in the simulation, if any.
   */
  trades?: Array<RegTMarginSimulationCreateParams.Trade>;
}

export namespace RegTMarginSimulationCreateParams {
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

export namespace RegTMarginSimulations {
  export import RegTMarginSimulation = RegTMarginSimulationsAPI.RegTMarginSimulation;
  export import SimulationID = RegTMarginSimulationsAPI.SimulationID;
  export import RegTMarginSimulationCreateResponse = RegTMarginSimulationsAPI.RegTMarginSimulationCreateResponse;
  export import RegTMarginSimulationCreateParams = RegTMarginSimulationsAPI.RegTMarginSimulationCreateParams;
}
