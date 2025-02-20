/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../../lib/session/session';
import {testConfig, queueMockResponse} from '../../../../lib/__tests__/test-helper';
import {ApiVersion} from '../../../../lib/types';
import {shopifyApi, Shopify} from '../../../../lib';

import {restResources} from '../../2022-04';

let shopify: Shopify<typeof restResources>;

beforeEach(() => {
  shopify = shopifyApi({
    ...testConfig,
    apiVersion: ApiVersion.April22,
    restResources,
  });
});

describe('Metafield resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const session = new Session({
    id: '1234',
    shop: domain,
    state: '1234',
    isOnline: true,
  });
  session.accessToken = 'this_is_a_test_token';

  it('test_1', async () => {
    queueMockResponse(JSON.stringify({"metafields": []}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "382285388", "owner_resource": "blog"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=382285388&metafield%5Bowner_resource%5D=blog',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 51714266, "namespace": "my_namespace", "key": "my_key", "value": "Hello", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/51714266"}, {"id": 116539875, "namespace": "descriptors", "key": "subtitle", "value": "The best ipod", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/116539875"}, {"id": 263497237, "namespace": "installments", "key": "disable", "value": true, "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "boolean", "admin_graphql_api_id": "gid://shopify/Metafield/263497237"}, {"id": 273160493, "namespace": "facts", "key": "isbn", "value": "978-0-14-004259-7", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/273160493"}, {"id": 524118066, "namespace": "facts", "key": "ean", "value": "0123456789012", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/524118066"}, {"id": 543636738, "namespace": "reviews", "key": "rating_count", "value": 1, "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "number_integer", "admin_graphql_api_id": "gid://shopify/Metafield/543636738"}, {"id": 572384404, "namespace": "reviews", "key": "rating", "value": "{\"value\": \"3.5\", \"scale_min\": \"1.0\", \"scale_max\": \"5.0\"}", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "rating", "admin_graphql_api_id": "gid://shopify/Metafield/572384404"}, {"id": 613330208, "namespace": "shopify_filter", "key": "display", "value": "retina", "description": "This field keeps track of the type of display", "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "string", "admin_graphql_api_id": "gid://shopify/Metafield/613330208"}, {"id": 779326701, "namespace": "facts", "key": "upc", "value": "012345678901", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/779326701"}, {"id": 845366454, "namespace": "translations", "key": "title_fr", "value": "produit", "description": "French product title", "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "string", "admin_graphql_api_id": "gid://shopify/Metafield/845366454"}, {"id": 861799889, "namespace": "my_other_fields", "key": "organic", "value": true, "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "boolean", "admin_graphql_api_id": "gid://shopify/Metafield/861799889"}, {"id": 870326793, "namespace": "descriptors", "key": "care_guide", "value": "Wash in cold water", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": null, "admin_graphql_api_id": "gid://shopify/Metafield/870326793"}, {"id": 908250163, "namespace": "my_other_fields", "key": "shipping_policy", "value": "Ships for free in Canada", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "multi_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/908250163"}, {"id": 925288667, "namespace": "my_other_fields", "key": "year_released", "value": 2019, "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "number_integer", "admin_graphql_api_id": "gid://shopify/Metafield/925288667"}, {"id": 1001077698, "namespace": "my_fields", "key": "best_for", "value": "travel", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/1001077698"}, {"id": 1029402048, "namespace": "my_other_fields", "key": "ingredients", "value": "[\"apple\", \"music\", \"u2\"]", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "list.single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/1029402048"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "632910392", "owner_resource": "product"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=632910392&metafield%5Bowner_resource%5D=product',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 220591908, "namespace": "discounts", "key": "returning_customer", "value": "no", "description": "Customer deserves discount", "owner_id": 207119551, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "customer", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/220591908"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "207119551", "owner_resource": "customer"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=207119551&metafield%5Bowner_resource%5D=customer',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 106172460, "namespace": "notes", "key": "note", "value": "B flat", "description": "This is for notes", "owner_id": 622762746, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "draft_order", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/106172460"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "622762746", "owner_resource": "draft_order"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=622762746&metafield%5Bowner_resource%5D=draft_order',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_5', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 290519330, "namespace": "translation", "key": "title_fr", "value": "Le TOS", "description": "Page French title translation", "owner_id": 131092082, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "page", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/290519330"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "131092082", "owner_resource": "page"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=131092082&metafield%5Bowner_resource%5D=page',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_6', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 1063298188, "namespace": "inventory", "key": "warehouse", "value": 25, "description": null, "owner_id": 548380009, "created_at": "2022-10-03T12:17:58-04:00", "updated_at": "2022-10-03T12:17:58-04:00", "owner_resource": "shop", "type": "number_integer", "admin_graphql_api_id": "gid://shopify/Metafield/1063298188"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      since_id: "721389482",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'since_id=721389482',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
    queueMockResponse(JSON.stringify({"metafields": []}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "674387490", "owner_resource": "article"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=674387490&metafield%5Bowner_resource%5D=article',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_8', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 519046726, "namespace": "notes", "key": "descriptionription", "value": "Collection description", "description": "Custom Collection notes", "owner_id": 482865238, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "collection", "type": "string", "admin_graphql_api_id": "gid://shopify/Metafield/519046726"}, {"id": 624849518, "namespace": "global", "key": "description_tag", "value": "Some seo description value", "description": null, "owner_id": 482865238, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "collection", "type": "string", "admin_graphql_api_id": "gid://shopify/Metafield/624849518"}, {"id": 1010236510, "namespace": "global", "key": "title_tag", "value": "Some seo title value", "description": null, "owner_id": 482865238, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "collection", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/1010236510"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "482865238", "owner_resource": "collection"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=482865238&metafield%5Bowner_resource%5D=collection',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_9', async () => {
    queueMockResponse(JSON.stringify({"metafields": []}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "49148385", "owner_resource": "variants"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=49148385&metafield%5Bowner_resource%5D=variants',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_10', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 721389482, "namespace": "affiliates", "key": "app_key", "value": "app_key", "description": null, "owner_id": 548380009, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "shop", "type": "string", "admin_graphql_api_id": "gid://shopify/Metafield/721389482"}]}));

    await shopify.rest.Metafield.all({
      session: session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_11', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 915396079, "namespace": "notes", "key": "buyer", "value": "Notes about this buyer", "description": "This field is for buyer notes", "owner_id": 450789469, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "order", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/915396079"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "450789469", "owner_resource": "order"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=450789469&metafield%5Bowner_resource%5D=order',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_12', async () => {
    queueMockResponse(JSON.stringify({"metafields": [{"id": 625663657, "namespace": "translation", "key": "title_fr", "value": "tbn", "description": "French product image title", "owner_id": 850703190, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product_image", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/625663657"}]}));

    await shopify.rest.Metafield.all({
      session: session,
      metafield: {"owner_id": "850703190", "owner_resource": "product_image"},
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields.json',
      query: 'metafield%5Bowner_id%5D=850703190&metafield%5Bowner_resource%5D=product_image',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_13', async () => {
    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Metafield.count({
      session: session,
      page_id: 131092082,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/pages/131092082/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_14', async () => {
    queueMockResponse(JSON.stringify({"count": 3}));

    await shopify.rest.Metafield.count({
      session: session,
      collection_id: 482865238,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/collections/482865238/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_15', async () => {
    queueMockResponse(JSON.stringify({"count": 0}));

    await shopify.rest.Metafield.count({
      session: session,
      variant_id: 49148385,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/variants/49148385/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_16', async () => {
    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Metafield.count({
      session: session,
      order_id: 450789469,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/orders/450789469/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_17', async () => {
    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Metafield.count({
      session: session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_18', async () => {
    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Metafield.count({
      session: session,
      draft_order_id: 622762746,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/draft_orders/622762746/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_19', async () => {
    queueMockResponse(JSON.stringify({"count": 0}));

    await shopify.rest.Metafield.count({
      session: session,
      blog_id: 382285388,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/blogs/382285388/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_20', async () => {
    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Metafield.count({
      session: session,
      customer_id: 207119551,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/customers/207119551/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_21', async () => {
    queueMockResponse(JSON.stringify({"count": 16}));

    await shopify.rest.Metafield.count({
      session: session,
      product_id: 632910392,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/products/632910392/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_22', async () => {
    queueMockResponse(JSON.stringify({"count": 0}));

    await shopify.rest.Metafield.count({
      session: session,
      article_id: 674387490,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/articles/674387490/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_23', async () => {
    queueMockResponse(JSON.stringify({"count": 1}));

    await shopify.rest.Metafield.count({
      session: session,
      product_image_id: 850703190,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/product_images/850703190/metafields/count.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_24', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 323119633, "namespace": "my_fields", "key": "color", "value": "Pink", "description": null, "owner_id": 808950810, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "variant", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/323119633"}}));

    await shopify.rest.Metafield.find({
      session: session,
      variant_id: 49148385,
      id: 323119633,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/variants/49148385/metafields/323119633.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_25', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 625663657, "namespace": "translation", "key": "title_fr", "value": "tbn", "description": "French product image title", "owner_id": 850703190, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product_image", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/625663657"}}));

    await shopify.rest.Metafield.find({
      session: session,
      product_image_id: 850703190,
      id: 625663657,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/product_images/850703190/metafields/625663657.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_26', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 1010236510, "namespace": "global", "key": "title_tag", "value": "Some seo title value", "description": null, "owner_id": 482865238, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "collection", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/1010236510"}}));

    await shopify.rest.Metafield.find({
      session: session,
      collection_id: 482865238,
      id: 1010236510,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/collections/482865238/metafields/1010236510.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_27', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 106172460, "namespace": "notes", "key": "note", "value": "B flat", "description": "This is for notes", "owner_id": 622762746, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "draft_order", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/106172460"}}));

    await shopify.rest.Metafield.find({
      session: session,
      draft_order_id: 622762746,
      id: 106172460,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/draft_orders/622762746/metafields/106172460.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_28', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 1001077698, "namespace": "my_fields", "key": "best_for", "value": "travel", "description": null, "owner_id": 632910392, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "product", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/1001077698"}}));

    await shopify.rest.Metafield.find({
      session: session,
      product_id: 632910392,
      id: 1001077698,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/products/632910392/metafields/1001077698.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_29', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 721389482, "namespace": "affiliates", "key": "app_key", "value": "app_key", "description": null, "owner_id": 548380009, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "shop", "type": "string", "admin_graphql_api_id": "gid://shopify/Metafield/721389482"}}));

    await shopify.rest.Metafield.find({
      session: session,
      id: 721389482,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/metafields/721389482.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_30', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 220591908, "namespace": "discounts", "key": "returning_customer", "value": "no", "description": "Customer deserves discount", "owner_id": 207119551, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "customer", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/220591908"}}));

    await shopify.rest.Metafield.find({
      session: session,
      customer_id: 207119551,
      id: 220591908,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/customers/207119551/metafields/220591908.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_31', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 534526895, "namespace": "translation", "key": "title_fr", "value": "Le iPod", "description": "Blog French title translation", "owner_id": 241253187, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "blog", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/534526895"}}));

    await shopify.rest.Metafield.find({
      session: session,
      blog_id: 382285388,
      id: 534526895,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/blogs/382285388/metafields/534526895.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_32', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 290519330, "namespace": "translation", "key": "title_fr", "value": "Le TOS", "description": "Page French title translation", "owner_id": 131092082, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "page", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/290519330"}}));

    await shopify.rest.Metafield.find({
      session: session,
      page_id: 131092082,
      id: 290519330,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/pages/131092082/metafields/290519330.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_33', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 915396079, "namespace": "notes", "key": "buyer", "value": "Notes about this buyer", "description": "This field is for buyer notes", "owner_id": 450789469, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "order", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/915396079"}}));

    await shopify.rest.Metafield.find({
      session: session,
      order_id: 450789469,
      id: 915396079,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/orders/450789469/metafields/915396079.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_34', async () => {
    queueMockResponse(JSON.stringify({"metafield": {"id": 838981074, "namespace": "translation", "key": "title_fr", "value": "Le Article", "description": "Article French title translation", "owner_id": 134645308, "created_at": "2022-10-03T12:15:55-04:00", "updated_at": "2022-10-03T12:15:55-04:00", "owner_resource": "article", "type": "single_line_text_field", "admin_graphql_api_id": "gid://shopify/Metafield/838981074"}}));

    await shopify.rest.Metafield.find({
      session: session,
      article_id: 674387490,
      id: 838981074,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-04/articles/674387490/metafields/838981074.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_35', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      product_image_id: 850703190,
      id: 625663657,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/product_images/850703190/metafields/625663657.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_36', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      draft_order_id: 622762746,
      id: 106172460,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/draft_orders/622762746/metafields/106172460.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_37', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      customer_id: 207119551,
      id: 220591908,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/customers/207119551/metafields/220591908.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_38', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      collection_id: 482865238,
      id: 1010236510,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/collections/482865238/metafields/1010236510.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_39', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      blog_id: 382285388,
      id: 534526895,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/blogs/382285388/metafields/534526895.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_40', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      id: 721389482,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/metafields/721389482.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_41', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      variant_id: 49148385,
      id: 323119633,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/variants/49148385/metafields/323119633.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_42', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      page_id: 131092082,
      id: 290519330,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/pages/131092082/metafields/290519330.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_43', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      product_id: 632910392,
      id: 1001077698,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/products/632910392/metafields/1001077698.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_44', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      order_id: 450789469,
      id: 915396079,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/orders/450789469/metafields/915396079.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

  it('test_45', async () => {
    queueMockResponse(JSON.stringify({}));

    await shopify.rest.Metafield.delete({
      session: session,
      article_id: 674387490,
      id: 838981074,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-04/articles/674387490/metafields/838981074.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

});
