# Class: Configuration

## Constructors

### constructor

• **new Configuration**(`configurationParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurationParameters` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[lib/configuration.ts:46](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L46)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| () => `string`

**`Deprecated`**

Since 5.0. Use credentials instead

#### Defined in

[lib/configuration.ts:35](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L35)

___

### apiKeys

• `Optional` **apiKeys**: `Object`

**`Deprecated`**

Since 5.0. Use credentials instead

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[lib/configuration.ts:29](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L29)

___

### basePath

• `Optional` **basePath**: `string`

#### Defined in

[lib/configuration.ts:36](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L36)

___

### credentials

• **credentials**: `Object`

The keys are the names in the securitySchemes section of the OpenAPI
document. They should map to the value used for authentication
minus any standard prefixes such as 'Basic' or 'Bearer'.

#### Index signature

▪ [key: `string`]: `string` \| () => `string` \| `undefined`

#### Defined in

[lib/configuration.ts:44](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L44)

___

### encoder

• `Optional` **encoder**: `HttpParameterCodec`

#### Defined in

[lib/configuration.ts:38](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L38)

___

### password

• `Optional` **password**: `string`

#### Defined in

[lib/configuration.ts:31](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L31)

___

### username

• `Optional` **username**: `string`

#### Defined in

[lib/configuration.ts:30](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L30)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

[lib/configuration.ts:37](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L37)

## Methods

### isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

[lib/configuration.ts:109](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L109)

___

### lookupCredential

▸ **lookupCredential**(`key`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[lib/configuration.ts:121](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L121)

___

### selectHeaderAccept

▸ **selectHeaderAccept**(`accepts`): `undefined` \| `string`

Select the correct accept content-type to use for a request.
Uses [isJsonMime](Configuration.md#isjsonmime) to determine the correct accept content-type.
If no content type is found return the first found type if the contentTypes is not empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accepts` | `string`[] | the array of content types that are available for selection. |

#### Returns

`undefined` \| `string`

the selected content-type or <code>undefined</code> if no selection could be made.

#### Defined in

[lib/configuration.ts:87](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L87)

___

### selectHeaderContentType

▸ **selectHeaderContentType**(`contentTypes`): `undefined` \| `string`

Select the correct content-type to use for a request.
Uses [isJsonMime](Configuration.md#isjsonmime) to determine the correct content-type.
If no content type is found return the first found type if the contentTypes is not empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentTypes` | `string`[] | the array of content types that are available for selection |

#### Returns

`undefined` \| `string`

the selected content-type or <code>undefined</code> if no selection could be made.

#### Defined in

[lib/configuration.ts:68](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L68)
