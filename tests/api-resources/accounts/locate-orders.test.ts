// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Clearstreet from 'clst-test';
import { Response } from 'node-fetch';

const clearstreet = new Clearstreet({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locateOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = clearstreet.accounts.locateOrders.create('x', {
      mpid: 'x',
      quantity: 'x',
      reference_id: 'my-order-id-123',
      symbol: 'AAPL',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await clearstreet.accounts.locateOrders.create('x', {
      mpid: 'x',
      quantity: 'x',
      reference_id: 'my-order-id-123',
      symbol: 'AAPL',
      comments: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = clearstreet.accounts.locateOrders.retrieve('x', 'x');
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
      clearstreet.accounts.locateOrders.retrieve('x', 'x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = clearstreet.accounts.locateOrders.update('x', 'x', { accept: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await clearstreet.accounts.locateOrders.update('x', 'x', { accept: true });
  });

  test('list', async () => {
    const responsePromise = clearstreet.accounts.locateOrders.list('x');
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
    await expect(
      clearstreet.accounts.locateOrders.list('x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });
});
