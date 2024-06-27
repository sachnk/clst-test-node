// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EntitiesAPI from '../entities';

export class PNLSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.PNLSummary> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}
