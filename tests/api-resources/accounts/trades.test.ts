// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Clearstreet from 'clst-test';
import { Response } from 'node-fetch';

const clearstreet = new Clearstreet({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trades', () => {
  test('retrieve', async () => {
    const responsePromise = clearstreet.accounts.trades.retrieve('x', 'x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.accounts.trades.retrieve('x', 'x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = clearstreet.accounts.trades.list('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(clearstreet.accounts.trades.list('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clearstreet.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.accounts.trades.list(
        'x',
        { page_size: 1, page_token: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });
});
