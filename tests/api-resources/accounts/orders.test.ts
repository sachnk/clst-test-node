// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClstTest from 'clst-test';
import { Response } from 'node-fetch';

const clstTest = new ClstTest({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  test('create: only required params', async () => {
    const responsePromise = clstTest.accounts.orders.create('x', {
      order_type: 'limit',
      quantity: 'x',
      side: 'buy',
      strategy_type: 'sor',
      symbol: 'AAPL',
      time_in_force: 'day',
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
    const response = await clstTest.accounts.orders.create('x', {
      order_type: 'limit',
      quantity: 'x',
      side: 'buy',
      strategy_type: 'sor',
      symbol: 'AAPL',
      time_in_force: 'day',
      locate_broker: 'x',
      price: 'x',
      reference_id: 'my-order-id-123',
      symbol_format: 'cms',
    });
  });

  test('retrieve', async () => {
    const responsePromise = clstTest.accounts.orders.retrieve('x', 'x');
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
      clstTest.accounts.orders.retrieve('x', 'x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ClstTest.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = clstTest.accounts.orders.list('x');
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
    await expect(clstTest.accounts.orders.list('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ClstTest.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clstTest.accounts.orders.list(
        'x',
        { from: 1710613560668, page_size: 1, page_token: 'string', to: 1710613560668 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClstTest.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = clstTest.accounts.orders.delete('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(clstTest.accounts.orders.delete('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ClstTest.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clstTest.accounts.orders.delete(
        'x',
        { symbol: 'AAPL', symbol_format: 'cms' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClstTest.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = clstTest.accounts.orders.cancel('x', 'x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clstTest.accounts.orders.cancel('x', 'x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ClstTest.NotFoundError);
  });
});
