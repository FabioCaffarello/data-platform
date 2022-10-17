# Class: ApiModule

## Constructors

### constructor

• **new ApiModule**(`parentModule`, `http`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentModule` | [`ApiModule`](ApiModule.md) |
| `http` | `HttpClient` |

#### Defined in

[lib/api.module.ts:28](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api.module.ts#L28)

## Methods

### forRoot

▸ `Static` **forRoot**(`configurationFactory`): `ModuleWithProviders`<[`ApiModule`](ApiModule.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurationFactory` | () => [`Configuration`](Configuration.md) |

#### Returns

`ModuleWithProviders`<[`ApiModule`](ApiModule.md)\>

#### Defined in

[lib/api.module.ts:19](https://github.com/FabioCaffarello/data-platform/blob/9cc2b73/libs/api/article/data-access-api/src/lib/api.module.ts#L19)
