// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Clearstreet from 'clst-test';
import { Response } from 'node-fetch';

const clearstreet = new Clearstreet({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('retrieve', async () => {
    const responsePromise = clearstreet.entities.retrieve('x');
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
    await expect(clearstreet.entities.retrieve('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clearstreet.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = clearstreet.entities.list();
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
    await expect(clearstreet.entities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clearstreet.NotFoundError,
    );
  });

  test('createRegTMarginSimulation: only required params', async () => {
    const responsePromise = clearstreet.entities.createRegTMarginSimulation('x', { name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createRegTMarginSimulation: required and optional params', async () => {
    const response = await clearstreet.entities.createRegTMarginSimulation('x', {
      name: 'string',
      ignore_existing: true,
      prices: [
        { symbol: 'AAPL', symbol_format: 'cms', price: 'x' },
        { symbol: 'AAPL', symbol_format: 'cms', price: 'x' },
        { symbol: 'AAPL', symbol_format: 'cms', price: 'x' },
      ],
      trades: [
        { symbol: 'AAPL', symbol_format: 'cms', side: 'buy', quantity: 'x', price: 'x' },
        { symbol: 'AAPL', symbol_format: 'cms', side: 'buy', quantity: 'x', price: 'x' },
        { symbol: 'AAPL', symbol_format: 'cms', side: 'buy', quantity: 'x', price: 'x' },
      ],
    });
  });

  test('getPNLSummary', async () => {
    const responsePromise = clearstreet.entities.getPNLSummary('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPNLSummary: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.entities.getPNLSummary('x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });

  test('getPortfolioMargin', async () => {
    const responsePromise = clearstreet.entities.getPortfolioMargin('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPortfolioMargin: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.entities.getPortfolioMargin('x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });

  test('getRegTMargin', async () => {
    const responsePromise = clearstreet.entities.getRegTMargin('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getRegTMargin: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.entities.getRegTMargin('x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });

  test('getRegTMarginSimulation', async () => {
    const responsePromise = clearstreet.entities.getRegTMarginSimulation(
      'x',
      '6460030d-8ed4-19d3-818e-e87b36e90005',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getRegTMarginSimulation: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clearstreet.entities.getRegTMarginSimulation('x', '6460030d-8ed4-19d3-818e-e87b36e90005', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Clearstreet.NotFoundError);
  });
});
