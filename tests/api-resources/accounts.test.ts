// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Clearstreet from 'clst-test';
import { Response } from 'node-fetch';

const clearstreet = new Clearstreet({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('retrieve', async () => {
    const responsePromise = clearstreet.accounts.retrieve('x');
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
    await expect(clearstreet.accounts.retrieve('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clearstreet.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = clearstreet.accounts.list();
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
    await expect(clearstreet.accounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clearstreet.NotFoundError,
    );
  });

  test('createOrdersInBulk: only required params', async () => {
    const responsePromise = clearstreet.accounts.createOrdersInBulk('x', {
      orders: [
        {
          order_type: 'limit',
          side: 'buy',
          quantity: 'x',
          time_in_force: 'day',
          strategy_type: 'sor',
          symbol: 'AAPL',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createOrdersInBulk: required and optional params', async () => {
    const response = await clearstreet.accounts.createOrdersInBulk('x', {
      orders: [
        {
          reference_id: 'my-order-id-123',
          order_type: 'limit',
          side: 'buy',
          quantity: 'x',
          price: 'x',
          time_in_force: 'day',
          strategy_type: 'sor',
          locate_broker: 'x',
          symbol: 'AAPL',
          symbol_format: 'cms',
        },
      ],
    });
  });

  test('retrievePNLDetails', async () => {
    const responsePromise = clearstreet.accounts.retrievePNLDetails('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePNLDetails: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.accounts.retrievePNLDetails('x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });

  test('retrievePNLSummary', async () => {
    const responsePromise = clearstreet.accounts.retrievePNLSummary('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePNLSummary: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.accounts.retrievePNLSummary('x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });
});
