
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Serie
 * 
 */
export type Serie = $Result.DefaultSelection<Prisma.$SeriePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Series
 * const series = await prisma.serie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Series
   * const series = await prisma.serie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.serie`: Exposes CRUD operations for the **Serie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.serie.findMany()
    * ```
    */
  get serie(): Prisma.SerieDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Serie: 'Serie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db3?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "serie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Serie: {
        payload: Prisma.$SeriePayload<ExtArgs>
        fields: Prisma.SerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          findFirst: {
            args: Prisma.SerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          findMany: {
            args: Prisma.SerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          create: {
            args: Prisma.SerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          createMany: {
            args: Prisma.SerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          delete: {
            args: Prisma.SerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          update: {
            args: Prisma.SerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          deleteMany: {
            args: Prisma.SerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          upsert: {
            args: Prisma.SerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          aggregate: {
            args: Prisma.SerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSerie>
          }
          groupBy: {
            args: Prisma.SerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<SerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.SerieCountArgs<ExtArgs>
            result: $Utils.Optional<SerieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    serie?: SerieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Serie
   */

  export type AggregateSerie = {
    _count: SerieCountAggregateOutputType | null
    _avg: SerieAvgAggregateOutputType | null
    _sum: SerieSumAggregateOutputType | null
    _min: SerieMinAggregateOutputType | null
    _max: SerieMaxAggregateOutputType | null
  }

  export type SerieAvgAggregateOutputType = {
    id: number | null
    id_content: number | null
    duration: number | null
  }

  export type SerieSumAggregateOutputType = {
    id: number | null
    id_content: number | null
    duration: number | null
  }

  export type SerieMinAggregateOutputType = {
    id: number | null
    id_content: number | null
    genre: string | null
    duration: number | null
    date: Date | null
    actors: string | null
    producer: string | null
  }

  export type SerieMaxAggregateOutputType = {
    id: number | null
    id_content: number | null
    genre: string | null
    duration: number | null
    date: Date | null
    actors: string | null
    producer: string | null
  }

  export type SerieCountAggregateOutputType = {
    id: number
    id_content: number
    genre: number
    duration: number
    date: number
    actors: number
    producer: number
    _all: number
  }


  export type SerieAvgAggregateInputType = {
    id?: true
    id_content?: true
    duration?: true
  }

  export type SerieSumAggregateInputType = {
    id?: true
    id_content?: true
    duration?: true
  }

  export type SerieMinAggregateInputType = {
    id?: true
    id_content?: true
    genre?: true
    duration?: true
    date?: true
    actors?: true
    producer?: true
  }

  export type SerieMaxAggregateInputType = {
    id?: true
    id_content?: true
    genre?: true
    duration?: true
    date?: true
    actors?: true
    producer?: true
  }

  export type SerieCountAggregateInputType = {
    id?: true
    id_content?: true
    genre?: true
    duration?: true
    date?: true
    actors?: true
    producer?: true
    _all?: true
  }

  export type SerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Serie to aggregate.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SerieMaxAggregateInputType
  }

  export type GetSerieAggregateType<T extends SerieAggregateArgs> = {
        [P in keyof T & keyof AggregateSerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSerie[P]>
      : GetScalarType<T[P], AggregateSerie[P]>
  }




  export type SerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerieWhereInput
    orderBy?: SerieOrderByWithAggregationInput | SerieOrderByWithAggregationInput[]
    by: SerieScalarFieldEnum[] | SerieScalarFieldEnum
    having?: SerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SerieCountAggregateInputType | true
    _avg?: SerieAvgAggregateInputType
    _sum?: SerieSumAggregateInputType
    _min?: SerieMinAggregateInputType
    _max?: SerieMaxAggregateInputType
  }

  export type SerieGroupByOutputType = {
    id: number
    id_content: number
    genre: string
    duration: number
    date: Date
    actors: string
    producer: string
    _count: SerieCountAggregateOutputType | null
    _avg: SerieAvgAggregateOutputType | null
    _sum: SerieSumAggregateOutputType | null
    _min: SerieMinAggregateOutputType | null
    _max: SerieMaxAggregateOutputType | null
  }

  type GetSerieGroupByPayload<T extends SerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SerieGroupByOutputType[P]>
            : GetScalarType<T[P], SerieGroupByOutputType[P]>
        }
      >
    >


  export type SerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_content?: boolean
    genre?: boolean
    duration?: boolean
    date?: boolean
    actors?: boolean
    producer?: boolean
  }, ExtArgs["result"]["serie"]>

  export type SerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_content?: boolean
    genre?: boolean
    duration?: boolean
    date?: boolean
    actors?: boolean
    producer?: boolean
  }, ExtArgs["result"]["serie"]>

  export type SerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_content?: boolean
    genre?: boolean
    duration?: boolean
    date?: boolean
    actors?: boolean
    producer?: boolean
  }, ExtArgs["result"]["serie"]>

  export type SerieSelectScalar = {
    id?: boolean
    id_content?: boolean
    genre?: boolean
    duration?: boolean
    date?: boolean
    actors?: boolean
    producer?: boolean
  }

  export type SerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_content" | "genre" | "duration" | "date" | "actors" | "producer", ExtArgs["result"]["serie"]>

  export type $SeriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Serie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_content: number
      genre: string
      duration: number
      date: Date
      actors: string
      producer: string
    }, ExtArgs["result"]["serie"]>
    composites: {}
  }

  type SerieGetPayload<S extends boolean | null | undefined | SerieDefaultArgs> = $Result.GetResult<Prisma.$SeriePayload, S>

  type SerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SerieCountAggregateInputType | true
    }

  export interface SerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Serie'], meta: { name: 'Serie' } }
    /**
     * Find zero or one Serie that matches the filter.
     * @param {SerieFindUniqueArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SerieFindUniqueArgs>(args: SelectSubset<T, SerieFindUniqueArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Serie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SerieFindUniqueOrThrowArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SerieFindUniqueOrThrowArgs>(args: SelectSubset<T, SerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Serie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindFirstArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SerieFindFirstArgs>(args?: SelectSubset<T, SerieFindFirstArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Serie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindFirstOrThrowArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SerieFindFirstOrThrowArgs>(args?: SelectSubset<T, SerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.serie.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.serie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serieWithIdOnly = await prisma.serie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SerieFindManyArgs>(args?: SelectSubset<T, SerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Serie.
     * @param {SerieCreateArgs} args - Arguments to create a Serie.
     * @example
     * // Create one Serie
     * const Serie = await prisma.serie.create({
     *   data: {
     *     // ... data to create a Serie
     *   }
     * })
     * 
     */
    create<T extends SerieCreateArgs>(args: SelectSubset<T, SerieCreateArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SerieCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const serie = await prisma.serie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SerieCreateManyArgs>(args?: SelectSubset<T, SerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {SerieCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const serie = await prisma.serie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const serieWithIdOnly = await prisma.serie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SerieCreateManyAndReturnArgs>(args?: SelectSubset<T, SerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Serie.
     * @param {SerieDeleteArgs} args - Arguments to delete one Serie.
     * @example
     * // Delete one Serie
     * const Serie = await prisma.serie.delete({
     *   where: {
     *     // ... filter to delete one Serie
     *   }
     * })
     * 
     */
    delete<T extends SerieDeleteArgs>(args: SelectSubset<T, SerieDeleteArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Serie.
     * @param {SerieUpdateArgs} args - Arguments to update one Serie.
     * @example
     * // Update one Serie
     * const serie = await prisma.serie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SerieUpdateArgs>(args: SelectSubset<T, SerieUpdateArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SerieDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.serie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SerieDeleteManyArgs>(args?: SelectSubset<T, SerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const serie = await prisma.serie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SerieUpdateManyArgs>(args: SelectSubset<T, SerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series and returns the data updated in the database.
     * @param {SerieUpdateManyAndReturnArgs} args - Arguments to update many Series.
     * @example
     * // Update many Series
     * const serie = await prisma.serie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Series and only return the `id`
     * const serieWithIdOnly = await prisma.serie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SerieUpdateManyAndReturnArgs>(args: SelectSubset<T, SerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Serie.
     * @param {SerieUpsertArgs} args - Arguments to update or create a Serie.
     * @example
     * // Update or create a Serie
     * const serie = await prisma.serie.upsert({
     *   create: {
     *     // ... data to create a Serie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Serie we want to update
     *   }
     * })
     */
    upsert<T extends SerieUpsertArgs>(args: SelectSubset<T, SerieUpsertArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.serie.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SerieCountArgs>(
      args?: Subset<T, SerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SerieAggregateArgs>(args: Subset<T, SerieAggregateArgs>): Prisma.PrismaPromise<GetSerieAggregateType<T>>

    /**
     * Group by Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SerieGroupByArgs['orderBy'] }
        : { orderBy?: SerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Serie model
   */
  readonly fields: SerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Serie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Serie model
   */
  interface SerieFieldRefs {
    readonly id: FieldRef<"Serie", 'Int'>
    readonly id_content: FieldRef<"Serie", 'Int'>
    readonly genre: FieldRef<"Serie", 'String'>
    readonly duration: FieldRef<"Serie", 'Int'>
    readonly date: FieldRef<"Serie", 'DateTime'>
    readonly actors: FieldRef<"Serie", 'String'>
    readonly producer: FieldRef<"Serie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Serie findUnique
   */
  export type SerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie findUniqueOrThrow
   */
  export type SerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie findFirst
   */
  export type SerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie findFirstOrThrow
   */
  export type SerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie findMany
   */
  export type SerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie create
   */
  export type SerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The data needed to create a Serie.
     */
    data: XOR<SerieCreateInput, SerieUncheckedCreateInput>
  }

  /**
   * Serie createMany
   */
  export type SerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SerieCreateManyInput | SerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Serie createManyAndReturn
   */
  export type SerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The data used to create many Series.
     */
    data: SerieCreateManyInput | SerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Serie update
   */
  export type SerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The data needed to update a Serie.
     */
    data: XOR<SerieUpdateInput, SerieUncheckedUpdateInput>
    /**
     * Choose, which Serie to update.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie updateMany
   */
  export type SerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SerieUpdateManyMutationInput, SerieUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Serie updateManyAndReturn
   */
  export type SerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The data used to update Series.
     */
    data: XOR<SerieUpdateManyMutationInput, SerieUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Serie upsert
   */
  export type SerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The filter to search for the Serie to update in case it exists.
     */
    where: SerieWhereUniqueInput
    /**
     * In case the Serie found by the `where` argument doesn't exist, create a new Serie with this data.
     */
    create: XOR<SerieCreateInput, SerieUncheckedCreateInput>
    /**
     * In case the Serie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SerieUpdateInput, SerieUncheckedUpdateInput>
  }

  /**
   * Serie delete
   */
  export type SerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Filter which Serie to delete.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie deleteMany
   */
  export type SerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Serie without action
   */
  export type SerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SerieScalarFieldEnum: {
    id: 'id',
    id_content: 'id_content',
    genre: 'genre',
    duration: 'duration',
    date: 'date',
    actors: 'actors',
    producer: 'producer'
  };

  export type SerieScalarFieldEnum = (typeof SerieScalarFieldEnum)[keyof typeof SerieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SerieWhereInput = {
    AND?: SerieWhereInput | SerieWhereInput[]
    OR?: SerieWhereInput[]
    NOT?: SerieWhereInput | SerieWhereInput[]
    id?: IntFilter<"Serie"> | number
    id_content?: IntFilter<"Serie"> | number
    genre?: StringFilter<"Serie"> | string
    duration?: IntFilter<"Serie"> | number
    date?: DateTimeFilter<"Serie"> | Date | string
    actors?: StringFilter<"Serie"> | string
    producer?: StringFilter<"Serie"> | string
  }

  export type SerieOrderByWithRelationInput = {
    id?: SortOrder
    id_content?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    actors?: SortOrder
    producer?: SortOrder
  }

  export type SerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_content?: number
    AND?: SerieWhereInput | SerieWhereInput[]
    OR?: SerieWhereInput[]
    NOT?: SerieWhereInput | SerieWhereInput[]
    genre?: StringFilter<"Serie"> | string
    duration?: IntFilter<"Serie"> | number
    date?: DateTimeFilter<"Serie"> | Date | string
    actors?: StringFilter<"Serie"> | string
    producer?: StringFilter<"Serie"> | string
  }, "id" | "id_content">

  export type SerieOrderByWithAggregationInput = {
    id?: SortOrder
    id_content?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    actors?: SortOrder
    producer?: SortOrder
    _count?: SerieCountOrderByAggregateInput
    _avg?: SerieAvgOrderByAggregateInput
    _max?: SerieMaxOrderByAggregateInput
    _min?: SerieMinOrderByAggregateInput
    _sum?: SerieSumOrderByAggregateInput
  }

  export type SerieScalarWhereWithAggregatesInput = {
    AND?: SerieScalarWhereWithAggregatesInput | SerieScalarWhereWithAggregatesInput[]
    OR?: SerieScalarWhereWithAggregatesInput[]
    NOT?: SerieScalarWhereWithAggregatesInput | SerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Serie"> | number
    id_content?: IntWithAggregatesFilter<"Serie"> | number
    genre?: StringWithAggregatesFilter<"Serie"> | string
    duration?: IntWithAggregatesFilter<"Serie"> | number
    date?: DateTimeWithAggregatesFilter<"Serie"> | Date | string
    actors?: StringWithAggregatesFilter<"Serie"> | string
    producer?: StringWithAggregatesFilter<"Serie"> | string
  }

  export type SerieCreateInput = {
    id_content: number
    genre: string
    duration: number
    date: Date | string
    actors: string
    producer: string
  }

  export type SerieUncheckedCreateInput = {
    id?: number
    id_content: number
    genre: string
    duration: number
    date: Date | string
    actors: string
    producer: string
  }

  export type SerieUpdateInput = {
    id_content?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    actors?: StringFieldUpdateOperationsInput | string
    producer?: StringFieldUpdateOperationsInput | string
  }

  export type SerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_content?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    actors?: StringFieldUpdateOperationsInput | string
    producer?: StringFieldUpdateOperationsInput | string
  }

  export type SerieCreateManyInput = {
    id?: number
    id_content: number
    genre: string
    duration: number
    date: Date | string
    actors: string
    producer: string
  }

  export type SerieUpdateManyMutationInput = {
    id_content?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    actors?: StringFieldUpdateOperationsInput | string
    producer?: StringFieldUpdateOperationsInput | string
  }

  export type SerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_content?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    actors?: StringFieldUpdateOperationsInput | string
    producer?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SerieCountOrderByAggregateInput = {
    id?: SortOrder
    id_content?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    actors?: SortOrder
    producer?: SortOrder
  }

  export type SerieAvgOrderByAggregateInput = {
    id?: SortOrder
    id_content?: SortOrder
    duration?: SortOrder
  }

  export type SerieMaxOrderByAggregateInput = {
    id?: SortOrder
    id_content?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    actors?: SortOrder
    producer?: SortOrder
  }

  export type SerieMinOrderByAggregateInput = {
    id?: SortOrder
    id_content?: SortOrder
    genre?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    actors?: SortOrder
    producer?: SortOrder
  }

  export type SerieSumOrderByAggregateInput = {
    id?: SortOrder
    id_content?: SortOrder
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}