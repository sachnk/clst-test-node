// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
