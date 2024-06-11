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
});
