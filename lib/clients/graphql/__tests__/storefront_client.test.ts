import {shopify, queueMockResponse} from '../../../__tests__/test-helper';
import {ShopifyHeader} from '../../../types';
import {Session} from '../../../session/session';
import {JwtPayload} from '../../../session/types';

const domain = 'test-shop.myshopify.io';
const QUERY = `
{
  shop {
    name
  }
}
`;

const successResponse = {
  data: {
    shop: {
      name: 'Shoppity Shop',
    },
  },
};
const accessToken = 'dangit';
const storefrontAccessToken = 'storefrontAccessToken-dangit';
let session: Session;

describe('Storefront GraphQL client', () => {
  beforeEach(() => {
    const jwtPayload: JwtPayload = {
      iss: 'https://test-shop.myshopify.io/admin',
      dest: 'https://test-shop.myshopify.io',
      aud: shopify.config.apiKey,
      sub: '1',
      exp: Date.now() / 1000 + 3600,
      nbf: 1234,
      iat: 1234,
      jti: '4321',
      sid: 'abc123',
    };

    session = new Session({
      id: `test-shop.myshopify.io_${jwtPayload.sub}`,
      shop: domain,
      state: 'state',
      isOnline: true,
      accessToken,
    });
  });

  it('can return response from specific access token', async () => {
    const client = new shopify.clients.Storefront({
      domain: session.shop,
      storefrontAccessToken,
    });

    queueMockResponse(JSON.stringify(successResponse));

    await expect(client.query({data: QUERY})).resolves.toEqual(
      buildExpectedResponse(successResponse),
    );

    const headers: {[key: string]: unknown} = {};
    headers[ShopifyHeader.StorefrontAccessToken] = storefrontAccessToken;
    expect({
      method: 'POST',
      domain,
      path: `/api/${shopify.config.apiVersion}/graphql.json`,
      data: QUERY,
      headers,
    }).toMatchMadeHttpRequest();
  });

  it('can return response from config private app setting', async () => {
    shopify.config.isPrivateApp = true;
    shopify.config.privateAppStorefrontAccessToken = 'private_token';

    const client = new shopify.clients.Storefront({
      domain: session.shop,
      storefrontAccessToken,
    });

    queueMockResponse(JSON.stringify(successResponse));

    await expect(client.query({data: QUERY})).resolves.toEqual(
      buildExpectedResponse(successResponse),
    );

    const headers: {[key: string]: unknown} = {};
    headers[ShopifyHeader.StorefrontAccessToken] = 'private_token';
    expect({
      method: 'POST',
      domain,
      path: `/api/${shopify.config.apiVersion}/graphql.json`,
      data: QUERY,
      headers,
    }).toMatchMadeHttpRequest();
  });
});

function buildExpectedResponse(obj: unknown) {
  const expectedResponse = {
    body: obj,
    headers: expect.objectContaining({}),
  };
  return expect.objectContaining(expectedResponse);
}
