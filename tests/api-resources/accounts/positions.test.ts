// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClstTest from 'clst-test';
import { Response } from 'node-fetch';

const clstTest = new ClstTest({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positions', () => {
  test('retrieve', async () => {
    const responsePromise = clstTest.accounts.positions.retrieve('x', 'AAPL');
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
      clstTest.accounts.positions.retrieve('x', 'AAPL', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ClstTest.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = clstTest.accounts.positions.list('x');
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
    await expect(clstTest.accounts.positions.list('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ClstTest.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clstTest.accounts.positions.list(
        'x',
        { page_size: 1, page_token: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClstTest.NotFoundError);
  });
});
