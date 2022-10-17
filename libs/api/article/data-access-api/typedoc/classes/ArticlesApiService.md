# Class: ArticlesApiService

## Constructors

### constructor

• **new ArticlesApiService**(`httpClient`, `basePath`, `configuration`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpClient` | `HttpClient` |
| `basePath` | `string` |
| `configuration` | [`Configuration`](Configuration.md) |

#### Defined in

[lib/api/articles.service.ts:41](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L41)

## Properties

### basePath

• `Protected` **basePath**: `string` = `'http://localhost:3000'`

#### Defined in

[lib/api/articles.service.ts:36](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L36)

___

### configuration

• **configuration**: [`Configuration`](Configuration.md)

#### Defined in

[lib/api/articles.service.ts:38](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L38)

___

### defaultHeaders

• **defaultHeaders**: `HttpHeaders`

#### Defined in

[lib/api/articles.service.ts:37](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L37)

___

### encoder

• **encoder**: `HttpParameterCodec`

#### Defined in

[lib/api/articles.service.ts:39](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L39)

___

### httpClient

• `Protected` **httpClient**: `HttpClient`

#### Defined in

[lib/api/articles.service.ts:42](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L42)

## Methods

### addToHttpParams

▸ `Private` **addToHttpParams**(`httpParams`, `value`, `key?`): `HttpParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpParams` | `HttpParams` |
| `value` | `any` |
| `key?` | `string` |

#### Returns

`HttpParams`

#### Defined in

[lib/api/articles.service.ts:58](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L58)

___

### addToHttpParamsRecursive

▸ `Private` **addToHttpParamsRecursive**(`httpParams`, `value?`, `key?`): `HttpParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpParams` | `HttpParams` |
| `value?` | `any` |
| `key?` | `string` |

#### Returns

`HttpParams`

#### Defined in

[lib/api/articles.service.ts:71](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L71)

___

### articleControllerCreateArticle

▸ **articleControllerCreateArticle**(`createArticleDto`, `observe?`, `reportProgress?`, `options?`): `Observable`<[`Article`](../interfaces/Article.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createArticleDto` | [`CreateArticleDto`](../interfaces/CreateArticleDto.md) |  |
| `observe?` | ``"body"`` | set whether or not to return the data Observable as the body, response or events. defaults to returning the body. |
| `reportProgress?` | `boolean` | flag to report request and response progress. |
| `options?` | `Object` | - |
| `options.httpHeaderAccept?` | ``"application/json"`` | - |

#### Returns

`Observable`<[`Article`](../interfaces/Article.md)\>

#### Defined in

[lib/api/articles.service.ts:118](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L118)

▸ **articleControllerCreateArticle**(`createArticleDto`, `observe?`, `reportProgress?`, `options?`): `Observable`<`HttpResponse`<[`Article`](../interfaces/Article.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `createArticleDto` | [`CreateArticleDto`](../interfaces/CreateArticleDto.md) |
| `observe?` | ``"response"`` |
| `reportProgress?` | `boolean` |
| `options?` | `Object` |
| `options.httpHeaderAccept?` | ``"application/json"`` |

#### Returns

`Observable`<`HttpResponse`<[`Article`](../interfaces/Article.md)\>\>

#### Defined in

[lib/api/articles.service.ts:124](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L124)

▸ **articleControllerCreateArticle**(`createArticleDto`, `observe?`, `reportProgress?`, `options?`): `Observable`<`HttpEvent`<[`Article`](../interfaces/Article.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `createArticleDto` | [`CreateArticleDto`](../interfaces/CreateArticleDto.md) |
| `observe?` | ``"events"`` |
| `reportProgress?` | `boolean` |
| `options?` | `Object` |
| `options.httpHeaderAccept?` | ``"application/json"`` |

#### Returns

`Observable`<`HttpEvent`<[`Article`](../interfaces/Article.md)\>\>

#### Defined in

[lib/api/articles.service.ts:130](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L130)

___

### articleControllerGetAllArticles

▸ **articleControllerGetAllArticles**(`observe?`, `reportProgress?`, `options?`): `Observable`<[`Article`](../interfaces/Article.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observe?` | ``"body"`` | set whether or not to return the data Observable as the body, response or events. defaults to returning the body. |
| `reportProgress?` | `boolean` | flag to report request and response progress. |
| `options?` | `Object` | - |
| `options.httpHeaderAccept?` | ``"application/json"`` | - |

#### Returns

`Observable`<[`Article`](../interfaces/Article.md)[]\>

#### Defined in

[lib/api/articles.service.ts:195](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L195)

▸ **articleControllerGetAllArticles**(`observe?`, `reportProgress?`, `options?`): `Observable`<`HttpResponse`<[`Article`](../interfaces/Article.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `observe?` | ``"response"`` |
| `reportProgress?` | `boolean` |
| `options?` | `Object` |
| `options.httpHeaderAccept?` | ``"application/json"`` |

#### Returns

`Observable`<`HttpResponse`<[`Article`](../interfaces/Article.md)[]\>\>

#### Defined in

[lib/api/articles.service.ts:200](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L200)

▸ **articleControllerGetAllArticles**(`observe?`, `reportProgress?`, `options?`): `Observable`<`HttpEvent`<[`Article`](../interfaces/Article.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `observe?` | ``"events"`` |
| `reportProgress?` | `boolean` |
| `options?` | `Object` |
| `options.httpHeaderAccept?` | ``"application/json"`` |

#### Returns

`Observable`<`HttpEvent`<[`Article`](../interfaces/Article.md)[]\>\>

#### Defined in

[lib/api/articles.service.ts:205](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api/articles.service.ts#L205)
