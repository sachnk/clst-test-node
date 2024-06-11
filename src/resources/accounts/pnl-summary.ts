// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as EntitiesAPI from '../entities/entities';

export class PNLSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.PNLSummary> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}
