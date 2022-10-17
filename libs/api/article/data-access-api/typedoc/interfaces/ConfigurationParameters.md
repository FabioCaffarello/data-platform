# Interface: ConfigurationParameters

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| () => `string`

**`Deprecated`**

Since 5.0. Use credentials instead

#### Defined in

[lib/configuration.ts:13](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L13)

___

### apiKeys

• `Optional` **apiKeys**: `Object`

**`Deprecated`**

Since 5.0. Use credentials instead

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[lib/configuration.ts:7](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L7)

___

### basePath

• `Optional` **basePath**: `string`

#### Defined in

[lib/configuration.ts:14](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L14)

___

### credentials

• `Optional` **credentials**: `Object`

The keys are the names in the securitySchemes section of the OpenAPI
document. They should map to the value used for authentication
minus any standard prefixes such as 'Basic' or 'Bearer'.

#### Index signature

▪ [key: `string`]: `string` \| () => `string` \| `undefined`

#### Defined in

[lib/configuration.ts:22](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L22)

___

### encoder

• `Optional` **encoder**: `HttpParameterCodec`

#### Defined in

[lib/configuration.ts:16](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L16)

___

### password

• `Optional` **password**: `string`

#### Defined in

[lib/configuration.ts:9](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L9)

___

### username

• `Optional` **username**: `string`

#### Defined in

[lib/configuration.ts:8](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L8)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

[lib/configuration.ts:15](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/configuration.ts#L15)
