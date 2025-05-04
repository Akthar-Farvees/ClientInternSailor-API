
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
 * Model Feedbacks
 * 
 */
export type Feedbacks = $Result.DefaultSelection<Prisma.$FeedbacksPayload>
/**
 * Model adminusers
 * 
 */
export type adminusers = $Result.DefaultSelection<Prisma.$adminusersPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model companydepartment
 * 
 */
export type companydepartment = $Result.DefaultSelection<Prisma.$companydepartmentPayload>
/**
 * Model companyuser
 * 
 */
export type companyuser = $Result.DefaultSelection<Prisma.$companyuserPayload>
/**
 * Model departments
 * 
 */
export type departments = $Result.DefaultSelection<Prisma.$departmentsPayload>
/**
 * Model industries
 * 
 */
export type industries = $Result.DefaultSelection<Prisma.$industriesPayload>
/**
 * Model job
 * 
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>
/**
 * Model noofemployees
 * 
 */
export type noofemployees = $Result.DefaultSelection<Prisma.$noofemployeesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Feedbacks
 * const feedbacks = await prisma.feedbacks.findMany()
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
   * // Fetch zero or more Feedbacks
   * const feedbacks = await prisma.feedbacks.findMany()
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
   * `prisma.feedbacks`: Exposes CRUD operations for the **Feedbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedbacks.findMany()
    * ```
    */
  get feedbacks(): Prisma.FeedbacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminusers`: Exposes CRUD operations for the **adminusers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adminusers
    * const adminusers = await prisma.adminusers.findMany()
    * ```
    */
  get adminusers(): Prisma.adminusersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companydepartment`: Exposes CRUD operations for the **companydepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companydepartments
    * const companydepartments = await prisma.companydepartment.findMany()
    * ```
    */
  get companydepartment(): Prisma.companydepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyuser`: Exposes CRUD operations for the **companyuser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companyusers
    * const companyusers = await prisma.companyuser.findMany()
    * ```
    */
  get companyuser(): Prisma.companyuserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.departmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industries`: Exposes CRUD operations for the **industries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Industries
    * const industries = await prisma.industries.findMany()
    * ```
    */
  get industries(): Prisma.industriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.jobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noofemployees`: Exposes CRUD operations for the **noofemployees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noofemployees
    * const noofemployees = await prisma.noofemployees.findMany()
    * ```
    */
  get noofemployees(): Prisma.noofemployeesDelegate<ExtArgs, ClientOptions>;
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
    Feedbacks: 'Feedbacks',
    adminusers: 'adminusers',
    company: 'company',
    companydepartment: 'companydepartment',
    companyuser: 'companyuser',
    departments: 'departments',
    industries: 'industries',
    job: 'job',
    noofemployees: 'noofemployees'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "feedbacks" | "adminusers" | "company" | "companydepartment" | "companyuser" | "departments" | "industries" | "job" | "noofemployees"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Feedbacks: {
        payload: Prisma.$FeedbacksPayload<ExtArgs>
        fields: Prisma.FeedbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>
          }
          findFirst: {
            args: Prisma.FeedbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>
          }
          findMany: {
            args: Prisma.FeedbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>[]
          }
          create: {
            args: Prisma.FeedbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>
          }
          createMany: {
            args: Prisma.FeedbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>[]
          }
          delete: {
            args: Prisma.FeedbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>
          }
          update: {
            args: Prisma.FeedbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>
          }
          deleteMany: {
            args: Prisma.FeedbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>[]
          }
          upsert: {
            args: Prisma.FeedbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbacksPayload>
          }
          aggregate: {
            args: Prisma.FeedbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbacks>
          }
          groupBy: {
            args: Prisma.FeedbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbacksCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksCountAggregateOutputType> | number
          }
        }
      }
      adminusers: {
        payload: Prisma.$adminusersPayload<ExtArgs>
        fields: Prisma.adminusersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminusersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminusersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>
          }
          findFirst: {
            args: Prisma.adminusersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminusersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>
          }
          findMany: {
            args: Prisma.adminusersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>[]
          }
          create: {
            args: Prisma.adminusersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>
          }
          createMany: {
            args: Prisma.adminusersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminusersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>[]
          }
          delete: {
            args: Prisma.adminusersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>
          }
          update: {
            args: Prisma.adminusersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>
          }
          deleteMany: {
            args: Prisma.adminusersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminusersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminusersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>[]
          }
          upsert: {
            args: Prisma.adminusersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminusersPayload>
          }
          aggregate: {
            args: Prisma.AdminusersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminusers>
          }
          groupBy: {
            args: Prisma.adminusersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminusersGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminusersCountArgs<ExtArgs>
            result: $Utils.Optional<AdminusersCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      companydepartment: {
        payload: Prisma.$companydepartmentPayload<ExtArgs>
        fields: Prisma.companydepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companydepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companydepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>
          }
          findFirst: {
            args: Prisma.companydepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companydepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>
          }
          findMany: {
            args: Prisma.companydepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>[]
          }
          create: {
            args: Prisma.companydepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>
          }
          createMany: {
            args: Prisma.companydepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companydepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>[]
          }
          delete: {
            args: Prisma.companydepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>
          }
          update: {
            args: Prisma.companydepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>
          }
          deleteMany: {
            args: Prisma.companydepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companydepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companydepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>[]
          }
          upsert: {
            args: Prisma.companydepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companydepartmentPayload>
          }
          aggregate: {
            args: Prisma.CompanydepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanydepartment>
          }
          groupBy: {
            args: Prisma.companydepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanydepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.companydepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<CompanydepartmentCountAggregateOutputType> | number
          }
        }
      }
      companyuser: {
        payload: Prisma.$companyuserPayload<ExtArgs>
        fields: Prisma.companyuserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyuserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyuserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>
          }
          findFirst: {
            args: Prisma.companyuserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyuserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>
          }
          findMany: {
            args: Prisma.companyuserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>[]
          }
          create: {
            args: Prisma.companyuserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>
          }
          createMany: {
            args: Prisma.companyuserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyuserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>[]
          }
          delete: {
            args: Prisma.companyuserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>
          }
          update: {
            args: Prisma.companyuserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>
          }
          deleteMany: {
            args: Prisma.companyuserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyuserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyuserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>[]
          }
          upsert: {
            args: Prisma.companyuserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyuserPayload>
          }
          aggregate: {
            args: Prisma.CompanyuserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyuser>
          }
          groupBy: {
            args: Prisma.companyuserGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyuserGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyuserCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyuserCountAggregateOutputType> | number
          }
        }
      }
      departments: {
        payload: Prisma.$departmentsPayload<ExtArgs>
        fields: Prisma.departmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findFirst: {
            args: Prisma.departmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findMany: {
            args: Prisma.departmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          create: {
            args: Prisma.departmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          createMany: {
            args: Prisma.departmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          delete: {
            args: Prisma.departmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          update: {
            args: Prisma.departmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          deleteMany: {
            args: Prisma.departmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          upsert: {
            args: Prisma.departmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.departmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      industries: {
        payload: Prisma.$industriesPayload<ExtArgs>
        fields: Prisma.industriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.industriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.industriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>
          }
          findFirst: {
            args: Prisma.industriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.industriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>
          }
          findMany: {
            args: Prisma.industriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>[]
          }
          create: {
            args: Prisma.industriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>
          }
          createMany: {
            args: Prisma.industriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.industriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>[]
          }
          delete: {
            args: Prisma.industriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>
          }
          update: {
            args: Prisma.industriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>
          }
          deleteMany: {
            args: Prisma.industriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.industriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.industriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>[]
          }
          upsert: {
            args: Prisma.industriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$industriesPayload>
          }
          aggregate: {
            args: Prisma.IndustriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustries>
          }
          groupBy: {
            args: Prisma.industriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.industriesCountArgs<ExtArgs>
            result: $Utils.Optional<IndustriesCountAggregateOutputType> | number
          }
        }
      }
      job: {
        payload: Prisma.$jobPayload<ExtArgs>
        fields: Prisma.jobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      noofemployees: {
        payload: Prisma.$noofemployeesPayload<ExtArgs>
        fields: Prisma.noofemployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.noofemployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.noofemployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>
          }
          findFirst: {
            args: Prisma.noofemployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.noofemployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>
          }
          findMany: {
            args: Prisma.noofemployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>[]
          }
          create: {
            args: Prisma.noofemployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>
          }
          createMany: {
            args: Prisma.noofemployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.noofemployeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>[]
          }
          delete: {
            args: Prisma.noofemployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>
          }
          update: {
            args: Prisma.noofemployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>
          }
          deleteMany: {
            args: Prisma.noofemployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.noofemployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.noofemployeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>[]
          }
          upsert: {
            args: Prisma.noofemployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$noofemployeesPayload>
          }
          aggregate: {
            args: Prisma.NoofemployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoofemployees>
          }
          groupBy: {
            args: Prisma.noofemployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoofemployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.noofemployeesCountArgs<ExtArgs>
            result: $Utils.Optional<NoofemployeesCountAggregateOutputType> | number
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
    feedbacks?: FeedbacksOmit
    adminusers?: adminusersOmit
    company?: companyOmit
    companydepartment?: companydepartmentOmit
    companyuser?: companyuserOmit
    departments?: departmentsOmit
    industries?: industriesOmit
    job?: jobOmit
    noofemployees?: noofemployeesOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    companydepartment: number
    companyuser: number
    job: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companydepartment?: boolean | CompanyCountOutputTypeCountCompanydepartmentArgs
    companyuser?: boolean | CompanyCountOutputTypeCountCompanyuserArgs
    job?: boolean | CompanyCountOutputTypeCountJobArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanydepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companydepartmentWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanyuserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyuserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
  }


  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    companydepartment: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companydepartment?: boolean | DepartmentsCountOutputTypeCountCompanydepartmentArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountCompanydepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companydepartmentWhereInput
  }


  /**
   * Count Type IndustriesCountOutputType
   */

  export type IndustriesCountOutputType = {
    company: number
  }

  export type IndustriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | IndustriesCountOutputTypeCountCompanyArgs
  }

  // Custom InputTypes
  /**
   * IndustriesCountOutputType without action
   */
  export type IndustriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustriesCountOutputType
     */
    select?: IndustriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustriesCountOutputType without action
   */
  export type IndustriesCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
  }


  /**
   * Count Type NoofemployeesCountOutputType
   */

  export type NoofemployeesCountOutputType = {
    company: number
  }

  export type NoofemployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | NoofemployeesCountOutputTypeCountCompanyArgs
  }

  // Custom InputTypes
  /**
   * NoofemployeesCountOutputType without action
   */
  export type NoofemployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoofemployeesCountOutputType
     */
    select?: NoofemployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoofemployeesCountOutputType without action
   */
  export type NoofemployeesCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Feedbacks
   */

  export type AggregateFeedbacks = {
    _count: FeedbacksCountAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  export type FeedbacksMinAggregateOutputType = {
    FeedbackId: string | null
    Name: string | null
    Email: string | null
    Message: string | null
    CreatedDate: Date | null
  }

  export type FeedbacksMaxAggregateOutputType = {
    FeedbackId: string | null
    Name: string | null
    Email: string | null
    Message: string | null
    CreatedDate: Date | null
  }

  export type FeedbacksCountAggregateOutputType = {
    FeedbackId: number
    Name: number
    Email: number
    Message: number
    CreatedDate: number
    _all: number
  }


  export type FeedbacksMinAggregateInputType = {
    FeedbackId?: true
    Name?: true
    Email?: true
    Message?: true
    CreatedDate?: true
  }

  export type FeedbacksMaxAggregateInputType = {
    FeedbackId?: true
    Name?: true
    Email?: true
    Message?: true
    CreatedDate?: true
  }

  export type FeedbacksCountAggregateInputType = {
    FeedbackId?: true
    Name?: true
    Email?: true
    Message?: true
    CreatedDate?: true
    _all?: true
  }

  export type FeedbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to aggregate.
     */
    where?: FeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbacksOrderByWithRelationInput | FeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbacksMaxAggregateInputType
  }

  export type GetFeedbacksAggregateType<T extends FeedbacksAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbacks[P]>
      : GetScalarType<T[P], AggregateFeedbacks[P]>
  }




  export type FeedbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbacksWhereInput
    orderBy?: FeedbacksOrderByWithAggregationInput | FeedbacksOrderByWithAggregationInput[]
    by: FeedbacksScalarFieldEnum[] | FeedbacksScalarFieldEnum
    having?: FeedbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbacksCountAggregateInputType | true
    _min?: FeedbacksMinAggregateInputType
    _max?: FeedbacksMaxAggregateInputType
  }

  export type FeedbacksGroupByOutputType = {
    FeedbackId: string
    Name: string | null
    Email: string | null
    Message: string | null
    CreatedDate: Date | null
    _count: FeedbacksCountAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  type GetFeedbacksGroupByPayload<T extends FeedbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
        }
      >
    >


  export type FeedbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FeedbackId?: boolean
    Name?: boolean
    Email?: boolean
    Message?: boolean
    CreatedDate?: boolean
  }, ExtArgs["result"]["feedbacks"]>

  export type FeedbacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FeedbackId?: boolean
    Name?: boolean
    Email?: boolean
    Message?: boolean
    CreatedDate?: boolean
  }, ExtArgs["result"]["feedbacks"]>

  export type FeedbacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FeedbackId?: boolean
    Name?: boolean
    Email?: boolean
    Message?: boolean
    CreatedDate?: boolean
  }, ExtArgs["result"]["feedbacks"]>

  export type FeedbacksSelectScalar = {
    FeedbackId?: boolean
    Name?: boolean
    Email?: boolean
    Message?: boolean
    CreatedDate?: boolean
  }

  export type FeedbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"FeedbackId" | "Name" | "Email" | "Message" | "CreatedDate", ExtArgs["result"]["feedbacks"]>

  export type $FeedbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedbacks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      FeedbackId: string
      Name: string | null
      Email: string | null
      Message: string | null
      CreatedDate: Date | null
    }, ExtArgs["result"]["feedbacks"]>
    composites: {}
  }

  type FeedbacksGetPayload<S extends boolean | null | undefined | FeedbacksDefaultArgs> = $Result.GetResult<Prisma.$FeedbacksPayload, S>

  type FeedbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbacksCountAggregateInputType | true
    }

  export interface FeedbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedbacks'], meta: { name: 'Feedbacks' } }
    /**
     * Find zero or one Feedbacks that matches the filter.
     * @param {FeedbacksFindUniqueArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbacksFindUniqueArgs>(args: SelectSubset<T, FeedbacksFindUniqueArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbacksFindUniqueOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksFindFirstArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbacksFindFirstArgs>(args?: SelectSubset<T, FeedbacksFindFirstArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksFindFirstOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany({ take: 10 })
     * 
     * // Only select the `FeedbackId`
     * const feedbacksWithFeedbackIdOnly = await prisma.feedbacks.findMany({ select: { FeedbackId: true } })
     * 
     */
    findMany<T extends FeedbacksFindManyArgs>(args?: SelectSubset<T, FeedbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedbacks.
     * @param {FeedbacksCreateArgs} args - Arguments to create a Feedbacks.
     * @example
     * // Create one Feedbacks
     * const Feedbacks = await prisma.feedbacks.create({
     *   data: {
     *     // ... data to create a Feedbacks
     *   }
     * })
     * 
     */
    create<T extends FeedbacksCreateArgs>(args: SelectSubset<T, FeedbacksCreateArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbacksCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedbacks = await prisma.feedbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbacksCreateManyArgs>(args?: SelectSubset<T, FeedbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbacksCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedbacks = await prisma.feedbacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `FeedbackId`
     * const feedbacksWithFeedbackIdOnly = await prisma.feedbacks.createManyAndReturn({
     *   select: { FeedbackId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbacksCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedbacks.
     * @param {FeedbacksDeleteArgs} args - Arguments to delete one Feedbacks.
     * @example
     * // Delete one Feedbacks
     * const Feedbacks = await prisma.feedbacks.delete({
     *   where: {
     *     // ... filter to delete one Feedbacks
     *   }
     * })
     * 
     */
    delete<T extends FeedbacksDeleteArgs>(args: SelectSubset<T, FeedbacksDeleteArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedbacks.
     * @param {FeedbacksUpdateArgs} args - Arguments to update one Feedbacks.
     * @example
     * // Update one Feedbacks
     * const feedbacks = await prisma.feedbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbacksUpdateArgs>(args: SelectSubset<T, FeedbacksUpdateArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbacksDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbacksDeleteManyArgs>(args?: SelectSubset<T, FeedbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedbacks = await prisma.feedbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbacksUpdateManyArgs>(args: SelectSubset<T, FeedbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbacksUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedbacks = await prisma.feedbacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `FeedbackId`
     * const feedbacksWithFeedbackIdOnly = await prisma.feedbacks.updateManyAndReturn({
     *   select: { FeedbackId: true },
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
    updateManyAndReturn<T extends FeedbacksUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedbacks.
     * @param {FeedbacksUpsertArgs} args - Arguments to update or create a Feedbacks.
     * @example
     * // Update or create a Feedbacks
     * const feedbacks = await prisma.feedbacks.upsert({
     *   create: {
     *     // ... data to create a Feedbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedbacks we want to update
     *   }
     * })
     */
    upsert<T extends FeedbacksUpsertArgs>(args: SelectSubset<T, FeedbacksUpsertArgs<ExtArgs>>): Prisma__FeedbacksClient<$Result.GetResult<Prisma.$FeedbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedbacks.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbacksCountArgs>(
      args?: Subset<T, FeedbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbacksAggregateArgs>(args: Subset<T, FeedbacksAggregateArgs>): Prisma.PrismaPromise<GetFeedbacksAggregateType<T>>

    /**
     * Group by Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksGroupByArgs} args - Group by arguments.
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
      T extends FeedbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbacksGroupByArgs['orderBy'] }
        : { orderBy?: FeedbacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedbacks model
   */
  readonly fields: FeedbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Feedbacks model
   */
  interface FeedbacksFieldRefs {
    readonly FeedbackId: FieldRef<"Feedbacks", 'String'>
    readonly Name: FieldRef<"Feedbacks", 'String'>
    readonly Email: FieldRef<"Feedbacks", 'String'>
    readonly Message: FieldRef<"Feedbacks", 'String'>
    readonly CreatedDate: FieldRef<"Feedbacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedbacks findUnique
   */
  export type FeedbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where: FeedbacksWhereUniqueInput
  }

  /**
   * Feedbacks findUniqueOrThrow
   */
  export type FeedbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where: FeedbacksWhereUniqueInput
  }

  /**
   * Feedbacks findFirst
   */
  export type FeedbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbacksOrderByWithRelationInput | FeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * Feedbacks findFirstOrThrow
   */
  export type FeedbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbacksOrderByWithRelationInput | FeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * Feedbacks findMany
   */
  export type FeedbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbacksOrderByWithRelationInput | FeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * Feedbacks create
   */
  export type FeedbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedbacks.
     */
    data: XOR<FeedbacksCreateInput, FeedbacksUncheckedCreateInput>
  }

  /**
   * Feedbacks createMany
   */
  export type FeedbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbacksCreateManyInput | FeedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedbacks createManyAndReturn
   */
  export type FeedbacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbacksCreateManyInput | FeedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedbacks update
   */
  export type FeedbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedbacks.
     */
    data: XOR<FeedbacksUpdateInput, FeedbacksUncheckedUpdateInput>
    /**
     * Choose, which Feedbacks to update.
     */
    where: FeedbacksWhereUniqueInput
  }

  /**
   * Feedbacks updateMany
   */
  export type FeedbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbacksUpdateManyMutationInput, FeedbacksUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbacksWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedbacks updateManyAndReturn
   */
  export type FeedbacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbacksUpdateManyMutationInput, FeedbacksUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbacksWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedbacks upsert
   */
  export type FeedbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedbacks to update in case it exists.
     */
    where: FeedbacksWhereUniqueInput
    /**
     * In case the Feedbacks found by the `where` argument doesn't exist, create a new Feedbacks with this data.
     */
    create: XOR<FeedbacksCreateInput, FeedbacksUncheckedCreateInput>
    /**
     * In case the Feedbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbacksUpdateInput, FeedbacksUncheckedUpdateInput>
  }

  /**
   * Feedbacks delete
   */
  export type FeedbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
    /**
     * Filter which Feedbacks to delete.
     */
    where: FeedbacksWhereUniqueInput
  }

  /**
   * Feedbacks deleteMany
   */
  export type FeedbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbacksWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedbacks without action
   */
  export type FeedbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedbacks
     */
    select?: FeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedbacks
     */
    omit?: FeedbacksOmit<ExtArgs> | null
  }


  /**
   * Model adminusers
   */

  export type AggregateAdminusers = {
    _count: AdminusersCountAggregateOutputType | null
    _min: AdminusersMinAggregateOutputType | null
    _max: AdminusersMaxAggregateOutputType | null
  }

  export type AdminusersMinAggregateOutputType = {
    AdminUserID: string | null
    FirstName: string | null
    LastName: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    CreatedDate: Date | null
  }

  export type AdminusersMaxAggregateOutputType = {
    AdminUserID: string | null
    FirstName: string | null
    LastName: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    CreatedDate: Date | null
  }

  export type AdminusersCountAggregateOutputType = {
    AdminUserID: number
    FirstName: number
    LastName: number
    Username: number
    Email: number
    Password: number
    CreatedDate: number
    _all: number
  }


  export type AdminusersMinAggregateInputType = {
    AdminUserID?: true
    FirstName?: true
    LastName?: true
    Username?: true
    Email?: true
    Password?: true
    CreatedDate?: true
  }

  export type AdminusersMaxAggregateInputType = {
    AdminUserID?: true
    FirstName?: true
    LastName?: true
    Username?: true
    Email?: true
    Password?: true
    CreatedDate?: true
  }

  export type AdminusersCountAggregateInputType = {
    AdminUserID?: true
    FirstName?: true
    LastName?: true
    Username?: true
    Email?: true
    Password?: true
    CreatedDate?: true
    _all?: true
  }

  export type AdminusersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adminusers to aggregate.
     */
    where?: adminusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adminusers to fetch.
     */
    orderBy?: adminusersOrderByWithRelationInput | adminusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adminusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adminusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adminusers
    **/
    _count?: true | AdminusersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminusersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminusersMaxAggregateInputType
  }

  export type GetAdminusersAggregateType<T extends AdminusersAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminusers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminusers[P]>
      : GetScalarType<T[P], AggregateAdminusers[P]>
  }




  export type adminusersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminusersWhereInput
    orderBy?: adminusersOrderByWithAggregationInput | adminusersOrderByWithAggregationInput[]
    by: AdminusersScalarFieldEnum[] | AdminusersScalarFieldEnum
    having?: adminusersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminusersCountAggregateInputType | true
    _min?: AdminusersMinAggregateInputType
    _max?: AdminusersMaxAggregateInputType
  }

  export type AdminusersGroupByOutputType = {
    AdminUserID: string
    FirstName: string
    LastName: string
    Username: string
    Email: string
    Password: string
    CreatedDate: Date | null
    _count: AdminusersCountAggregateOutputType | null
    _min: AdminusersMinAggregateOutputType | null
    _max: AdminusersMaxAggregateOutputType | null
  }

  type GetAdminusersGroupByPayload<T extends adminusersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminusersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminusersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminusersGroupByOutputType[P]>
            : GetScalarType<T[P], AdminusersGroupByOutputType[P]>
        }
      >
    >


  export type adminusersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AdminUserID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    CreatedDate?: boolean
  }, ExtArgs["result"]["adminusers"]>

  export type adminusersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AdminUserID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    CreatedDate?: boolean
  }, ExtArgs["result"]["adminusers"]>

  export type adminusersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AdminUserID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    CreatedDate?: boolean
  }, ExtArgs["result"]["adminusers"]>

  export type adminusersSelectScalar = {
    AdminUserID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    CreatedDate?: boolean
  }

  export type adminusersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AdminUserID" | "FirstName" | "LastName" | "Username" | "Email" | "Password" | "CreatedDate", ExtArgs["result"]["adminusers"]>

  export type $adminusersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adminusers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      AdminUserID: string
      FirstName: string
      LastName: string
      Username: string
      Email: string
      Password: string
      CreatedDate: Date | null
    }, ExtArgs["result"]["adminusers"]>
    composites: {}
  }

  type adminusersGetPayload<S extends boolean | null | undefined | adminusersDefaultArgs> = $Result.GetResult<Prisma.$adminusersPayload, S>

  type adminusersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminusersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminusersCountAggregateInputType | true
    }

  export interface adminusersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adminusers'], meta: { name: 'adminusers' } }
    /**
     * Find zero or one Adminusers that matches the filter.
     * @param {adminusersFindUniqueArgs} args - Arguments to find a Adminusers
     * @example
     * // Get one Adminusers
     * const adminusers = await prisma.adminusers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminusersFindUniqueArgs>(args: SelectSubset<T, adminusersFindUniqueArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adminusers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminusersFindUniqueOrThrowArgs} args - Arguments to find a Adminusers
     * @example
     * // Get one Adminusers
     * const adminusers = await prisma.adminusers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminusersFindUniqueOrThrowArgs>(args: SelectSubset<T, adminusersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adminusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminusersFindFirstArgs} args - Arguments to find a Adminusers
     * @example
     * // Get one Adminusers
     * const adminusers = await prisma.adminusers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminusersFindFirstArgs>(args?: SelectSubset<T, adminusersFindFirstArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adminusers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminusersFindFirstOrThrowArgs} args - Arguments to find a Adminusers
     * @example
     * // Get one Adminusers
     * const adminusers = await prisma.adminusers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminusersFindFirstOrThrowArgs>(args?: SelectSubset<T, adminusersFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adminusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminusersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adminusers
     * const adminusers = await prisma.adminusers.findMany()
     * 
     * // Get first 10 Adminusers
     * const adminusers = await prisma.adminusers.findMany({ take: 10 })
     * 
     * // Only select the `AdminUserID`
     * const adminusersWithAdminUserIDOnly = await prisma.adminusers.findMany({ select: { AdminUserID: true } })
     * 
     */
    findMany<T extends adminusersFindManyArgs>(args?: SelectSubset<T, adminusersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adminusers.
     * @param {adminusersCreateArgs} args - Arguments to create a Adminusers.
     * @example
     * // Create one Adminusers
     * const Adminusers = await prisma.adminusers.create({
     *   data: {
     *     // ... data to create a Adminusers
     *   }
     * })
     * 
     */
    create<T extends adminusersCreateArgs>(args: SelectSubset<T, adminusersCreateArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adminusers.
     * @param {adminusersCreateManyArgs} args - Arguments to create many Adminusers.
     * @example
     * // Create many Adminusers
     * const adminusers = await prisma.adminusers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminusersCreateManyArgs>(args?: SelectSubset<T, adminusersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adminusers and returns the data saved in the database.
     * @param {adminusersCreateManyAndReturnArgs} args - Arguments to create many Adminusers.
     * @example
     * // Create many Adminusers
     * const adminusers = await prisma.adminusers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adminusers and only return the `AdminUserID`
     * const adminusersWithAdminUserIDOnly = await prisma.adminusers.createManyAndReturn({
     *   select: { AdminUserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminusersCreateManyAndReturnArgs>(args?: SelectSubset<T, adminusersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adminusers.
     * @param {adminusersDeleteArgs} args - Arguments to delete one Adminusers.
     * @example
     * // Delete one Adminusers
     * const Adminusers = await prisma.adminusers.delete({
     *   where: {
     *     // ... filter to delete one Adminusers
     *   }
     * })
     * 
     */
    delete<T extends adminusersDeleteArgs>(args: SelectSubset<T, adminusersDeleteArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adminusers.
     * @param {adminusersUpdateArgs} args - Arguments to update one Adminusers.
     * @example
     * // Update one Adminusers
     * const adminusers = await prisma.adminusers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminusersUpdateArgs>(args: SelectSubset<T, adminusersUpdateArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adminusers.
     * @param {adminusersDeleteManyArgs} args - Arguments to filter Adminusers to delete.
     * @example
     * // Delete a few Adminusers
     * const { count } = await prisma.adminusers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminusersDeleteManyArgs>(args?: SelectSubset<T, adminusersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adminusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminusersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adminusers
     * const adminusers = await prisma.adminusers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminusersUpdateManyArgs>(args: SelectSubset<T, adminusersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adminusers and returns the data updated in the database.
     * @param {adminusersUpdateManyAndReturnArgs} args - Arguments to update many Adminusers.
     * @example
     * // Update many Adminusers
     * const adminusers = await prisma.adminusers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adminusers and only return the `AdminUserID`
     * const adminusersWithAdminUserIDOnly = await prisma.adminusers.updateManyAndReturn({
     *   select: { AdminUserID: true },
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
    updateManyAndReturn<T extends adminusersUpdateManyAndReturnArgs>(args: SelectSubset<T, adminusersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adminusers.
     * @param {adminusersUpsertArgs} args - Arguments to update or create a Adminusers.
     * @example
     * // Update or create a Adminusers
     * const adminusers = await prisma.adminusers.upsert({
     *   create: {
     *     // ... data to create a Adminusers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adminusers we want to update
     *   }
     * })
     */
    upsert<T extends adminusersUpsertArgs>(args: SelectSubset<T, adminusersUpsertArgs<ExtArgs>>): Prisma__adminusersClient<$Result.GetResult<Prisma.$adminusersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adminusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminusersCountArgs} args - Arguments to filter Adminusers to count.
     * @example
     * // Count the number of Adminusers
     * const count = await prisma.adminusers.count({
     *   where: {
     *     // ... the filter for the Adminusers we want to count
     *   }
     * })
    **/
    count<T extends adminusersCountArgs>(
      args?: Subset<T, adminusersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminusersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adminusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminusersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminusersAggregateArgs>(args: Subset<T, AdminusersAggregateArgs>): Prisma.PrismaPromise<GetAdminusersAggregateType<T>>

    /**
     * Group by Adminusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminusersGroupByArgs} args - Group by arguments.
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
      T extends adminusersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminusersGroupByArgs['orderBy'] }
        : { orderBy?: adminusersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminusersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminusersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adminusers model
   */
  readonly fields: adminusersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adminusers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminusersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the adminusers model
   */
  interface adminusersFieldRefs {
    readonly AdminUserID: FieldRef<"adminusers", 'String'>
    readonly FirstName: FieldRef<"adminusers", 'String'>
    readonly LastName: FieldRef<"adminusers", 'String'>
    readonly Username: FieldRef<"adminusers", 'String'>
    readonly Email: FieldRef<"adminusers", 'String'>
    readonly Password: FieldRef<"adminusers", 'String'>
    readonly CreatedDate: FieldRef<"adminusers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * adminusers findUnique
   */
  export type adminusersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * Filter, which adminusers to fetch.
     */
    where: adminusersWhereUniqueInput
  }

  /**
   * adminusers findUniqueOrThrow
   */
  export type adminusersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * Filter, which adminusers to fetch.
     */
    where: adminusersWhereUniqueInput
  }

  /**
   * adminusers findFirst
   */
  export type adminusersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * Filter, which adminusers to fetch.
     */
    where?: adminusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adminusers to fetch.
     */
    orderBy?: adminusersOrderByWithRelationInput | adminusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adminusers.
     */
    cursor?: adminusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adminusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adminusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adminusers.
     */
    distinct?: AdminusersScalarFieldEnum | AdminusersScalarFieldEnum[]
  }

  /**
   * adminusers findFirstOrThrow
   */
  export type adminusersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * Filter, which adminusers to fetch.
     */
    where?: adminusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adminusers to fetch.
     */
    orderBy?: adminusersOrderByWithRelationInput | adminusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adminusers.
     */
    cursor?: adminusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adminusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adminusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adminusers.
     */
    distinct?: AdminusersScalarFieldEnum | AdminusersScalarFieldEnum[]
  }

  /**
   * adminusers findMany
   */
  export type adminusersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * Filter, which adminusers to fetch.
     */
    where?: adminusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adminusers to fetch.
     */
    orderBy?: adminusersOrderByWithRelationInput | adminusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adminusers.
     */
    cursor?: adminusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adminusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adminusers.
     */
    skip?: number
    distinct?: AdminusersScalarFieldEnum | AdminusersScalarFieldEnum[]
  }

  /**
   * adminusers create
   */
  export type adminusersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * The data needed to create a adminusers.
     */
    data: XOR<adminusersCreateInput, adminusersUncheckedCreateInput>
  }

  /**
   * adminusers createMany
   */
  export type adminusersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adminusers.
     */
    data: adminusersCreateManyInput | adminusersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adminusers createManyAndReturn
   */
  export type adminusersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * The data used to create many adminusers.
     */
    data: adminusersCreateManyInput | adminusersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adminusers update
   */
  export type adminusersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * The data needed to update a adminusers.
     */
    data: XOR<adminusersUpdateInput, adminusersUncheckedUpdateInput>
    /**
     * Choose, which adminusers to update.
     */
    where: adminusersWhereUniqueInput
  }

  /**
   * adminusers updateMany
   */
  export type adminusersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adminusers.
     */
    data: XOR<adminusersUpdateManyMutationInput, adminusersUncheckedUpdateManyInput>
    /**
     * Filter which adminusers to update
     */
    where?: adminusersWhereInput
    /**
     * Limit how many adminusers to update.
     */
    limit?: number
  }

  /**
   * adminusers updateManyAndReturn
   */
  export type adminusersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * The data used to update adminusers.
     */
    data: XOR<adminusersUpdateManyMutationInput, adminusersUncheckedUpdateManyInput>
    /**
     * Filter which adminusers to update
     */
    where?: adminusersWhereInput
    /**
     * Limit how many adminusers to update.
     */
    limit?: number
  }

  /**
   * adminusers upsert
   */
  export type adminusersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * The filter to search for the adminusers to update in case it exists.
     */
    where: adminusersWhereUniqueInput
    /**
     * In case the adminusers found by the `where` argument doesn't exist, create a new adminusers with this data.
     */
    create: XOR<adminusersCreateInput, adminusersUncheckedCreateInput>
    /**
     * In case the adminusers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminusersUpdateInput, adminusersUncheckedUpdateInput>
  }

  /**
   * adminusers delete
   */
  export type adminusersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
    /**
     * Filter which adminusers to delete.
     */
    where: adminusersWhereUniqueInput
  }

  /**
   * adminusers deleteMany
   */
  export type adminusersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adminusers to delete
     */
    where?: adminusersWhereInput
    /**
     * Limit how many adminusers to delete.
     */
    limit?: number
  }

  /**
   * adminusers without action
   */
  export type adminusersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adminusers
     */
    select?: adminusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adminusers
     */
    omit?: adminusersOmit<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    CompanyId: string | null
    CompanyName: string | null
    CompanyDescription: string | null
    CompanyLogo: string | null
    CompanyLocation: string | null
    IndustryID: string | null
    NoOfEmployeeID: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    CompanyId: string | null
    CompanyName: string | null
    CompanyDescription: string | null
    CompanyLogo: string | null
    CompanyLocation: string | null
    IndustryID: string | null
    NoOfEmployeeID: string | null
  }

  export type CompanyCountAggregateOutputType = {
    CompanyId: number
    CompanyName: number
    CompanyDescription: number
    CompanyLogo: number
    CompanyLocation: number
    IndustryID: number
    NoOfEmployeeID: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    CompanyId?: true
    CompanyName?: true
    CompanyDescription?: true
    CompanyLogo?: true
    CompanyLocation?: true
    IndustryID?: true
    NoOfEmployeeID?: true
  }

  export type CompanyMaxAggregateInputType = {
    CompanyId?: true
    CompanyName?: true
    CompanyDescription?: true
    CompanyLogo?: true
    CompanyLocation?: true
    IndustryID?: true
    NoOfEmployeeID?: true
  }

  export type CompanyCountAggregateInputType = {
    CompanyId?: true
    CompanyName?: true
    CompanyDescription?: true
    CompanyLogo?: true
    CompanyLocation?: true
    IndustryID?: true
    NoOfEmployeeID?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    CompanyId: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo: string | null
    CompanyLocation: string
    IndustryID: string | null
    NoOfEmployeeID: string | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyId?: boolean
    CompanyName?: boolean
    CompanyDescription?: boolean
    CompanyLogo?: boolean
    CompanyLocation?: boolean
    IndustryID?: boolean
    NoOfEmployeeID?: boolean
    industries?: boolean | company$industriesArgs<ExtArgs>
    noofemployees?: boolean | company$noofemployeesArgs<ExtArgs>
    companydepartment?: boolean | company$companydepartmentArgs<ExtArgs>
    companyuser?: boolean | company$companyuserArgs<ExtArgs>
    job?: boolean | company$jobArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyId?: boolean
    CompanyName?: boolean
    CompanyDescription?: boolean
    CompanyLogo?: boolean
    CompanyLocation?: boolean
    IndustryID?: boolean
    NoOfEmployeeID?: boolean
    industries?: boolean | company$industriesArgs<ExtArgs>
    noofemployees?: boolean | company$noofemployeesArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyId?: boolean
    CompanyName?: boolean
    CompanyDescription?: boolean
    CompanyLogo?: boolean
    CompanyLocation?: boolean
    IndustryID?: boolean
    NoOfEmployeeID?: boolean
    industries?: boolean | company$industriesArgs<ExtArgs>
    noofemployees?: boolean | company$noofemployeesArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    CompanyId?: boolean
    CompanyName?: boolean
    CompanyDescription?: boolean
    CompanyLogo?: boolean
    CompanyLocation?: boolean
    IndustryID?: boolean
    NoOfEmployeeID?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CompanyId" | "CompanyName" | "CompanyDescription" | "CompanyLogo" | "CompanyLocation" | "IndustryID" | "NoOfEmployeeID", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industries?: boolean | company$industriesArgs<ExtArgs>
    noofemployees?: boolean | company$noofemployeesArgs<ExtArgs>
    companydepartment?: boolean | company$companydepartmentArgs<ExtArgs>
    companyuser?: boolean | company$companyuserArgs<ExtArgs>
    job?: boolean | company$jobArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industries?: boolean | company$industriesArgs<ExtArgs>
    noofemployees?: boolean | company$noofemployeesArgs<ExtArgs>
  }
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industries?: boolean | company$industriesArgs<ExtArgs>
    noofemployees?: boolean | company$noofemployeesArgs<ExtArgs>
  }

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      industries: Prisma.$industriesPayload<ExtArgs> | null
      noofemployees: Prisma.$noofemployeesPayload<ExtArgs> | null
      companydepartment: Prisma.$companydepartmentPayload<ExtArgs>[]
      companyuser: Prisma.$companyuserPayload<ExtArgs>[]
      job: Prisma.$jobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CompanyId: string
      CompanyName: string
      CompanyDescription: string
      CompanyLogo: string | null
      CompanyLocation: string
      IndustryID: string | null
      NoOfEmployeeID: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `CompanyId`
     * const companyWithCompanyIdOnly = await prisma.company.findMany({ select: { CompanyId: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `CompanyId`
     * const companyWithCompanyIdOnly = await prisma.company.createManyAndReturn({
     *   select: { CompanyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `CompanyId`
     * const companyWithCompanyIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { CompanyId: true },
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
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industries<T extends company$industriesArgs<ExtArgs> = {}>(args?: Subset<T, company$industriesArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    noofemployees<T extends company$noofemployeesArgs<ExtArgs> = {}>(args?: Subset<T, company$noofemployeesArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    companydepartment<T extends company$companydepartmentArgs<ExtArgs> = {}>(args?: Subset<T, company$companydepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companyuser<T extends company$companyuserArgs<ExtArgs> = {}>(args?: Subset<T, company$companyuserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job<T extends company$jobArgs<ExtArgs> = {}>(args?: Subset<T, company$jobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly CompanyId: FieldRef<"company", 'String'>
    readonly CompanyName: FieldRef<"company", 'String'>
    readonly CompanyDescription: FieldRef<"company", 'String'>
    readonly CompanyLogo: FieldRef<"company", 'String'>
    readonly CompanyLocation: FieldRef<"company", 'String'>
    readonly IndustryID: FieldRef<"company", 'String'>
    readonly NoOfEmployeeID: FieldRef<"company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.industries
   */
  export type company$industriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    where?: industriesWhereInput
  }

  /**
   * company.noofemployees
   */
  export type company$noofemployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    where?: noofemployeesWhereInput
  }

  /**
   * company.companydepartment
   */
  export type company$companydepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    where?: companydepartmentWhereInput
    orderBy?: companydepartmentOrderByWithRelationInput | companydepartmentOrderByWithRelationInput[]
    cursor?: companydepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanydepartmentScalarFieldEnum | CompanydepartmentScalarFieldEnum[]
  }

  /**
   * company.companyuser
   */
  export type company$companyuserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    where?: companyuserWhereInput
    orderBy?: companyuserOrderByWithRelationInput | companyuserOrderByWithRelationInput[]
    cursor?: companyuserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyuserScalarFieldEnum | CompanyuserScalarFieldEnum[]
  }

  /**
   * company.job
   */
  export type company$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    where?: jobWhereInput
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    cursor?: jobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model companydepartment
   */

  export type AggregateCompanydepartment = {
    _count: CompanydepartmentCountAggregateOutputType | null
    _min: CompanydepartmentMinAggregateOutputType | null
    _max: CompanydepartmentMaxAggregateOutputType | null
  }

  export type CompanydepartmentMinAggregateOutputType = {
    CompanyDepartmentID: string | null
    CompanyId: string | null
    DepartmentId: string | null
  }

  export type CompanydepartmentMaxAggregateOutputType = {
    CompanyDepartmentID: string | null
    CompanyId: string | null
    DepartmentId: string | null
  }

  export type CompanydepartmentCountAggregateOutputType = {
    CompanyDepartmentID: number
    CompanyId: number
    DepartmentId: number
    _all: number
  }


  export type CompanydepartmentMinAggregateInputType = {
    CompanyDepartmentID?: true
    CompanyId?: true
    DepartmentId?: true
  }

  export type CompanydepartmentMaxAggregateInputType = {
    CompanyDepartmentID?: true
    CompanyId?: true
    DepartmentId?: true
  }

  export type CompanydepartmentCountAggregateInputType = {
    CompanyDepartmentID?: true
    CompanyId?: true
    DepartmentId?: true
    _all?: true
  }

  export type CompanydepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companydepartment to aggregate.
     */
    where?: companydepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companydepartments to fetch.
     */
    orderBy?: companydepartmentOrderByWithRelationInput | companydepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companydepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companydepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companydepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companydepartments
    **/
    _count?: true | CompanydepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanydepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanydepartmentMaxAggregateInputType
  }

  export type GetCompanydepartmentAggregateType<T extends CompanydepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanydepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanydepartment[P]>
      : GetScalarType<T[P], AggregateCompanydepartment[P]>
  }




  export type companydepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companydepartmentWhereInput
    orderBy?: companydepartmentOrderByWithAggregationInput | companydepartmentOrderByWithAggregationInput[]
    by: CompanydepartmentScalarFieldEnum[] | CompanydepartmentScalarFieldEnum
    having?: companydepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanydepartmentCountAggregateInputType | true
    _min?: CompanydepartmentMinAggregateInputType
    _max?: CompanydepartmentMaxAggregateInputType
  }

  export type CompanydepartmentGroupByOutputType = {
    CompanyDepartmentID: string
    CompanyId: string | null
    DepartmentId: string | null
    _count: CompanydepartmentCountAggregateOutputType | null
    _min: CompanydepartmentMinAggregateOutputType | null
    _max: CompanydepartmentMaxAggregateOutputType | null
  }

  type GetCompanydepartmentGroupByPayload<T extends companydepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanydepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanydepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanydepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], CompanydepartmentGroupByOutputType[P]>
        }
      >
    >


  export type companydepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyDepartmentID?: boolean
    CompanyId?: boolean
    DepartmentId?: boolean
    company?: boolean | companydepartment$companyArgs<ExtArgs>
    departments?: boolean | companydepartment$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["companydepartment"]>

  export type companydepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyDepartmentID?: boolean
    CompanyId?: boolean
    DepartmentId?: boolean
    company?: boolean | companydepartment$companyArgs<ExtArgs>
    departments?: boolean | companydepartment$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["companydepartment"]>

  export type companydepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyDepartmentID?: boolean
    CompanyId?: boolean
    DepartmentId?: boolean
    company?: boolean | companydepartment$companyArgs<ExtArgs>
    departments?: boolean | companydepartment$departmentsArgs<ExtArgs>
  }, ExtArgs["result"]["companydepartment"]>

  export type companydepartmentSelectScalar = {
    CompanyDepartmentID?: boolean
    CompanyId?: boolean
    DepartmentId?: boolean
  }

  export type companydepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CompanyDepartmentID" | "CompanyId" | "DepartmentId", ExtArgs["result"]["companydepartment"]>
  export type companydepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companydepartment$companyArgs<ExtArgs>
    departments?: boolean | companydepartment$departmentsArgs<ExtArgs>
  }
  export type companydepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companydepartment$companyArgs<ExtArgs>
    departments?: boolean | companydepartment$departmentsArgs<ExtArgs>
  }
  export type companydepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companydepartment$companyArgs<ExtArgs>
    departments?: boolean | companydepartment$departmentsArgs<ExtArgs>
  }

  export type $companydepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companydepartment"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
      departments: Prisma.$departmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      CompanyDepartmentID: string
      CompanyId: string | null
      DepartmentId: string | null
    }, ExtArgs["result"]["companydepartment"]>
    composites: {}
  }

  type companydepartmentGetPayload<S extends boolean | null | undefined | companydepartmentDefaultArgs> = $Result.GetResult<Prisma.$companydepartmentPayload, S>

  type companydepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companydepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanydepartmentCountAggregateInputType | true
    }

  export interface companydepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companydepartment'], meta: { name: 'companydepartment' } }
    /**
     * Find zero or one Companydepartment that matches the filter.
     * @param {companydepartmentFindUniqueArgs} args - Arguments to find a Companydepartment
     * @example
     * // Get one Companydepartment
     * const companydepartment = await prisma.companydepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companydepartmentFindUniqueArgs>(args: SelectSubset<T, companydepartmentFindUniqueArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companydepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companydepartmentFindUniqueOrThrowArgs} args - Arguments to find a Companydepartment
     * @example
     * // Get one Companydepartment
     * const companydepartment = await prisma.companydepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companydepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, companydepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companydepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companydepartmentFindFirstArgs} args - Arguments to find a Companydepartment
     * @example
     * // Get one Companydepartment
     * const companydepartment = await prisma.companydepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companydepartmentFindFirstArgs>(args?: SelectSubset<T, companydepartmentFindFirstArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companydepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companydepartmentFindFirstOrThrowArgs} args - Arguments to find a Companydepartment
     * @example
     * // Get one Companydepartment
     * const companydepartment = await prisma.companydepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companydepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, companydepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companydepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companydepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companydepartments
     * const companydepartments = await prisma.companydepartment.findMany()
     * 
     * // Get first 10 Companydepartments
     * const companydepartments = await prisma.companydepartment.findMany({ take: 10 })
     * 
     * // Only select the `CompanyDepartmentID`
     * const companydepartmentWithCompanyDepartmentIDOnly = await prisma.companydepartment.findMany({ select: { CompanyDepartmentID: true } })
     * 
     */
    findMany<T extends companydepartmentFindManyArgs>(args?: SelectSubset<T, companydepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companydepartment.
     * @param {companydepartmentCreateArgs} args - Arguments to create a Companydepartment.
     * @example
     * // Create one Companydepartment
     * const Companydepartment = await prisma.companydepartment.create({
     *   data: {
     *     // ... data to create a Companydepartment
     *   }
     * })
     * 
     */
    create<T extends companydepartmentCreateArgs>(args: SelectSubset<T, companydepartmentCreateArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companydepartments.
     * @param {companydepartmentCreateManyArgs} args - Arguments to create many Companydepartments.
     * @example
     * // Create many Companydepartments
     * const companydepartment = await prisma.companydepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companydepartmentCreateManyArgs>(args?: SelectSubset<T, companydepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companydepartments and returns the data saved in the database.
     * @param {companydepartmentCreateManyAndReturnArgs} args - Arguments to create many Companydepartments.
     * @example
     * // Create many Companydepartments
     * const companydepartment = await prisma.companydepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companydepartments and only return the `CompanyDepartmentID`
     * const companydepartmentWithCompanyDepartmentIDOnly = await prisma.companydepartment.createManyAndReturn({
     *   select: { CompanyDepartmentID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companydepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, companydepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companydepartment.
     * @param {companydepartmentDeleteArgs} args - Arguments to delete one Companydepartment.
     * @example
     * // Delete one Companydepartment
     * const Companydepartment = await prisma.companydepartment.delete({
     *   where: {
     *     // ... filter to delete one Companydepartment
     *   }
     * })
     * 
     */
    delete<T extends companydepartmentDeleteArgs>(args: SelectSubset<T, companydepartmentDeleteArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companydepartment.
     * @param {companydepartmentUpdateArgs} args - Arguments to update one Companydepartment.
     * @example
     * // Update one Companydepartment
     * const companydepartment = await prisma.companydepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companydepartmentUpdateArgs>(args: SelectSubset<T, companydepartmentUpdateArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companydepartments.
     * @param {companydepartmentDeleteManyArgs} args - Arguments to filter Companydepartments to delete.
     * @example
     * // Delete a few Companydepartments
     * const { count } = await prisma.companydepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companydepartmentDeleteManyArgs>(args?: SelectSubset<T, companydepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companydepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companydepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companydepartments
     * const companydepartment = await prisma.companydepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companydepartmentUpdateManyArgs>(args: SelectSubset<T, companydepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companydepartments and returns the data updated in the database.
     * @param {companydepartmentUpdateManyAndReturnArgs} args - Arguments to update many Companydepartments.
     * @example
     * // Update many Companydepartments
     * const companydepartment = await prisma.companydepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companydepartments and only return the `CompanyDepartmentID`
     * const companydepartmentWithCompanyDepartmentIDOnly = await prisma.companydepartment.updateManyAndReturn({
     *   select: { CompanyDepartmentID: true },
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
    updateManyAndReturn<T extends companydepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, companydepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companydepartment.
     * @param {companydepartmentUpsertArgs} args - Arguments to update or create a Companydepartment.
     * @example
     * // Update or create a Companydepartment
     * const companydepartment = await prisma.companydepartment.upsert({
     *   create: {
     *     // ... data to create a Companydepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companydepartment we want to update
     *   }
     * })
     */
    upsert<T extends companydepartmentUpsertArgs>(args: SelectSubset<T, companydepartmentUpsertArgs<ExtArgs>>): Prisma__companydepartmentClient<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companydepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companydepartmentCountArgs} args - Arguments to filter Companydepartments to count.
     * @example
     * // Count the number of Companydepartments
     * const count = await prisma.companydepartment.count({
     *   where: {
     *     // ... the filter for the Companydepartments we want to count
     *   }
     * })
    **/
    count<T extends companydepartmentCountArgs>(
      args?: Subset<T, companydepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanydepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companydepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanydepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanydepartmentAggregateArgs>(args: Subset<T, CompanydepartmentAggregateArgs>): Prisma.PrismaPromise<GetCompanydepartmentAggregateType<T>>

    /**
     * Group by Companydepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companydepartmentGroupByArgs} args - Group by arguments.
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
      T extends companydepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companydepartmentGroupByArgs['orderBy'] }
        : { orderBy?: companydepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companydepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanydepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companydepartment model
   */
  readonly fields: companydepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companydepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companydepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companydepartment$companyArgs<ExtArgs> = {}>(args?: Subset<T, companydepartment$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departments<T extends companydepartment$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, companydepartment$departmentsArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the companydepartment model
   */
  interface companydepartmentFieldRefs {
    readonly CompanyDepartmentID: FieldRef<"companydepartment", 'String'>
    readonly CompanyId: FieldRef<"companydepartment", 'String'>
    readonly DepartmentId: FieldRef<"companydepartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * companydepartment findUnique
   */
  export type companydepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * Filter, which companydepartment to fetch.
     */
    where: companydepartmentWhereUniqueInput
  }

  /**
   * companydepartment findUniqueOrThrow
   */
  export type companydepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * Filter, which companydepartment to fetch.
     */
    where: companydepartmentWhereUniqueInput
  }

  /**
   * companydepartment findFirst
   */
  export type companydepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * Filter, which companydepartment to fetch.
     */
    where?: companydepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companydepartments to fetch.
     */
    orderBy?: companydepartmentOrderByWithRelationInput | companydepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companydepartments.
     */
    cursor?: companydepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companydepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companydepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companydepartments.
     */
    distinct?: CompanydepartmentScalarFieldEnum | CompanydepartmentScalarFieldEnum[]
  }

  /**
   * companydepartment findFirstOrThrow
   */
  export type companydepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * Filter, which companydepartment to fetch.
     */
    where?: companydepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companydepartments to fetch.
     */
    orderBy?: companydepartmentOrderByWithRelationInput | companydepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companydepartments.
     */
    cursor?: companydepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companydepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companydepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companydepartments.
     */
    distinct?: CompanydepartmentScalarFieldEnum | CompanydepartmentScalarFieldEnum[]
  }

  /**
   * companydepartment findMany
   */
  export type companydepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * Filter, which companydepartments to fetch.
     */
    where?: companydepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companydepartments to fetch.
     */
    orderBy?: companydepartmentOrderByWithRelationInput | companydepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companydepartments.
     */
    cursor?: companydepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companydepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companydepartments.
     */
    skip?: number
    distinct?: CompanydepartmentScalarFieldEnum | CompanydepartmentScalarFieldEnum[]
  }

  /**
   * companydepartment create
   */
  export type companydepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a companydepartment.
     */
    data?: XOR<companydepartmentCreateInput, companydepartmentUncheckedCreateInput>
  }

  /**
   * companydepartment createMany
   */
  export type companydepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companydepartments.
     */
    data: companydepartmentCreateManyInput | companydepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companydepartment createManyAndReturn
   */
  export type companydepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many companydepartments.
     */
    data: companydepartmentCreateManyInput | companydepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * companydepartment update
   */
  export type companydepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a companydepartment.
     */
    data: XOR<companydepartmentUpdateInput, companydepartmentUncheckedUpdateInput>
    /**
     * Choose, which companydepartment to update.
     */
    where: companydepartmentWhereUniqueInput
  }

  /**
   * companydepartment updateMany
   */
  export type companydepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companydepartments.
     */
    data: XOR<companydepartmentUpdateManyMutationInput, companydepartmentUncheckedUpdateManyInput>
    /**
     * Filter which companydepartments to update
     */
    where?: companydepartmentWhereInput
    /**
     * Limit how many companydepartments to update.
     */
    limit?: number
  }

  /**
   * companydepartment updateManyAndReturn
   */
  export type companydepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * The data used to update companydepartments.
     */
    data: XOR<companydepartmentUpdateManyMutationInput, companydepartmentUncheckedUpdateManyInput>
    /**
     * Filter which companydepartments to update
     */
    where?: companydepartmentWhereInput
    /**
     * Limit how many companydepartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * companydepartment upsert
   */
  export type companydepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the companydepartment to update in case it exists.
     */
    where: companydepartmentWhereUniqueInput
    /**
     * In case the companydepartment found by the `where` argument doesn't exist, create a new companydepartment with this data.
     */
    create: XOR<companydepartmentCreateInput, companydepartmentUncheckedCreateInput>
    /**
     * In case the companydepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companydepartmentUpdateInput, companydepartmentUncheckedUpdateInput>
  }

  /**
   * companydepartment delete
   */
  export type companydepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    /**
     * Filter which companydepartment to delete.
     */
    where: companydepartmentWhereUniqueInput
  }

  /**
   * companydepartment deleteMany
   */
  export type companydepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companydepartments to delete
     */
    where?: companydepartmentWhereInput
    /**
     * Limit how many companydepartments to delete.
     */
    limit?: number
  }

  /**
   * companydepartment.company
   */
  export type companydepartment$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * companydepartment.departments
   */
  export type companydepartment$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * companydepartment without action
   */
  export type companydepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
  }


  /**
   * Model companyuser
   */

  export type AggregateCompanyuser = {
    _count: CompanyuserCountAggregateOutputType | null
    _min: CompanyuserMinAggregateOutputType | null
    _max: CompanyuserMaxAggregateOutputType | null
  }

  export type CompanyuserMinAggregateOutputType = {
    CompanyUserId: string | null
    FirstName: string | null
    LastName: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    UserMobile: string | null
    Status: string | null
    OTP: string | null
    LastOTPRequestedAt: Date | null
    CompanyCreatedDate: Date | null
    CompanyId: string | null
    LastUpdatedDate: Date | null
  }

  export type CompanyuserMaxAggregateOutputType = {
    CompanyUserId: string | null
    FirstName: string | null
    LastName: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    UserMobile: string | null
    Status: string | null
    OTP: string | null
    LastOTPRequestedAt: Date | null
    CompanyCreatedDate: Date | null
    CompanyId: string | null
    LastUpdatedDate: Date | null
  }

  export type CompanyuserCountAggregateOutputType = {
    CompanyUserId: number
    FirstName: number
    LastName: number
    Username: number
    Email: number
    Password: number
    UserMobile: number
    Status: number
    OTP: number
    LastOTPRequestedAt: number
    CompanyCreatedDate: number
    CompanyId: number
    LastUpdatedDate: number
    _all: number
  }


  export type CompanyuserMinAggregateInputType = {
    CompanyUserId?: true
    FirstName?: true
    LastName?: true
    Username?: true
    Email?: true
    Password?: true
    UserMobile?: true
    Status?: true
    OTP?: true
    LastOTPRequestedAt?: true
    CompanyCreatedDate?: true
    CompanyId?: true
    LastUpdatedDate?: true
  }

  export type CompanyuserMaxAggregateInputType = {
    CompanyUserId?: true
    FirstName?: true
    LastName?: true
    Username?: true
    Email?: true
    Password?: true
    UserMobile?: true
    Status?: true
    OTP?: true
    LastOTPRequestedAt?: true
    CompanyCreatedDate?: true
    CompanyId?: true
    LastUpdatedDate?: true
  }

  export type CompanyuserCountAggregateInputType = {
    CompanyUserId?: true
    FirstName?: true
    LastName?: true
    Username?: true
    Email?: true
    Password?: true
    UserMobile?: true
    Status?: true
    OTP?: true
    LastOTPRequestedAt?: true
    CompanyCreatedDate?: true
    CompanyId?: true
    LastUpdatedDate?: true
    _all?: true
  }

  export type CompanyuserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companyuser to aggregate.
     */
    where?: companyuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companyusers to fetch.
     */
    orderBy?: companyuserOrderByWithRelationInput | companyuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companyusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companyusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companyusers
    **/
    _count?: true | CompanyuserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyuserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyuserMaxAggregateInputType
  }

  export type GetCompanyuserAggregateType<T extends CompanyuserAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyuser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyuser[P]>
      : GetScalarType<T[P], AggregateCompanyuser[P]>
  }




  export type companyuserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyuserWhereInput
    orderBy?: companyuserOrderByWithAggregationInput | companyuserOrderByWithAggregationInput[]
    by: CompanyuserScalarFieldEnum[] | CompanyuserScalarFieldEnum
    having?: companyuserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyuserCountAggregateInputType | true
    _min?: CompanyuserMinAggregateInputType
    _max?: CompanyuserMaxAggregateInputType
  }

  export type CompanyuserGroupByOutputType = {
    CompanyUserId: string
    FirstName: string | null
    LastName: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    UserMobile: string | null
    Status: string | null
    OTP: string | null
    LastOTPRequestedAt: Date | null
    CompanyCreatedDate: Date | null
    CompanyId: string | null
    LastUpdatedDate: Date | null
    _count: CompanyuserCountAggregateOutputType | null
    _min: CompanyuserMinAggregateOutputType | null
    _max: CompanyuserMaxAggregateOutputType | null
  }

  type GetCompanyuserGroupByPayload<T extends companyuserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyuserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyuserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyuserGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyuserGroupByOutputType[P]>
        }
      >
    >


  export type companyuserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyUserId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    UserMobile?: boolean
    Status?: boolean
    OTP?: boolean
    LastOTPRequestedAt?: boolean
    CompanyCreatedDate?: boolean
    CompanyId?: boolean
    LastUpdatedDate?: boolean
    company?: boolean | companyuser$companyArgs<ExtArgs>
  }, ExtArgs["result"]["companyuser"]>

  export type companyuserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyUserId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    UserMobile?: boolean
    Status?: boolean
    OTP?: boolean
    LastOTPRequestedAt?: boolean
    CompanyCreatedDate?: boolean
    CompanyId?: boolean
    LastUpdatedDate?: boolean
    company?: boolean | companyuser$companyArgs<ExtArgs>
  }, ExtArgs["result"]["companyuser"]>

  export type companyuserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CompanyUserId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    UserMobile?: boolean
    Status?: boolean
    OTP?: boolean
    LastOTPRequestedAt?: boolean
    CompanyCreatedDate?: boolean
    CompanyId?: boolean
    LastUpdatedDate?: boolean
    company?: boolean | companyuser$companyArgs<ExtArgs>
  }, ExtArgs["result"]["companyuser"]>

  export type companyuserSelectScalar = {
    CompanyUserId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    UserMobile?: boolean
    Status?: boolean
    OTP?: boolean
    LastOTPRequestedAt?: boolean
    CompanyCreatedDate?: boolean
    CompanyId?: boolean
    LastUpdatedDate?: boolean
  }

  export type companyuserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CompanyUserId" | "FirstName" | "LastName" | "Username" | "Email" | "Password" | "UserMobile" | "Status" | "OTP" | "LastOTPRequestedAt" | "CompanyCreatedDate" | "CompanyId" | "LastUpdatedDate", ExtArgs["result"]["companyuser"]>
  export type companyuserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyuser$companyArgs<ExtArgs>
  }
  export type companyuserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyuser$companyArgs<ExtArgs>
  }
  export type companyuserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyuser$companyArgs<ExtArgs>
  }

  export type $companyuserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companyuser"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      CompanyUserId: string
      FirstName: string | null
      LastName: string | null
      Username: string | null
      Email: string | null
      Password: string | null
      UserMobile: string | null
      Status: string | null
      OTP: string | null
      LastOTPRequestedAt: Date | null
      CompanyCreatedDate: Date | null
      CompanyId: string | null
      LastUpdatedDate: Date | null
    }, ExtArgs["result"]["companyuser"]>
    composites: {}
  }

  type companyuserGetPayload<S extends boolean | null | undefined | companyuserDefaultArgs> = $Result.GetResult<Prisma.$companyuserPayload, S>

  type companyuserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyuserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyuserCountAggregateInputType | true
    }

  export interface companyuserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companyuser'], meta: { name: 'companyuser' } }
    /**
     * Find zero or one Companyuser that matches the filter.
     * @param {companyuserFindUniqueArgs} args - Arguments to find a Companyuser
     * @example
     * // Get one Companyuser
     * const companyuser = await prisma.companyuser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyuserFindUniqueArgs>(args: SelectSubset<T, companyuserFindUniqueArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companyuser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyuserFindUniqueOrThrowArgs} args - Arguments to find a Companyuser
     * @example
     * // Get one Companyuser
     * const companyuser = await prisma.companyuser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyuserFindUniqueOrThrowArgs>(args: SelectSubset<T, companyuserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companyuser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyuserFindFirstArgs} args - Arguments to find a Companyuser
     * @example
     * // Get one Companyuser
     * const companyuser = await prisma.companyuser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyuserFindFirstArgs>(args?: SelectSubset<T, companyuserFindFirstArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companyuser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyuserFindFirstOrThrowArgs} args - Arguments to find a Companyuser
     * @example
     * // Get one Companyuser
     * const companyuser = await prisma.companyuser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyuserFindFirstOrThrowArgs>(args?: SelectSubset<T, companyuserFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companyusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyuserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companyusers
     * const companyusers = await prisma.companyuser.findMany()
     * 
     * // Get first 10 Companyusers
     * const companyusers = await prisma.companyuser.findMany({ take: 10 })
     * 
     * // Only select the `CompanyUserId`
     * const companyuserWithCompanyUserIdOnly = await prisma.companyuser.findMany({ select: { CompanyUserId: true } })
     * 
     */
    findMany<T extends companyuserFindManyArgs>(args?: SelectSubset<T, companyuserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companyuser.
     * @param {companyuserCreateArgs} args - Arguments to create a Companyuser.
     * @example
     * // Create one Companyuser
     * const Companyuser = await prisma.companyuser.create({
     *   data: {
     *     // ... data to create a Companyuser
     *   }
     * })
     * 
     */
    create<T extends companyuserCreateArgs>(args: SelectSubset<T, companyuserCreateArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companyusers.
     * @param {companyuserCreateManyArgs} args - Arguments to create many Companyusers.
     * @example
     * // Create many Companyusers
     * const companyuser = await prisma.companyuser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyuserCreateManyArgs>(args?: SelectSubset<T, companyuserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companyusers and returns the data saved in the database.
     * @param {companyuserCreateManyAndReturnArgs} args - Arguments to create many Companyusers.
     * @example
     * // Create many Companyusers
     * const companyuser = await prisma.companyuser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companyusers and only return the `CompanyUserId`
     * const companyuserWithCompanyUserIdOnly = await prisma.companyuser.createManyAndReturn({
     *   select: { CompanyUserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyuserCreateManyAndReturnArgs>(args?: SelectSubset<T, companyuserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companyuser.
     * @param {companyuserDeleteArgs} args - Arguments to delete one Companyuser.
     * @example
     * // Delete one Companyuser
     * const Companyuser = await prisma.companyuser.delete({
     *   where: {
     *     // ... filter to delete one Companyuser
     *   }
     * })
     * 
     */
    delete<T extends companyuserDeleteArgs>(args: SelectSubset<T, companyuserDeleteArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companyuser.
     * @param {companyuserUpdateArgs} args - Arguments to update one Companyuser.
     * @example
     * // Update one Companyuser
     * const companyuser = await prisma.companyuser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyuserUpdateArgs>(args: SelectSubset<T, companyuserUpdateArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companyusers.
     * @param {companyuserDeleteManyArgs} args - Arguments to filter Companyusers to delete.
     * @example
     * // Delete a few Companyusers
     * const { count } = await prisma.companyuser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyuserDeleteManyArgs>(args?: SelectSubset<T, companyuserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companyusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyuserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companyusers
     * const companyuser = await prisma.companyuser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyuserUpdateManyArgs>(args: SelectSubset<T, companyuserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companyusers and returns the data updated in the database.
     * @param {companyuserUpdateManyAndReturnArgs} args - Arguments to update many Companyusers.
     * @example
     * // Update many Companyusers
     * const companyuser = await prisma.companyuser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companyusers and only return the `CompanyUserId`
     * const companyuserWithCompanyUserIdOnly = await prisma.companyuser.updateManyAndReturn({
     *   select: { CompanyUserId: true },
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
    updateManyAndReturn<T extends companyuserUpdateManyAndReturnArgs>(args: SelectSubset<T, companyuserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companyuser.
     * @param {companyuserUpsertArgs} args - Arguments to update or create a Companyuser.
     * @example
     * // Update or create a Companyuser
     * const companyuser = await prisma.companyuser.upsert({
     *   create: {
     *     // ... data to create a Companyuser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companyuser we want to update
     *   }
     * })
     */
    upsert<T extends companyuserUpsertArgs>(args: SelectSubset<T, companyuserUpsertArgs<ExtArgs>>): Prisma__companyuserClient<$Result.GetResult<Prisma.$companyuserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companyusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyuserCountArgs} args - Arguments to filter Companyusers to count.
     * @example
     * // Count the number of Companyusers
     * const count = await prisma.companyuser.count({
     *   where: {
     *     // ... the filter for the Companyusers we want to count
     *   }
     * })
    **/
    count<T extends companyuserCountArgs>(
      args?: Subset<T, companyuserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyuserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companyuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyuserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyuserAggregateArgs>(args: Subset<T, CompanyuserAggregateArgs>): Prisma.PrismaPromise<GetCompanyuserAggregateType<T>>

    /**
     * Group by Companyuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyuserGroupByArgs} args - Group by arguments.
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
      T extends companyuserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyuserGroupByArgs['orderBy'] }
        : { orderBy?: companyuserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyuserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyuserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companyuser model
   */
  readonly fields: companyuserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companyuser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyuserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companyuser$companyArgs<ExtArgs> = {}>(args?: Subset<T, companyuser$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the companyuser model
   */
  interface companyuserFieldRefs {
    readonly CompanyUserId: FieldRef<"companyuser", 'String'>
    readonly FirstName: FieldRef<"companyuser", 'String'>
    readonly LastName: FieldRef<"companyuser", 'String'>
    readonly Username: FieldRef<"companyuser", 'String'>
    readonly Email: FieldRef<"companyuser", 'String'>
    readonly Password: FieldRef<"companyuser", 'String'>
    readonly UserMobile: FieldRef<"companyuser", 'String'>
    readonly Status: FieldRef<"companyuser", 'String'>
    readonly OTP: FieldRef<"companyuser", 'String'>
    readonly LastOTPRequestedAt: FieldRef<"companyuser", 'DateTime'>
    readonly CompanyCreatedDate: FieldRef<"companyuser", 'DateTime'>
    readonly CompanyId: FieldRef<"companyuser", 'String'>
    readonly LastUpdatedDate: FieldRef<"companyuser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * companyuser findUnique
   */
  export type companyuserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * Filter, which companyuser to fetch.
     */
    where: companyuserWhereUniqueInput
  }

  /**
   * companyuser findUniqueOrThrow
   */
  export type companyuserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * Filter, which companyuser to fetch.
     */
    where: companyuserWhereUniqueInput
  }

  /**
   * companyuser findFirst
   */
  export type companyuserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * Filter, which companyuser to fetch.
     */
    where?: companyuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companyusers to fetch.
     */
    orderBy?: companyuserOrderByWithRelationInput | companyuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companyusers.
     */
    cursor?: companyuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companyusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companyusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companyusers.
     */
    distinct?: CompanyuserScalarFieldEnum | CompanyuserScalarFieldEnum[]
  }

  /**
   * companyuser findFirstOrThrow
   */
  export type companyuserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * Filter, which companyuser to fetch.
     */
    where?: companyuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companyusers to fetch.
     */
    orderBy?: companyuserOrderByWithRelationInput | companyuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companyusers.
     */
    cursor?: companyuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companyusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companyusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companyusers.
     */
    distinct?: CompanyuserScalarFieldEnum | CompanyuserScalarFieldEnum[]
  }

  /**
   * companyuser findMany
   */
  export type companyuserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * Filter, which companyusers to fetch.
     */
    where?: companyuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companyusers to fetch.
     */
    orderBy?: companyuserOrderByWithRelationInput | companyuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companyusers.
     */
    cursor?: companyuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companyusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companyusers.
     */
    skip?: number
    distinct?: CompanyuserScalarFieldEnum | CompanyuserScalarFieldEnum[]
  }

  /**
   * companyuser create
   */
  export type companyuserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * The data needed to create a companyuser.
     */
    data?: XOR<companyuserCreateInput, companyuserUncheckedCreateInput>
  }

  /**
   * companyuser createMany
   */
  export type companyuserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companyusers.
     */
    data: companyuserCreateManyInput | companyuserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companyuser createManyAndReturn
   */
  export type companyuserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * The data used to create many companyusers.
     */
    data: companyuserCreateManyInput | companyuserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * companyuser update
   */
  export type companyuserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * The data needed to update a companyuser.
     */
    data: XOR<companyuserUpdateInput, companyuserUncheckedUpdateInput>
    /**
     * Choose, which companyuser to update.
     */
    where: companyuserWhereUniqueInput
  }

  /**
   * companyuser updateMany
   */
  export type companyuserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companyusers.
     */
    data: XOR<companyuserUpdateManyMutationInput, companyuserUncheckedUpdateManyInput>
    /**
     * Filter which companyusers to update
     */
    where?: companyuserWhereInput
    /**
     * Limit how many companyusers to update.
     */
    limit?: number
  }

  /**
   * companyuser updateManyAndReturn
   */
  export type companyuserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * The data used to update companyusers.
     */
    data: XOR<companyuserUpdateManyMutationInput, companyuserUncheckedUpdateManyInput>
    /**
     * Filter which companyusers to update
     */
    where?: companyuserWhereInput
    /**
     * Limit how many companyusers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * companyuser upsert
   */
  export type companyuserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * The filter to search for the companyuser to update in case it exists.
     */
    where: companyuserWhereUniqueInput
    /**
     * In case the companyuser found by the `where` argument doesn't exist, create a new companyuser with this data.
     */
    create: XOR<companyuserCreateInput, companyuserUncheckedCreateInput>
    /**
     * In case the companyuser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyuserUpdateInput, companyuserUncheckedUpdateInput>
  }

  /**
   * companyuser delete
   */
  export type companyuserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
    /**
     * Filter which companyuser to delete.
     */
    where: companyuserWhereUniqueInput
  }

  /**
   * companyuser deleteMany
   */
  export type companyuserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companyusers to delete
     */
    where?: companyuserWhereInput
    /**
     * Limit how many companyusers to delete.
     */
    limit?: number
  }

  /**
   * companyuser.company
   */
  export type companyuser$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * companyuser without action
   */
  export type companyuserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companyuser
     */
    select?: companyuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companyuser
     */
    omit?: companyuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyuserInclude<ExtArgs> | null
  }


  /**
   * Model departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    DepartmentID: string | null
    DepartmentName: string | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    DepartmentID: string | null
    DepartmentName: string | null
  }

  export type DepartmentsCountAggregateOutputType = {
    DepartmentID: number
    DepartmentName: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
  }

  export type DepartmentsCountAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to aggregate.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type departmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentsWhereInput
    orderBy?: departmentsOrderByWithAggregationInput | departmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: departmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    DepartmentID: string
    DepartmentName: string
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends departmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type departmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    DepartmentName?: boolean
    companydepartment?: boolean | departments$companydepartmentArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    DepartmentName?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    DepartmentName?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectScalar = {
    DepartmentID?: boolean
    DepartmentName?: boolean
  }

  export type departmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DepartmentID" | "DepartmentName", ExtArgs["result"]["departments"]>
  export type departmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companydepartment?: boolean | departments$companydepartmentArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type departmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departments"
    objects: {
      companydepartment: Prisma.$companydepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DepartmentID: string
      DepartmentName: string
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type departmentsGetPayload<S extends boolean | null | undefined | departmentsDefaultArgs> = $Result.GetResult<Prisma.$departmentsPayload, S>

  type departmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface departmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departments'], meta: { name: 'departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {departmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentsFindUniqueArgs>(args: SelectSubset<T, departmentsFindUniqueArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentsFindFirstArgs>(args?: SelectSubset<T, departmentsFindFirstArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `DepartmentID`
     * const departmentsWithDepartmentIDOnly = await prisma.departments.findMany({ select: { DepartmentID: true } })
     * 
     */
    findMany<T extends departmentsFindManyArgs>(args?: SelectSubset<T, departmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {departmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends departmentsCreateArgs>(args: SelectSubset<T, departmentsCreateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentsCreateManyArgs>(args?: SelectSubset<T, departmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `DepartmentID`
     * const departmentsWithDepartmentIDOnly = await prisma.departments.createManyAndReturn({
     *   select: { DepartmentID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departments.
     * @param {departmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends departmentsDeleteArgs>(args: SelectSubset<T, departmentsDeleteArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {departmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentsUpdateArgs>(args: SelectSubset<T, departmentsUpdateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentsDeleteManyArgs>(args?: SelectSubset<T, departmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentsUpdateManyArgs>(args: SelectSubset<T, departmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentsUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `DepartmentID`
     * const departmentsWithDepartmentIDOnly = await prisma.departments.updateManyAndReturn({
     *   select: { DepartmentID: true },
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
    updateManyAndReturn<T extends departmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departments.
     * @param {departmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends departmentsUpsertArgs>(args: SelectSubset<T, departmentsUpsertArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentsCountArgs>(
      args?: Subset<T, departmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsGroupByArgs} args - Group by arguments.
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
      T extends departmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentsGroupByArgs['orderBy'] }
        : { orderBy?: departmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, departmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departments model
   */
  readonly fields: departmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companydepartment<T extends departments$companydepartmentArgs<ExtArgs> = {}>(args?: Subset<T, departments$companydepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companydepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the departments model
   */
  interface departmentsFieldRefs {
    readonly DepartmentID: FieldRef<"departments", 'String'>
    readonly DepartmentName: FieldRef<"departments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * departments findUnique
   */
  export type departmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findUniqueOrThrow
   */
  export type departmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findFirst
   */
  export type departmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findFirstOrThrow
   */
  export type departmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findMany
   */
  export type departmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments create
   */
  export type departmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a departments.
     */
    data: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
  }

  /**
   * departments createMany
   */
  export type departmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments createManyAndReturn
   */
  export type departmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments update
   */
  export type departmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a departments.
     */
    data: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
    /**
     * Choose, which departments to update.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments updateMany
   */
  export type departmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments updateManyAndReturn
   */
  export type departmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments upsert
   */
  export type departmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the departments to update in case it exists.
     */
    where: departmentsWhereUniqueInput
    /**
     * In case the departments found by the `where` argument doesn't exist, create a new departments with this data.
     */
    create: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
    /**
     * In case the departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
  }

  /**
   * departments delete
   */
  export type departmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter which departments to delete.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments deleteMany
   */
  export type departmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * departments.companydepartment
   */
  export type departments$companydepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companydepartment
     */
    select?: companydepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companydepartment
     */
    omit?: companydepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companydepartmentInclude<ExtArgs> | null
    where?: companydepartmentWhereInput
    orderBy?: companydepartmentOrderByWithRelationInput | companydepartmentOrderByWithRelationInput[]
    cursor?: companydepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanydepartmentScalarFieldEnum | CompanydepartmentScalarFieldEnum[]
  }

  /**
   * departments without action
   */
  export type departmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
  }


  /**
   * Model industries
   */

  export type AggregateIndustries = {
    _count: IndustriesCountAggregateOutputType | null
    _min: IndustriesMinAggregateOutputType | null
    _max: IndustriesMaxAggregateOutputType | null
  }

  export type IndustriesMinAggregateOutputType = {
    IndustryID: string | null
    IndustryName: string | null
  }

  export type IndustriesMaxAggregateOutputType = {
    IndustryID: string | null
    IndustryName: string | null
  }

  export type IndustriesCountAggregateOutputType = {
    IndustryID: number
    IndustryName: number
    _all: number
  }


  export type IndustriesMinAggregateInputType = {
    IndustryID?: true
    IndustryName?: true
  }

  export type IndustriesMaxAggregateInputType = {
    IndustryID?: true
    IndustryName?: true
  }

  export type IndustriesCountAggregateInputType = {
    IndustryID?: true
    IndustryName?: true
    _all?: true
  }

  export type IndustriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which industries to aggregate.
     */
    where?: industriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of industries to fetch.
     */
    orderBy?: industriesOrderByWithRelationInput | industriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: industriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned industries
    **/
    _count?: true | IndustriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustriesMaxAggregateInputType
  }

  export type GetIndustriesAggregateType<T extends IndustriesAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustries[P]>
      : GetScalarType<T[P], AggregateIndustries[P]>
  }




  export type industriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: industriesWhereInput
    orderBy?: industriesOrderByWithAggregationInput | industriesOrderByWithAggregationInput[]
    by: IndustriesScalarFieldEnum[] | IndustriesScalarFieldEnum
    having?: industriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustriesCountAggregateInputType | true
    _min?: IndustriesMinAggregateInputType
    _max?: IndustriesMaxAggregateInputType
  }

  export type IndustriesGroupByOutputType = {
    IndustryID: string
    IndustryName: string
    _count: IndustriesCountAggregateOutputType | null
    _min: IndustriesMinAggregateOutputType | null
    _max: IndustriesMaxAggregateOutputType | null
  }

  type GetIndustriesGroupByPayload<T extends industriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustriesGroupByOutputType[P]>
            : GetScalarType<T[P], IndustriesGroupByOutputType[P]>
        }
      >
    >


  export type industriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IndustryID?: boolean
    IndustryName?: boolean
    company?: boolean | industries$companyArgs<ExtArgs>
    _count?: boolean | IndustriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industries"]>

  export type industriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IndustryID?: boolean
    IndustryName?: boolean
  }, ExtArgs["result"]["industries"]>

  export type industriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IndustryID?: boolean
    IndustryName?: boolean
  }, ExtArgs["result"]["industries"]>

  export type industriesSelectScalar = {
    IndustryID?: boolean
    IndustryName?: boolean
  }

  export type industriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IndustryID" | "IndustryName", ExtArgs["result"]["industries"]>
  export type industriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | industries$companyArgs<ExtArgs>
    _count?: boolean | IndustriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type industriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type industriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $industriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "industries"
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IndustryID: string
      IndustryName: string
    }, ExtArgs["result"]["industries"]>
    composites: {}
  }

  type industriesGetPayload<S extends boolean | null | undefined | industriesDefaultArgs> = $Result.GetResult<Prisma.$industriesPayload, S>

  type industriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<industriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustriesCountAggregateInputType | true
    }

  export interface industriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['industries'], meta: { name: 'industries' } }
    /**
     * Find zero or one Industries that matches the filter.
     * @param {industriesFindUniqueArgs} args - Arguments to find a Industries
     * @example
     * // Get one Industries
     * const industries = await prisma.industries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends industriesFindUniqueArgs>(args: SelectSubset<T, industriesFindUniqueArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Industries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {industriesFindUniqueOrThrowArgs} args - Arguments to find a Industries
     * @example
     * // Get one Industries
     * const industries = await prisma.industries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends industriesFindUniqueOrThrowArgs>(args: SelectSubset<T, industriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {industriesFindFirstArgs} args - Arguments to find a Industries
     * @example
     * // Get one Industries
     * const industries = await prisma.industries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends industriesFindFirstArgs>(args?: SelectSubset<T, industriesFindFirstArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {industriesFindFirstOrThrowArgs} args - Arguments to find a Industries
     * @example
     * // Get one Industries
     * const industries = await prisma.industries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends industriesFindFirstOrThrowArgs>(args?: SelectSubset<T, industriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Industries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {industriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Industries
     * const industries = await prisma.industries.findMany()
     * 
     * // Get first 10 Industries
     * const industries = await prisma.industries.findMany({ take: 10 })
     * 
     * // Only select the `IndustryID`
     * const industriesWithIndustryIDOnly = await prisma.industries.findMany({ select: { IndustryID: true } })
     * 
     */
    findMany<T extends industriesFindManyArgs>(args?: SelectSubset<T, industriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Industries.
     * @param {industriesCreateArgs} args - Arguments to create a Industries.
     * @example
     * // Create one Industries
     * const Industries = await prisma.industries.create({
     *   data: {
     *     // ... data to create a Industries
     *   }
     * })
     * 
     */
    create<T extends industriesCreateArgs>(args: SelectSubset<T, industriesCreateArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Industries.
     * @param {industriesCreateManyArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industries = await prisma.industries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends industriesCreateManyArgs>(args?: SelectSubset<T, industriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Industries and returns the data saved in the database.
     * @param {industriesCreateManyAndReturnArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industries = await prisma.industries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Industries and only return the `IndustryID`
     * const industriesWithIndustryIDOnly = await prisma.industries.createManyAndReturn({
     *   select: { IndustryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends industriesCreateManyAndReturnArgs>(args?: SelectSubset<T, industriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Industries.
     * @param {industriesDeleteArgs} args - Arguments to delete one Industries.
     * @example
     * // Delete one Industries
     * const Industries = await prisma.industries.delete({
     *   where: {
     *     // ... filter to delete one Industries
     *   }
     * })
     * 
     */
    delete<T extends industriesDeleteArgs>(args: SelectSubset<T, industriesDeleteArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Industries.
     * @param {industriesUpdateArgs} args - Arguments to update one Industries.
     * @example
     * // Update one Industries
     * const industries = await prisma.industries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends industriesUpdateArgs>(args: SelectSubset<T, industriesUpdateArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Industries.
     * @param {industriesDeleteManyArgs} args - Arguments to filter Industries to delete.
     * @example
     * // Delete a few Industries
     * const { count } = await prisma.industries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends industriesDeleteManyArgs>(args?: SelectSubset<T, industriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {industriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Industries
     * const industries = await prisma.industries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends industriesUpdateManyArgs>(args: SelectSubset<T, industriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries and returns the data updated in the database.
     * @param {industriesUpdateManyAndReturnArgs} args - Arguments to update many Industries.
     * @example
     * // Update many Industries
     * const industries = await prisma.industries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Industries and only return the `IndustryID`
     * const industriesWithIndustryIDOnly = await prisma.industries.updateManyAndReturn({
     *   select: { IndustryID: true },
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
    updateManyAndReturn<T extends industriesUpdateManyAndReturnArgs>(args: SelectSubset<T, industriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Industries.
     * @param {industriesUpsertArgs} args - Arguments to update or create a Industries.
     * @example
     * // Update or create a Industries
     * const industries = await prisma.industries.upsert({
     *   create: {
     *     // ... data to create a Industries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Industries we want to update
     *   }
     * })
     */
    upsert<T extends industriesUpsertArgs>(args: SelectSubset<T, industriesUpsertArgs<ExtArgs>>): Prisma__industriesClient<$Result.GetResult<Prisma.$industriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {industriesCountArgs} args - Arguments to filter Industries to count.
     * @example
     * // Count the number of Industries
     * const count = await prisma.industries.count({
     *   where: {
     *     // ... the filter for the Industries we want to count
     *   }
     * })
    **/
    count<T extends industriesCountArgs>(
      args?: Subset<T, industriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndustriesAggregateArgs>(args: Subset<T, IndustriesAggregateArgs>): Prisma.PrismaPromise<GetIndustriesAggregateType<T>>

    /**
     * Group by Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {industriesGroupByArgs} args - Group by arguments.
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
      T extends industriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: industriesGroupByArgs['orderBy'] }
        : { orderBy?: industriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, industriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the industries model
   */
  readonly fields: industriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for industries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__industriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends industries$companyArgs<ExtArgs> = {}>(args?: Subset<T, industries$companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the industries model
   */
  interface industriesFieldRefs {
    readonly IndustryID: FieldRef<"industries", 'String'>
    readonly IndustryName: FieldRef<"industries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * industries findUnique
   */
  export type industriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * Filter, which industries to fetch.
     */
    where: industriesWhereUniqueInput
  }

  /**
   * industries findUniqueOrThrow
   */
  export type industriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * Filter, which industries to fetch.
     */
    where: industriesWhereUniqueInput
  }

  /**
   * industries findFirst
   */
  export type industriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * Filter, which industries to fetch.
     */
    where?: industriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of industries to fetch.
     */
    orderBy?: industriesOrderByWithRelationInput | industriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for industries.
     */
    cursor?: industriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of industries.
     */
    distinct?: IndustriesScalarFieldEnum | IndustriesScalarFieldEnum[]
  }

  /**
   * industries findFirstOrThrow
   */
  export type industriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * Filter, which industries to fetch.
     */
    where?: industriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of industries to fetch.
     */
    orderBy?: industriesOrderByWithRelationInput | industriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for industries.
     */
    cursor?: industriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of industries.
     */
    distinct?: IndustriesScalarFieldEnum | IndustriesScalarFieldEnum[]
  }

  /**
   * industries findMany
   */
  export type industriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * Filter, which industries to fetch.
     */
    where?: industriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of industries to fetch.
     */
    orderBy?: industriesOrderByWithRelationInput | industriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing industries.
     */
    cursor?: industriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` industries.
     */
    skip?: number
    distinct?: IndustriesScalarFieldEnum | IndustriesScalarFieldEnum[]
  }

  /**
   * industries create
   */
  export type industriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * The data needed to create a industries.
     */
    data: XOR<industriesCreateInput, industriesUncheckedCreateInput>
  }

  /**
   * industries createMany
   */
  export type industriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many industries.
     */
    data: industriesCreateManyInput | industriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * industries createManyAndReturn
   */
  export type industriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * The data used to create many industries.
     */
    data: industriesCreateManyInput | industriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * industries update
   */
  export type industriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * The data needed to update a industries.
     */
    data: XOR<industriesUpdateInput, industriesUncheckedUpdateInput>
    /**
     * Choose, which industries to update.
     */
    where: industriesWhereUniqueInput
  }

  /**
   * industries updateMany
   */
  export type industriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update industries.
     */
    data: XOR<industriesUpdateManyMutationInput, industriesUncheckedUpdateManyInput>
    /**
     * Filter which industries to update
     */
    where?: industriesWhereInput
    /**
     * Limit how many industries to update.
     */
    limit?: number
  }

  /**
   * industries updateManyAndReturn
   */
  export type industriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * The data used to update industries.
     */
    data: XOR<industriesUpdateManyMutationInput, industriesUncheckedUpdateManyInput>
    /**
     * Filter which industries to update
     */
    where?: industriesWhereInput
    /**
     * Limit how many industries to update.
     */
    limit?: number
  }

  /**
   * industries upsert
   */
  export type industriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * The filter to search for the industries to update in case it exists.
     */
    where: industriesWhereUniqueInput
    /**
     * In case the industries found by the `where` argument doesn't exist, create a new industries with this data.
     */
    create: XOR<industriesCreateInput, industriesUncheckedCreateInput>
    /**
     * In case the industries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<industriesUpdateInput, industriesUncheckedUpdateInput>
  }

  /**
   * industries delete
   */
  export type industriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
    /**
     * Filter which industries to delete.
     */
    where: industriesWhereUniqueInput
  }

  /**
   * industries deleteMany
   */
  export type industriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which industries to delete
     */
    where?: industriesWhereInput
    /**
     * Limit how many industries to delete.
     */
    limit?: number
  }

  /**
   * industries.company
   */
  export type industries$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    cursor?: companyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * industries without action
   */
  export type industriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the industries
     */
    select?: industriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the industries
     */
    omit?: industriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: industriesInclude<ExtArgs> | null
  }


  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    postedDate: Date | null
    description: string | null
    requirements: string | null
    image: string | null
    type: string | null
    companyId: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    postedDate: Date | null
    description: string | null
    requirements: string | null
    image: string | null
    type: string | null
    companyId: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    name: number
    position: number
    postedDate: number
    description: number
    requirements: number
    image: number
    type: number
    companyId: number
    _all: number
  }


  export type JobMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    postedDate?: true
    description?: true
    requirements?: true
    image?: true
    type?: true
    companyId?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    postedDate?: true
    description?: true
    requirements?: true
    image?: true
    type?: true
    companyId?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    postedDate?: true
    description?: true
    requirements?: true
    image?: true
    type?: true
    companyId?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: jobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    name: string | null
    position: string
    postedDate: Date
    description: string
    requirements: string | null
    image: string | null
    type: string
    companyId: string | null
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    postedDate?: boolean
    description?: boolean
    requirements?: boolean
    image?: boolean
    type?: boolean
    companyId?: boolean
    company?: boolean | job$companyArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    postedDate?: boolean
    description?: boolean
    requirements?: boolean
    image?: boolean
    type?: boolean
    companyId?: boolean
    company?: boolean | job$companyArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    postedDate?: boolean
    description?: boolean
    requirements?: boolean
    image?: boolean
    type?: boolean
    companyId?: boolean
    company?: boolean | job$companyArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    postedDate?: boolean
    description?: boolean
    requirements?: boolean
    image?: boolean
    type?: boolean
    companyId?: boolean
  }

  export type jobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "postedDate" | "description" | "requirements" | "image" | "type" | "companyId", ExtArgs["result"]["job"]>
  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | job$companyArgs<ExtArgs>
  }
  export type jobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | job$companyArgs<ExtArgs>
  }
  export type jobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | job$companyArgs<ExtArgs>
  }

  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      position: string
      postedDate: Date
      description: string
      requirements: string | null
      image: string | null
      type: string
      companyId: string | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job'], meta: { name: 'job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobFindUniqueArgs>(args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs>(args: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobFindFirstArgs>(args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs>(args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobFindManyArgs>(args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends jobCreateArgs>(args: SelectSubset<T, jobCreateArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobCreateManyArgs>(args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {jobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobCreateManyAndReturnArgs>(args?: SelectSubset<T, jobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends jobDeleteArgs>(args: SelectSubset<T, jobDeleteArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobUpdateArgs>(args: SelectSubset<T, jobUpdateArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobDeleteManyArgs>(args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobUpdateManyArgs>(args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {jobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
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
    updateManyAndReturn<T extends jobUpdateManyAndReturnArgs>(args: SelectSubset<T, jobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends jobUpsertArgs>(args: SelectSubset<T, jobUpsertArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
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
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job model
   */
  readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends job$companyArgs<ExtArgs> = {}>(args?: Subset<T, job$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the job model
   */
  interface jobFieldRefs {
    readonly id: FieldRef<"job", 'String'>
    readonly name: FieldRef<"job", 'String'>
    readonly position: FieldRef<"job", 'String'>
    readonly postedDate: FieldRef<"job", 'DateTime'>
    readonly description: FieldRef<"job", 'String'>
    readonly requirements: FieldRef<"job", 'String'>
    readonly image: FieldRef<"job", 'String'>
    readonly type: FieldRef<"job", 'String'>
    readonly companyId: FieldRef<"job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>
  }

  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job createManyAndReturn
   */
  export type jobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * job updateManyAndReturn
   */
  export type jobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>
  }

  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * job.company
   */
  export type job$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
  }


  /**
   * Model noofemployees
   */

  export type AggregateNoofemployees = {
    _count: NoofemployeesCountAggregateOutputType | null
    _min: NoofemployeesMinAggregateOutputType | null
    _max: NoofemployeesMaxAggregateOutputType | null
  }

  export type NoofemployeesMinAggregateOutputType = {
    NoOfEmployeeID: string | null
    NoOfEmployeeType: string | null
  }

  export type NoofemployeesMaxAggregateOutputType = {
    NoOfEmployeeID: string | null
    NoOfEmployeeType: string | null
  }

  export type NoofemployeesCountAggregateOutputType = {
    NoOfEmployeeID: number
    NoOfEmployeeType: number
    _all: number
  }


  export type NoofemployeesMinAggregateInputType = {
    NoOfEmployeeID?: true
    NoOfEmployeeType?: true
  }

  export type NoofemployeesMaxAggregateInputType = {
    NoOfEmployeeID?: true
    NoOfEmployeeType?: true
  }

  export type NoofemployeesCountAggregateInputType = {
    NoOfEmployeeID?: true
    NoOfEmployeeType?: true
    _all?: true
  }

  export type NoofemployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which noofemployees to aggregate.
     */
    where?: noofemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noofemployees to fetch.
     */
    orderBy?: noofemployeesOrderByWithRelationInput | noofemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: noofemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noofemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noofemployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned noofemployees
    **/
    _count?: true | NoofemployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoofemployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoofemployeesMaxAggregateInputType
  }

  export type GetNoofemployeesAggregateType<T extends NoofemployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateNoofemployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoofemployees[P]>
      : GetScalarType<T[P], AggregateNoofemployees[P]>
  }




  export type noofemployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noofemployeesWhereInput
    orderBy?: noofemployeesOrderByWithAggregationInput | noofemployeesOrderByWithAggregationInput[]
    by: NoofemployeesScalarFieldEnum[] | NoofemployeesScalarFieldEnum
    having?: noofemployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoofemployeesCountAggregateInputType | true
    _min?: NoofemployeesMinAggregateInputType
    _max?: NoofemployeesMaxAggregateInputType
  }

  export type NoofemployeesGroupByOutputType = {
    NoOfEmployeeID: string
    NoOfEmployeeType: string
    _count: NoofemployeesCountAggregateOutputType | null
    _min: NoofemployeesMinAggregateOutputType | null
    _max: NoofemployeesMaxAggregateOutputType | null
  }

  type GetNoofemployeesGroupByPayload<T extends noofemployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoofemployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoofemployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoofemployeesGroupByOutputType[P]>
            : GetScalarType<T[P], NoofemployeesGroupByOutputType[P]>
        }
      >
    >


  export type noofemployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NoOfEmployeeID?: boolean
    NoOfEmployeeType?: boolean
    company?: boolean | noofemployees$companyArgs<ExtArgs>
    _count?: boolean | NoofemployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noofemployees"]>

  export type noofemployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NoOfEmployeeID?: boolean
    NoOfEmployeeType?: boolean
  }, ExtArgs["result"]["noofemployees"]>

  export type noofemployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NoOfEmployeeID?: boolean
    NoOfEmployeeType?: boolean
  }, ExtArgs["result"]["noofemployees"]>

  export type noofemployeesSelectScalar = {
    NoOfEmployeeID?: boolean
    NoOfEmployeeType?: boolean
  }

  export type noofemployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"NoOfEmployeeID" | "NoOfEmployeeType", ExtArgs["result"]["noofemployees"]>
  export type noofemployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | noofemployees$companyArgs<ExtArgs>
    _count?: boolean | NoofemployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type noofemployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type noofemployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $noofemployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "noofemployees"
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      NoOfEmployeeID: string
      NoOfEmployeeType: string
    }, ExtArgs["result"]["noofemployees"]>
    composites: {}
  }

  type noofemployeesGetPayload<S extends boolean | null | undefined | noofemployeesDefaultArgs> = $Result.GetResult<Prisma.$noofemployeesPayload, S>

  type noofemployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<noofemployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoofemployeesCountAggregateInputType | true
    }

  export interface noofemployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['noofemployees'], meta: { name: 'noofemployees' } }
    /**
     * Find zero or one Noofemployees that matches the filter.
     * @param {noofemployeesFindUniqueArgs} args - Arguments to find a Noofemployees
     * @example
     * // Get one Noofemployees
     * const noofemployees = await prisma.noofemployees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends noofemployeesFindUniqueArgs>(args: SelectSubset<T, noofemployeesFindUniqueArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noofemployees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {noofemployeesFindUniqueOrThrowArgs} args - Arguments to find a Noofemployees
     * @example
     * // Get one Noofemployees
     * const noofemployees = await prisma.noofemployees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends noofemployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, noofemployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noofemployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noofemployeesFindFirstArgs} args - Arguments to find a Noofemployees
     * @example
     * // Get one Noofemployees
     * const noofemployees = await prisma.noofemployees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends noofemployeesFindFirstArgs>(args?: SelectSubset<T, noofemployeesFindFirstArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noofemployees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noofemployeesFindFirstOrThrowArgs} args - Arguments to find a Noofemployees
     * @example
     * // Get one Noofemployees
     * const noofemployees = await prisma.noofemployees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends noofemployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, noofemployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noofemployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noofemployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noofemployees
     * const noofemployees = await prisma.noofemployees.findMany()
     * 
     * // Get first 10 Noofemployees
     * const noofemployees = await prisma.noofemployees.findMany({ take: 10 })
     * 
     * // Only select the `NoOfEmployeeID`
     * const noofemployeesWithNoOfEmployeeIDOnly = await prisma.noofemployees.findMany({ select: { NoOfEmployeeID: true } })
     * 
     */
    findMany<T extends noofemployeesFindManyArgs>(args?: SelectSubset<T, noofemployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noofemployees.
     * @param {noofemployeesCreateArgs} args - Arguments to create a Noofemployees.
     * @example
     * // Create one Noofemployees
     * const Noofemployees = await prisma.noofemployees.create({
     *   data: {
     *     // ... data to create a Noofemployees
     *   }
     * })
     * 
     */
    create<T extends noofemployeesCreateArgs>(args: SelectSubset<T, noofemployeesCreateArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noofemployees.
     * @param {noofemployeesCreateManyArgs} args - Arguments to create many Noofemployees.
     * @example
     * // Create many Noofemployees
     * const noofemployees = await prisma.noofemployees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends noofemployeesCreateManyArgs>(args?: SelectSubset<T, noofemployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noofemployees and returns the data saved in the database.
     * @param {noofemployeesCreateManyAndReturnArgs} args - Arguments to create many Noofemployees.
     * @example
     * // Create many Noofemployees
     * const noofemployees = await prisma.noofemployees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noofemployees and only return the `NoOfEmployeeID`
     * const noofemployeesWithNoOfEmployeeIDOnly = await prisma.noofemployees.createManyAndReturn({
     *   select: { NoOfEmployeeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends noofemployeesCreateManyAndReturnArgs>(args?: SelectSubset<T, noofemployeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noofemployees.
     * @param {noofemployeesDeleteArgs} args - Arguments to delete one Noofemployees.
     * @example
     * // Delete one Noofemployees
     * const Noofemployees = await prisma.noofemployees.delete({
     *   where: {
     *     // ... filter to delete one Noofemployees
     *   }
     * })
     * 
     */
    delete<T extends noofemployeesDeleteArgs>(args: SelectSubset<T, noofemployeesDeleteArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noofemployees.
     * @param {noofemployeesUpdateArgs} args - Arguments to update one Noofemployees.
     * @example
     * // Update one Noofemployees
     * const noofemployees = await prisma.noofemployees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends noofemployeesUpdateArgs>(args: SelectSubset<T, noofemployeesUpdateArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noofemployees.
     * @param {noofemployeesDeleteManyArgs} args - Arguments to filter Noofemployees to delete.
     * @example
     * // Delete a few Noofemployees
     * const { count } = await prisma.noofemployees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends noofemployeesDeleteManyArgs>(args?: SelectSubset<T, noofemployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noofemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noofemployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noofemployees
     * const noofemployees = await prisma.noofemployees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends noofemployeesUpdateManyArgs>(args: SelectSubset<T, noofemployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noofemployees and returns the data updated in the database.
     * @param {noofemployeesUpdateManyAndReturnArgs} args - Arguments to update many Noofemployees.
     * @example
     * // Update many Noofemployees
     * const noofemployees = await prisma.noofemployees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noofemployees and only return the `NoOfEmployeeID`
     * const noofemployeesWithNoOfEmployeeIDOnly = await prisma.noofemployees.updateManyAndReturn({
     *   select: { NoOfEmployeeID: true },
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
    updateManyAndReturn<T extends noofemployeesUpdateManyAndReturnArgs>(args: SelectSubset<T, noofemployeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noofemployees.
     * @param {noofemployeesUpsertArgs} args - Arguments to update or create a Noofemployees.
     * @example
     * // Update or create a Noofemployees
     * const noofemployees = await prisma.noofemployees.upsert({
     *   create: {
     *     // ... data to create a Noofemployees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noofemployees we want to update
     *   }
     * })
     */
    upsert<T extends noofemployeesUpsertArgs>(args: SelectSubset<T, noofemployeesUpsertArgs<ExtArgs>>): Prisma__noofemployeesClient<$Result.GetResult<Prisma.$noofemployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noofemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noofemployeesCountArgs} args - Arguments to filter Noofemployees to count.
     * @example
     * // Count the number of Noofemployees
     * const count = await prisma.noofemployees.count({
     *   where: {
     *     // ... the filter for the Noofemployees we want to count
     *   }
     * })
    **/
    count<T extends noofemployeesCountArgs>(
      args?: Subset<T, noofemployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoofemployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noofemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoofemployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoofemployeesAggregateArgs>(args: Subset<T, NoofemployeesAggregateArgs>): Prisma.PrismaPromise<GetNoofemployeesAggregateType<T>>

    /**
     * Group by Noofemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noofemployeesGroupByArgs} args - Group by arguments.
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
      T extends noofemployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: noofemployeesGroupByArgs['orderBy'] }
        : { orderBy?: noofemployeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, noofemployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoofemployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the noofemployees model
   */
  readonly fields: noofemployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for noofemployees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__noofemployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends noofemployees$companyArgs<ExtArgs> = {}>(args?: Subset<T, noofemployees$companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the noofemployees model
   */
  interface noofemployeesFieldRefs {
    readonly NoOfEmployeeID: FieldRef<"noofemployees", 'String'>
    readonly NoOfEmployeeType: FieldRef<"noofemployees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * noofemployees findUnique
   */
  export type noofemployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * Filter, which noofemployees to fetch.
     */
    where: noofemployeesWhereUniqueInput
  }

  /**
   * noofemployees findUniqueOrThrow
   */
  export type noofemployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * Filter, which noofemployees to fetch.
     */
    where: noofemployeesWhereUniqueInput
  }

  /**
   * noofemployees findFirst
   */
  export type noofemployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * Filter, which noofemployees to fetch.
     */
    where?: noofemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noofemployees to fetch.
     */
    orderBy?: noofemployeesOrderByWithRelationInput | noofemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for noofemployees.
     */
    cursor?: noofemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noofemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noofemployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of noofemployees.
     */
    distinct?: NoofemployeesScalarFieldEnum | NoofemployeesScalarFieldEnum[]
  }

  /**
   * noofemployees findFirstOrThrow
   */
  export type noofemployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * Filter, which noofemployees to fetch.
     */
    where?: noofemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noofemployees to fetch.
     */
    orderBy?: noofemployeesOrderByWithRelationInput | noofemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for noofemployees.
     */
    cursor?: noofemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noofemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noofemployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of noofemployees.
     */
    distinct?: NoofemployeesScalarFieldEnum | NoofemployeesScalarFieldEnum[]
  }

  /**
   * noofemployees findMany
   */
  export type noofemployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * Filter, which noofemployees to fetch.
     */
    where?: noofemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noofemployees to fetch.
     */
    orderBy?: noofemployeesOrderByWithRelationInput | noofemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing noofemployees.
     */
    cursor?: noofemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noofemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noofemployees.
     */
    skip?: number
    distinct?: NoofemployeesScalarFieldEnum | NoofemployeesScalarFieldEnum[]
  }

  /**
   * noofemployees create
   */
  export type noofemployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a noofemployees.
     */
    data: XOR<noofemployeesCreateInput, noofemployeesUncheckedCreateInput>
  }

  /**
   * noofemployees createMany
   */
  export type noofemployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many noofemployees.
     */
    data: noofemployeesCreateManyInput | noofemployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * noofemployees createManyAndReturn
   */
  export type noofemployeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * The data used to create many noofemployees.
     */
    data: noofemployeesCreateManyInput | noofemployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * noofemployees update
   */
  export type noofemployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a noofemployees.
     */
    data: XOR<noofemployeesUpdateInput, noofemployeesUncheckedUpdateInput>
    /**
     * Choose, which noofemployees to update.
     */
    where: noofemployeesWhereUniqueInput
  }

  /**
   * noofemployees updateMany
   */
  export type noofemployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update noofemployees.
     */
    data: XOR<noofemployeesUpdateManyMutationInput, noofemployeesUncheckedUpdateManyInput>
    /**
     * Filter which noofemployees to update
     */
    where?: noofemployeesWhereInput
    /**
     * Limit how many noofemployees to update.
     */
    limit?: number
  }

  /**
   * noofemployees updateManyAndReturn
   */
  export type noofemployeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * The data used to update noofemployees.
     */
    data: XOR<noofemployeesUpdateManyMutationInput, noofemployeesUncheckedUpdateManyInput>
    /**
     * Filter which noofemployees to update
     */
    where?: noofemployeesWhereInput
    /**
     * Limit how many noofemployees to update.
     */
    limit?: number
  }

  /**
   * noofemployees upsert
   */
  export type noofemployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the noofemployees to update in case it exists.
     */
    where: noofemployeesWhereUniqueInput
    /**
     * In case the noofemployees found by the `where` argument doesn't exist, create a new noofemployees with this data.
     */
    create: XOR<noofemployeesCreateInput, noofemployeesUncheckedCreateInput>
    /**
     * In case the noofemployees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<noofemployeesUpdateInput, noofemployeesUncheckedUpdateInput>
  }

  /**
   * noofemployees delete
   */
  export type noofemployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
    /**
     * Filter which noofemployees to delete.
     */
    where: noofemployeesWhereUniqueInput
  }

  /**
   * noofemployees deleteMany
   */
  export type noofemployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which noofemployees to delete
     */
    where?: noofemployeesWhereInput
    /**
     * Limit how many noofemployees to delete.
     */
    limit?: number
  }

  /**
   * noofemployees.company
   */
  export type noofemployees$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    cursor?: companyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * noofemployees without action
   */
  export type noofemployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noofemployees
     */
    select?: noofemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noofemployees
     */
    omit?: noofemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noofemployeesInclude<ExtArgs> | null
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


  export const FeedbacksScalarFieldEnum: {
    FeedbackId: 'FeedbackId',
    Name: 'Name',
    Email: 'Email',
    Message: 'Message',
    CreatedDate: 'CreatedDate'
  };

  export type FeedbacksScalarFieldEnum = (typeof FeedbacksScalarFieldEnum)[keyof typeof FeedbacksScalarFieldEnum]


  export const AdminusersScalarFieldEnum: {
    AdminUserID: 'AdminUserID',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Username: 'Username',
    Email: 'Email',
    Password: 'Password',
    CreatedDate: 'CreatedDate'
  };

  export type AdminusersScalarFieldEnum = (typeof AdminusersScalarFieldEnum)[keyof typeof AdminusersScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    CompanyId: 'CompanyId',
    CompanyName: 'CompanyName',
    CompanyDescription: 'CompanyDescription',
    CompanyLogo: 'CompanyLogo',
    CompanyLocation: 'CompanyLocation',
    IndustryID: 'IndustryID',
    NoOfEmployeeID: 'NoOfEmployeeID'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanydepartmentScalarFieldEnum: {
    CompanyDepartmentID: 'CompanyDepartmentID',
    CompanyId: 'CompanyId',
    DepartmentId: 'DepartmentId'
  };

  export type CompanydepartmentScalarFieldEnum = (typeof CompanydepartmentScalarFieldEnum)[keyof typeof CompanydepartmentScalarFieldEnum]


  export const CompanyuserScalarFieldEnum: {
    CompanyUserId: 'CompanyUserId',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Username: 'Username',
    Email: 'Email',
    Password: 'Password',
    UserMobile: 'UserMobile',
    Status: 'Status',
    OTP: 'OTP',
    LastOTPRequestedAt: 'LastOTPRequestedAt',
    CompanyCreatedDate: 'CompanyCreatedDate',
    CompanyId: 'CompanyId',
    LastUpdatedDate: 'LastUpdatedDate'
  };

  export type CompanyuserScalarFieldEnum = (typeof CompanyuserScalarFieldEnum)[keyof typeof CompanyuserScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    DepartmentID: 'DepartmentID',
    DepartmentName: 'DepartmentName'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const IndustriesScalarFieldEnum: {
    IndustryID: 'IndustryID',
    IndustryName: 'IndustryName'
  };

  export type IndustriesScalarFieldEnum = (typeof IndustriesScalarFieldEnum)[keyof typeof IndustriesScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    postedDate: 'postedDate',
    description: 'description',
    requirements: 'requirements',
    image: 'image',
    type: 'type',
    companyId: 'companyId'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const NoofemployeesScalarFieldEnum: {
    NoOfEmployeeID: 'NoOfEmployeeID',
    NoOfEmployeeType: 'NoOfEmployeeType'
  };

  export type NoofemployeesScalarFieldEnum = (typeof NoofemployeesScalarFieldEnum)[keyof typeof NoofemployeesScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FeedbacksWhereInput = {
    AND?: FeedbacksWhereInput | FeedbacksWhereInput[]
    OR?: FeedbacksWhereInput[]
    NOT?: FeedbacksWhereInput | FeedbacksWhereInput[]
    FeedbackId?: UuidFilter<"Feedbacks"> | string
    Name?: StringNullableFilter<"Feedbacks"> | string | null
    Email?: StringNullableFilter<"Feedbacks"> | string | null
    Message?: StringNullableFilter<"Feedbacks"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Feedbacks"> | Date | string | null
  }

  export type FeedbacksOrderByWithRelationInput = {
    FeedbackId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Message?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
  }

  export type FeedbacksWhereUniqueInput = Prisma.AtLeast<{
    FeedbackId?: string
    AND?: FeedbacksWhereInput | FeedbacksWhereInput[]
    OR?: FeedbacksWhereInput[]
    NOT?: FeedbacksWhereInput | FeedbacksWhereInput[]
    Name?: StringNullableFilter<"Feedbacks"> | string | null
    Email?: StringNullableFilter<"Feedbacks"> | string | null
    Message?: StringNullableFilter<"Feedbacks"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Feedbacks"> | Date | string | null
  }, "FeedbackId">

  export type FeedbacksOrderByWithAggregationInput = {
    FeedbackId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Message?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    _count?: FeedbacksCountOrderByAggregateInput
    _max?: FeedbacksMaxOrderByAggregateInput
    _min?: FeedbacksMinOrderByAggregateInput
  }

  export type FeedbacksScalarWhereWithAggregatesInput = {
    AND?: FeedbacksScalarWhereWithAggregatesInput | FeedbacksScalarWhereWithAggregatesInput[]
    OR?: FeedbacksScalarWhereWithAggregatesInput[]
    NOT?: FeedbacksScalarWhereWithAggregatesInput | FeedbacksScalarWhereWithAggregatesInput[]
    FeedbackId?: UuidWithAggregatesFilter<"Feedbacks"> | string
    Name?: StringNullableWithAggregatesFilter<"Feedbacks"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Feedbacks"> | string | null
    Message?: StringNullableWithAggregatesFilter<"Feedbacks"> | string | null
    CreatedDate?: DateTimeNullableWithAggregatesFilter<"Feedbacks"> | Date | string | null
  }

  export type adminusersWhereInput = {
    AND?: adminusersWhereInput | adminusersWhereInput[]
    OR?: adminusersWhereInput[]
    NOT?: adminusersWhereInput | adminusersWhereInput[]
    AdminUserID?: UuidFilter<"adminusers"> | string
    FirstName?: StringFilter<"adminusers"> | string
    LastName?: StringFilter<"adminusers"> | string
    Username?: StringFilter<"adminusers"> | string
    Email?: StringFilter<"adminusers"> | string
    Password?: StringFilter<"adminusers"> | string
    CreatedDate?: DateTimeNullableFilter<"adminusers"> | Date | string | null
  }

  export type adminusersOrderByWithRelationInput = {
    AdminUserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    CreatedDate?: SortOrderInput | SortOrder
  }

  export type adminusersWhereUniqueInput = Prisma.AtLeast<{
    AdminUserID?: string
    Username?: string
    Email?: string
    AND?: adminusersWhereInput | adminusersWhereInput[]
    OR?: adminusersWhereInput[]
    NOT?: adminusersWhereInput | adminusersWhereInput[]
    FirstName?: StringFilter<"adminusers"> | string
    LastName?: StringFilter<"adminusers"> | string
    Password?: StringFilter<"adminusers"> | string
    CreatedDate?: DateTimeNullableFilter<"adminusers"> | Date | string | null
  }, "AdminUserID" | "Username" | "Email">

  export type adminusersOrderByWithAggregationInput = {
    AdminUserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    _count?: adminusersCountOrderByAggregateInput
    _max?: adminusersMaxOrderByAggregateInput
    _min?: adminusersMinOrderByAggregateInput
  }

  export type adminusersScalarWhereWithAggregatesInput = {
    AND?: adminusersScalarWhereWithAggregatesInput | adminusersScalarWhereWithAggregatesInput[]
    OR?: adminusersScalarWhereWithAggregatesInput[]
    NOT?: adminusersScalarWhereWithAggregatesInput | adminusersScalarWhereWithAggregatesInput[]
    AdminUserID?: UuidWithAggregatesFilter<"adminusers"> | string
    FirstName?: StringWithAggregatesFilter<"adminusers"> | string
    LastName?: StringWithAggregatesFilter<"adminusers"> | string
    Username?: StringWithAggregatesFilter<"adminusers"> | string
    Email?: StringWithAggregatesFilter<"adminusers"> | string
    Password?: StringWithAggregatesFilter<"adminusers"> | string
    CreatedDate?: DateTimeNullableWithAggregatesFilter<"adminusers"> | Date | string | null
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    CompanyId?: UuidFilter<"company"> | string
    CompanyName?: StringFilter<"company"> | string
    CompanyDescription?: StringFilter<"company"> | string
    CompanyLogo?: StringNullableFilter<"company"> | string | null
    CompanyLocation?: StringFilter<"company"> | string
    IndustryID?: UuidNullableFilter<"company"> | string | null
    NoOfEmployeeID?: UuidNullableFilter<"company"> | string | null
    industries?: XOR<IndustriesNullableScalarRelationFilter, industriesWhereInput> | null
    noofemployees?: XOR<NoofemployeesNullableScalarRelationFilter, noofemployeesWhereInput> | null
    companydepartment?: CompanydepartmentListRelationFilter
    companyuser?: CompanyuserListRelationFilter
    job?: JobListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    CompanyDescription?: SortOrder
    CompanyLogo?: SortOrderInput | SortOrder
    CompanyLocation?: SortOrder
    IndustryID?: SortOrderInput | SortOrder
    NoOfEmployeeID?: SortOrderInput | SortOrder
    industries?: industriesOrderByWithRelationInput
    noofemployees?: noofemployeesOrderByWithRelationInput
    companydepartment?: companydepartmentOrderByRelationAggregateInput
    companyuser?: companyuserOrderByRelationAggregateInput
    job?: jobOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    CompanyId?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    CompanyName?: StringFilter<"company"> | string
    CompanyDescription?: StringFilter<"company"> | string
    CompanyLogo?: StringNullableFilter<"company"> | string | null
    CompanyLocation?: StringFilter<"company"> | string
    IndustryID?: UuidNullableFilter<"company"> | string | null
    NoOfEmployeeID?: UuidNullableFilter<"company"> | string | null
    industries?: XOR<IndustriesNullableScalarRelationFilter, industriesWhereInput> | null
    noofemployees?: XOR<NoofemployeesNullableScalarRelationFilter, noofemployeesWhereInput> | null
    companydepartment?: CompanydepartmentListRelationFilter
    companyuser?: CompanyuserListRelationFilter
    job?: JobListRelationFilter
  }, "CompanyId">

  export type companyOrderByWithAggregationInput = {
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    CompanyDescription?: SortOrder
    CompanyLogo?: SortOrderInput | SortOrder
    CompanyLocation?: SortOrder
    IndustryID?: SortOrderInput | SortOrder
    NoOfEmployeeID?: SortOrderInput | SortOrder
    _count?: companyCountOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    CompanyId?: UuidWithAggregatesFilter<"company"> | string
    CompanyName?: StringWithAggregatesFilter<"company"> | string
    CompanyDescription?: StringWithAggregatesFilter<"company"> | string
    CompanyLogo?: StringNullableWithAggregatesFilter<"company"> | string | null
    CompanyLocation?: StringWithAggregatesFilter<"company"> | string
    IndustryID?: UuidNullableWithAggregatesFilter<"company"> | string | null
    NoOfEmployeeID?: UuidNullableWithAggregatesFilter<"company"> | string | null
  }

  export type companydepartmentWhereInput = {
    AND?: companydepartmentWhereInput | companydepartmentWhereInput[]
    OR?: companydepartmentWhereInput[]
    NOT?: companydepartmentWhereInput | companydepartmentWhereInput[]
    CompanyDepartmentID?: UuidFilter<"companydepartment"> | string
    CompanyId?: UuidNullableFilter<"companydepartment"> | string | null
    DepartmentId?: UuidNullableFilter<"companydepartment"> | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    departments?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }

  export type companydepartmentOrderByWithRelationInput = {
    CompanyDepartmentID?: SortOrder
    CompanyId?: SortOrderInput | SortOrder
    DepartmentId?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
    departments?: departmentsOrderByWithRelationInput
  }

  export type companydepartmentWhereUniqueInput = Prisma.AtLeast<{
    CompanyDepartmentID?: string
    AND?: companydepartmentWhereInput | companydepartmentWhereInput[]
    OR?: companydepartmentWhereInput[]
    NOT?: companydepartmentWhereInput | companydepartmentWhereInput[]
    CompanyId?: UuidNullableFilter<"companydepartment"> | string | null
    DepartmentId?: UuidNullableFilter<"companydepartment"> | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    departments?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }, "CompanyDepartmentID">

  export type companydepartmentOrderByWithAggregationInput = {
    CompanyDepartmentID?: SortOrder
    CompanyId?: SortOrderInput | SortOrder
    DepartmentId?: SortOrderInput | SortOrder
    _count?: companydepartmentCountOrderByAggregateInput
    _max?: companydepartmentMaxOrderByAggregateInput
    _min?: companydepartmentMinOrderByAggregateInput
  }

  export type companydepartmentScalarWhereWithAggregatesInput = {
    AND?: companydepartmentScalarWhereWithAggregatesInput | companydepartmentScalarWhereWithAggregatesInput[]
    OR?: companydepartmentScalarWhereWithAggregatesInput[]
    NOT?: companydepartmentScalarWhereWithAggregatesInput | companydepartmentScalarWhereWithAggregatesInput[]
    CompanyDepartmentID?: UuidWithAggregatesFilter<"companydepartment"> | string
    CompanyId?: UuidNullableWithAggregatesFilter<"companydepartment"> | string | null
    DepartmentId?: UuidNullableWithAggregatesFilter<"companydepartment"> | string | null
  }

  export type companyuserWhereInput = {
    AND?: companyuserWhereInput | companyuserWhereInput[]
    OR?: companyuserWhereInput[]
    NOT?: companyuserWhereInput | companyuserWhereInput[]
    CompanyUserId?: UuidFilter<"companyuser"> | string
    FirstName?: StringNullableFilter<"companyuser"> | string | null
    LastName?: StringNullableFilter<"companyuser"> | string | null
    Username?: StringNullableFilter<"companyuser"> | string | null
    Email?: StringNullableFilter<"companyuser"> | string | null
    Password?: StringNullableFilter<"companyuser"> | string | null
    UserMobile?: StringNullableFilter<"companyuser"> | string | null
    Status?: StringNullableFilter<"companyuser"> | string | null
    OTP?: StringNullableFilter<"companyuser"> | string | null
    LastOTPRequestedAt?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    CompanyCreatedDate?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    CompanyId?: UuidNullableFilter<"companyuser"> | string | null
    LastUpdatedDate?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
  }

  export type companyuserOrderByWithRelationInput = {
    CompanyUserId?: SortOrder
    FirstName?: SortOrderInput | SortOrder
    LastName?: SortOrderInput | SortOrder
    Username?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    UserMobile?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    LastOTPRequestedAt?: SortOrderInput | SortOrder
    CompanyCreatedDate?: SortOrderInput | SortOrder
    CompanyId?: SortOrderInput | SortOrder
    LastUpdatedDate?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
  }

  export type companyuserWhereUniqueInput = Prisma.AtLeast<{
    CompanyUserId?: string
    Email?: string
    AND?: companyuserWhereInput | companyuserWhereInput[]
    OR?: companyuserWhereInput[]
    NOT?: companyuserWhereInput | companyuserWhereInput[]
    FirstName?: StringNullableFilter<"companyuser"> | string | null
    LastName?: StringNullableFilter<"companyuser"> | string | null
    Username?: StringNullableFilter<"companyuser"> | string | null
    Password?: StringNullableFilter<"companyuser"> | string | null
    UserMobile?: StringNullableFilter<"companyuser"> | string | null
    Status?: StringNullableFilter<"companyuser"> | string | null
    OTP?: StringNullableFilter<"companyuser"> | string | null
    LastOTPRequestedAt?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    CompanyCreatedDate?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    CompanyId?: UuidNullableFilter<"companyuser"> | string | null
    LastUpdatedDate?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
  }, "CompanyUserId" | "Email">

  export type companyuserOrderByWithAggregationInput = {
    CompanyUserId?: SortOrder
    FirstName?: SortOrderInput | SortOrder
    LastName?: SortOrderInput | SortOrder
    Username?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    UserMobile?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    LastOTPRequestedAt?: SortOrderInput | SortOrder
    CompanyCreatedDate?: SortOrderInput | SortOrder
    CompanyId?: SortOrderInput | SortOrder
    LastUpdatedDate?: SortOrderInput | SortOrder
    _count?: companyuserCountOrderByAggregateInput
    _max?: companyuserMaxOrderByAggregateInput
    _min?: companyuserMinOrderByAggregateInput
  }

  export type companyuserScalarWhereWithAggregatesInput = {
    AND?: companyuserScalarWhereWithAggregatesInput | companyuserScalarWhereWithAggregatesInput[]
    OR?: companyuserScalarWhereWithAggregatesInput[]
    NOT?: companyuserScalarWhereWithAggregatesInput | companyuserScalarWhereWithAggregatesInput[]
    CompanyUserId?: UuidWithAggregatesFilter<"companyuser"> | string
    FirstName?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    LastName?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    Username?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    Email?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    Password?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    UserMobile?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    Status?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    OTP?: StringNullableWithAggregatesFilter<"companyuser"> | string | null
    LastOTPRequestedAt?: DateTimeNullableWithAggregatesFilter<"companyuser"> | Date | string | null
    CompanyCreatedDate?: DateTimeNullableWithAggregatesFilter<"companyuser"> | Date | string | null
    CompanyId?: UuidNullableWithAggregatesFilter<"companyuser"> | string | null
    LastUpdatedDate?: DateTimeNullableWithAggregatesFilter<"companyuser"> | Date | string | null
  }

  export type departmentsWhereInput = {
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    DepartmentID?: UuidFilter<"departments"> | string
    DepartmentName?: StringFilter<"departments"> | string
    companydepartment?: CompanydepartmentListRelationFilter
  }

  export type departmentsOrderByWithRelationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    companydepartment?: companydepartmentOrderByRelationAggregateInput
  }

  export type departmentsWhereUniqueInput = Prisma.AtLeast<{
    DepartmentID?: string
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    DepartmentName?: StringFilter<"departments"> | string
    companydepartment?: CompanydepartmentListRelationFilter
  }, "DepartmentID">

  export type departmentsOrderByWithAggregationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    _count?: departmentsCountOrderByAggregateInput
    _max?: departmentsMaxOrderByAggregateInput
    _min?: departmentsMinOrderByAggregateInput
  }

  export type departmentsScalarWhereWithAggregatesInput = {
    AND?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    OR?: departmentsScalarWhereWithAggregatesInput[]
    NOT?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    DepartmentID?: UuidWithAggregatesFilter<"departments"> | string
    DepartmentName?: StringWithAggregatesFilter<"departments"> | string
  }

  export type industriesWhereInput = {
    AND?: industriesWhereInput | industriesWhereInput[]
    OR?: industriesWhereInput[]
    NOT?: industriesWhereInput | industriesWhereInput[]
    IndustryID?: UuidFilter<"industries"> | string
    IndustryName?: StringFilter<"industries"> | string
    company?: CompanyListRelationFilter
  }

  export type industriesOrderByWithRelationInput = {
    IndustryID?: SortOrder
    IndustryName?: SortOrder
    company?: companyOrderByRelationAggregateInput
  }

  export type industriesWhereUniqueInput = Prisma.AtLeast<{
    IndustryID?: string
    AND?: industriesWhereInput | industriesWhereInput[]
    OR?: industriesWhereInput[]
    NOT?: industriesWhereInput | industriesWhereInput[]
    IndustryName?: StringFilter<"industries"> | string
    company?: CompanyListRelationFilter
  }, "IndustryID">

  export type industriesOrderByWithAggregationInput = {
    IndustryID?: SortOrder
    IndustryName?: SortOrder
    _count?: industriesCountOrderByAggregateInput
    _max?: industriesMaxOrderByAggregateInput
    _min?: industriesMinOrderByAggregateInput
  }

  export type industriesScalarWhereWithAggregatesInput = {
    AND?: industriesScalarWhereWithAggregatesInput | industriesScalarWhereWithAggregatesInput[]
    OR?: industriesScalarWhereWithAggregatesInput[]
    NOT?: industriesScalarWhereWithAggregatesInput | industriesScalarWhereWithAggregatesInput[]
    IndustryID?: UuidWithAggregatesFilter<"industries"> | string
    IndustryName?: StringWithAggregatesFilter<"industries"> | string
  }

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    id?: UuidFilter<"job"> | string
    name?: StringNullableFilter<"job"> | string | null
    position?: StringFilter<"job"> | string
    postedDate?: DateTimeFilter<"job"> | Date | string
    description?: StringFilter<"job"> | string
    requirements?: StringNullableFilter<"job"> | string | null
    image?: StringNullableFilter<"job"> | string | null
    type?: StringFilter<"job"> | string
    companyId?: UuidNullableFilter<"job"> | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
  }

  export type jobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrder
    postedDate?: SortOrder
    description?: SortOrder
    requirements?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    companyId?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
  }

  export type jobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    name?: StringNullableFilter<"job"> | string | null
    position?: StringFilter<"job"> | string
    postedDate?: DateTimeFilter<"job"> | Date | string
    description?: StringFilter<"job"> | string
    requirements?: StringNullableFilter<"job"> | string | null
    image?: StringNullableFilter<"job"> | string | null
    type?: StringFilter<"job"> | string
    companyId?: UuidNullableFilter<"job"> | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
  }, "id">

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrder
    postedDate?: SortOrder
    description?: SortOrder
    requirements?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: jobCountOrderByAggregateInput
    _max?: jobMaxOrderByAggregateInput
    _min?: jobMinOrderByAggregateInput
  }

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    OR?: jobScalarWhereWithAggregatesInput[]
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"job"> | string
    name?: StringNullableWithAggregatesFilter<"job"> | string | null
    position?: StringWithAggregatesFilter<"job"> | string
    postedDate?: DateTimeWithAggregatesFilter<"job"> | Date | string
    description?: StringWithAggregatesFilter<"job"> | string
    requirements?: StringNullableWithAggregatesFilter<"job"> | string | null
    image?: StringNullableWithAggregatesFilter<"job"> | string | null
    type?: StringWithAggregatesFilter<"job"> | string
    companyId?: UuidNullableWithAggregatesFilter<"job"> | string | null
  }

  export type noofemployeesWhereInput = {
    AND?: noofemployeesWhereInput | noofemployeesWhereInput[]
    OR?: noofemployeesWhereInput[]
    NOT?: noofemployeesWhereInput | noofemployeesWhereInput[]
    NoOfEmployeeID?: UuidFilter<"noofemployees"> | string
    NoOfEmployeeType?: StringFilter<"noofemployees"> | string
    company?: CompanyListRelationFilter
  }

  export type noofemployeesOrderByWithRelationInput = {
    NoOfEmployeeID?: SortOrder
    NoOfEmployeeType?: SortOrder
    company?: companyOrderByRelationAggregateInput
  }

  export type noofemployeesWhereUniqueInput = Prisma.AtLeast<{
    NoOfEmployeeID?: string
    AND?: noofemployeesWhereInput | noofemployeesWhereInput[]
    OR?: noofemployeesWhereInput[]
    NOT?: noofemployeesWhereInput | noofemployeesWhereInput[]
    NoOfEmployeeType?: StringFilter<"noofemployees"> | string
    company?: CompanyListRelationFilter
  }, "NoOfEmployeeID">

  export type noofemployeesOrderByWithAggregationInput = {
    NoOfEmployeeID?: SortOrder
    NoOfEmployeeType?: SortOrder
    _count?: noofemployeesCountOrderByAggregateInput
    _max?: noofemployeesMaxOrderByAggregateInput
    _min?: noofemployeesMinOrderByAggregateInput
  }

  export type noofemployeesScalarWhereWithAggregatesInput = {
    AND?: noofemployeesScalarWhereWithAggregatesInput | noofemployeesScalarWhereWithAggregatesInput[]
    OR?: noofemployeesScalarWhereWithAggregatesInput[]
    NOT?: noofemployeesScalarWhereWithAggregatesInput | noofemployeesScalarWhereWithAggregatesInput[]
    NoOfEmployeeID?: UuidWithAggregatesFilter<"noofemployees"> | string
    NoOfEmployeeType?: StringWithAggregatesFilter<"noofemployees"> | string
  }

  export type FeedbacksCreateInput = {
    FeedbackId: string
    Name?: string | null
    Email?: string | null
    Message?: string | null
    CreatedDate?: Date | string | null
  }

  export type FeedbacksUncheckedCreateInput = {
    FeedbackId: string
    Name?: string | null
    Email?: string | null
    Message?: string | null
    CreatedDate?: Date | string | null
  }

  export type FeedbacksUpdateInput = {
    FeedbackId?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedbacksUncheckedUpdateInput = {
    FeedbackId?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedbacksCreateManyInput = {
    FeedbackId: string
    Name?: string | null
    Email?: string | null
    Message?: string | null
    CreatedDate?: Date | string | null
  }

  export type FeedbacksUpdateManyMutationInput = {
    FeedbackId?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedbacksUncheckedUpdateManyInput = {
    FeedbackId?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminusersCreateInput = {
    AdminUserID?: string
    FirstName: string
    LastName: string
    Username: string
    Email: string
    Password: string
    CreatedDate?: Date | string | null
  }

  export type adminusersUncheckedCreateInput = {
    AdminUserID?: string
    FirstName: string
    LastName: string
    Username: string
    Email: string
    Password: string
    CreatedDate?: Date | string | null
  }

  export type adminusersUpdateInput = {
    AdminUserID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminusersUncheckedUpdateInput = {
    AdminUserID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminusersCreateManyInput = {
    AdminUserID?: string
    FirstName: string
    LastName: string
    Username: string
    Email: string
    Password: string
    CreatedDate?: Date | string | null
  }

  export type adminusersUpdateManyMutationInput = {
    AdminUserID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminusersUncheckedUpdateManyInput = {
    AdminUserID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyCreateInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    industries?: industriesCreateNestedOneWithoutCompanyInput
    noofemployees?: noofemployeesCreateNestedOneWithoutCompanyInput
    companydepartment?: companydepartmentCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserCreateNestedManyWithoutCompanyInput
    job?: jobCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
    NoOfEmployeeID?: string | null
    companydepartment?: companydepartmentUncheckedCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserUncheckedCreateNestedManyWithoutCompanyInput
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    industries?: industriesUpdateOneWithoutCompanyNestedInput
    noofemployees?: noofemployeesUpdateOneWithoutCompanyNestedInput
    companydepartment?: companydepartmentUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUpdateManyWithoutCompanyNestedInput
    job?: jobUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
    companydepartment?: companydepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUncheckedUpdateManyWithoutCompanyNestedInput
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
    NoOfEmployeeID?: string | null
  }

  export type companyUpdateManyMutationInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
  }

  export type companyUncheckedUpdateManyInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companydepartmentCreateInput = {
    CompanyDepartmentID?: string
    company?: companyCreateNestedOneWithoutCompanydepartmentInput
    departments?: departmentsCreateNestedOneWithoutCompanydepartmentInput
  }

  export type companydepartmentUncheckedCreateInput = {
    CompanyDepartmentID?: string
    CompanyId?: string | null
    DepartmentId?: string | null
  }

  export type companydepartmentUpdateInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateOneWithoutCompanydepartmentNestedInput
    departments?: departmentsUpdateOneWithoutCompanydepartmentNestedInput
  }

  export type companydepartmentUncheckedUpdateInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companydepartmentCreateManyInput = {
    CompanyDepartmentID?: string
    CompanyId?: string | null
    DepartmentId?: string | null
  }

  export type companydepartmentUpdateManyMutationInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
  }

  export type companydepartmentUncheckedUpdateManyInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companyuserCreateInput = {
    CompanyUserId?: string
    FirstName?: string | null
    LastName?: string | null
    Username?: string | null
    Email?: string | null
    Password?: string | null
    UserMobile?: string | null
    Status?: string | null
    OTP?: string | null
    LastOTPRequestedAt?: Date | string | null
    CompanyCreatedDate?: Date | string | null
    LastUpdatedDate?: Date | string | null
    company?: companyCreateNestedOneWithoutCompanyuserInput
  }

  export type companyuserUncheckedCreateInput = {
    CompanyUserId?: string
    FirstName?: string | null
    LastName?: string | null
    Username?: string | null
    Email?: string | null
    Password?: string | null
    UserMobile?: string | null
    Status?: string | null
    OTP?: string | null
    LastOTPRequestedAt?: Date | string | null
    CompanyCreatedDate?: Date | string | null
    CompanyId?: string | null
    LastUpdatedDate?: Date | string | null
  }

  export type companyuserUpdateInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutCompanyuserNestedInput
  }

  export type companyuserUncheckedUpdateInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyuserCreateManyInput = {
    CompanyUserId?: string
    FirstName?: string | null
    LastName?: string | null
    Username?: string | null
    Email?: string | null
    Password?: string | null
    UserMobile?: string | null
    Status?: string | null
    OTP?: string | null
    LastOTPRequestedAt?: Date | string | null
    CompanyCreatedDate?: Date | string | null
    CompanyId?: string | null
    LastUpdatedDate?: Date | string | null
  }

  export type companyuserUpdateManyMutationInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyuserUncheckedUpdateManyInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentsCreateInput = {
    DepartmentID?: string
    DepartmentName: string
    companydepartment?: companydepartmentCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUncheckedCreateInput = {
    DepartmentID?: string
    DepartmentName: string
    companydepartment?: companydepartmentUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUpdateInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentName?: StringFieldUpdateOperationsInput | string
    companydepartment?: companydepartmentUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsUncheckedUpdateInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentName?: StringFieldUpdateOperationsInput | string
    companydepartment?: companydepartmentUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsCreateManyInput = {
    DepartmentID?: string
    DepartmentName: string
  }

  export type departmentsUpdateManyMutationInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentName?: StringFieldUpdateOperationsInput | string
  }

  export type departmentsUncheckedUpdateManyInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentName?: StringFieldUpdateOperationsInput | string
  }

  export type industriesCreateInput = {
    IndustryID?: string
    IndustryName: string
    company?: companyCreateNestedManyWithoutIndustriesInput
  }

  export type industriesUncheckedCreateInput = {
    IndustryID?: string
    IndustryName: string
    company?: companyUncheckedCreateNestedManyWithoutIndustriesInput
  }

  export type industriesUpdateInput = {
    IndustryID?: StringFieldUpdateOperationsInput | string
    IndustryName?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateManyWithoutIndustriesNestedInput
  }

  export type industriesUncheckedUpdateInput = {
    IndustryID?: StringFieldUpdateOperationsInput | string
    IndustryName?: StringFieldUpdateOperationsInput | string
    company?: companyUncheckedUpdateManyWithoutIndustriesNestedInput
  }

  export type industriesCreateManyInput = {
    IndustryID?: string
    IndustryName: string
  }

  export type industriesUpdateManyMutationInput = {
    IndustryID?: StringFieldUpdateOperationsInput | string
    IndustryName?: StringFieldUpdateOperationsInput | string
  }

  export type industriesUncheckedUpdateManyInput = {
    IndustryID?: StringFieldUpdateOperationsInput | string
    IndustryName?: StringFieldUpdateOperationsInput | string
  }

  export type jobCreateInput = {
    id?: string
    name?: string | null
    position: string
    postedDate: Date | string
    description: string
    requirements?: string | null
    image?: string | null
    type: string
    company?: companyCreateNestedOneWithoutJobInput
  }

  export type jobUncheckedCreateInput = {
    id?: string
    name?: string | null
    position: string
    postedDate: Date | string
    description: string
    requirements?: string | null
    image?: string | null
    type: string
    companyId?: string | null
  }

  export type jobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateOneWithoutJobNestedInput
  }

  export type jobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobCreateManyInput = {
    id?: string
    name?: string | null
    position: string
    postedDate: Date | string
    description: string
    requirements?: string | null
    image?: string | null
    type: string
    companyId?: string | null
  }

  export type jobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type jobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type noofemployeesCreateInput = {
    NoOfEmployeeID?: string
    NoOfEmployeeType: string
    company?: companyCreateNestedManyWithoutNoofemployeesInput
  }

  export type noofemployeesUncheckedCreateInput = {
    NoOfEmployeeID?: string
    NoOfEmployeeType: string
    company?: companyUncheckedCreateNestedManyWithoutNoofemployeesInput
  }

  export type noofemployeesUpdateInput = {
    NoOfEmployeeID?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeType?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateManyWithoutNoofemployeesNestedInput
  }

  export type noofemployeesUncheckedUpdateInput = {
    NoOfEmployeeID?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeType?: StringFieldUpdateOperationsInput | string
    company?: companyUncheckedUpdateManyWithoutNoofemployeesNestedInput
  }

  export type noofemployeesCreateManyInput = {
    NoOfEmployeeID?: string
    NoOfEmployeeType: string
  }

  export type noofemployeesUpdateManyMutationInput = {
    NoOfEmployeeID?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeType?: StringFieldUpdateOperationsInput | string
  }

  export type noofemployeesUncheckedUpdateManyInput = {
    NoOfEmployeeID?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeType?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeedbacksCountOrderByAggregateInput = {
    FeedbackId?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Message?: SortOrder
    CreatedDate?: SortOrder
  }

  export type FeedbacksMaxOrderByAggregateInput = {
    FeedbackId?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Message?: SortOrder
    CreatedDate?: SortOrder
  }

  export type FeedbacksMinOrderByAggregateInput = {
    FeedbackId?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Message?: SortOrder
    CreatedDate?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type adminusersCountOrderByAggregateInput = {
    AdminUserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    CreatedDate?: SortOrder
  }

  export type adminusersMaxOrderByAggregateInput = {
    AdminUserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    CreatedDate?: SortOrder
  }

  export type adminusersMinOrderByAggregateInput = {
    AdminUserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    CreatedDate?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IndustriesNullableScalarRelationFilter = {
    is?: industriesWhereInput | null
    isNot?: industriesWhereInput | null
  }

  export type NoofemployeesNullableScalarRelationFilter = {
    is?: noofemployeesWhereInput | null
    isNot?: noofemployeesWhereInput | null
  }

  export type CompanydepartmentListRelationFilter = {
    every?: companydepartmentWhereInput
    some?: companydepartmentWhereInput
    none?: companydepartmentWhereInput
  }

  export type CompanyuserListRelationFilter = {
    every?: companyuserWhereInput
    some?: companyuserWhereInput
    none?: companyuserWhereInput
  }

  export type JobListRelationFilter = {
    every?: jobWhereInput
    some?: jobWhereInput
    none?: jobWhereInput
  }

  export type companydepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyuserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    CompanyDescription?: SortOrder
    CompanyLogo?: SortOrder
    CompanyLocation?: SortOrder
    IndustryID?: SortOrder
    NoOfEmployeeID?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    CompanyDescription?: SortOrder
    CompanyLogo?: SortOrder
    CompanyLocation?: SortOrder
    IndustryID?: SortOrder
    NoOfEmployeeID?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    CompanyDescription?: SortOrder
    CompanyLogo?: SortOrder
    CompanyLocation?: SortOrder
    IndustryID?: SortOrder
    NoOfEmployeeID?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: companyWhereInput | null
    isNot?: companyWhereInput | null
  }

  export type DepartmentsNullableScalarRelationFilter = {
    is?: departmentsWhereInput | null
    isNot?: departmentsWhereInput | null
  }

  export type companydepartmentCountOrderByAggregateInput = {
    CompanyDepartmentID?: SortOrder
    CompanyId?: SortOrder
    DepartmentId?: SortOrder
  }

  export type companydepartmentMaxOrderByAggregateInput = {
    CompanyDepartmentID?: SortOrder
    CompanyId?: SortOrder
    DepartmentId?: SortOrder
  }

  export type companydepartmentMinOrderByAggregateInput = {
    CompanyDepartmentID?: SortOrder
    CompanyId?: SortOrder
    DepartmentId?: SortOrder
  }

  export type companyuserCountOrderByAggregateInput = {
    CompanyUserId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    UserMobile?: SortOrder
    Status?: SortOrder
    OTP?: SortOrder
    LastOTPRequestedAt?: SortOrder
    CompanyCreatedDate?: SortOrder
    CompanyId?: SortOrder
    LastUpdatedDate?: SortOrder
  }

  export type companyuserMaxOrderByAggregateInput = {
    CompanyUserId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    UserMobile?: SortOrder
    Status?: SortOrder
    OTP?: SortOrder
    LastOTPRequestedAt?: SortOrder
    CompanyCreatedDate?: SortOrder
    CompanyId?: SortOrder
    LastUpdatedDate?: SortOrder
  }

  export type companyuserMinOrderByAggregateInput = {
    CompanyUserId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    UserMobile?: SortOrder
    Status?: SortOrder
    OTP?: SortOrder
    LastOTPRequestedAt?: SortOrder
    CompanyCreatedDate?: SortOrder
    CompanyId?: SortOrder
    LastUpdatedDate?: SortOrder
  }

  export type departmentsCountOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
  }

  export type departmentsMaxOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
  }

  export type departmentsMinOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
  }

  export type CompanyListRelationFilter = {
    every?: companyWhereInput
    some?: companyWhereInput
    none?: companyWhereInput
  }

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type industriesCountOrderByAggregateInput = {
    IndustryID?: SortOrder
    IndustryName?: SortOrder
  }

  export type industriesMaxOrderByAggregateInput = {
    IndustryID?: SortOrder
    IndustryName?: SortOrder
  }

  export type industriesMinOrderByAggregateInput = {
    IndustryID?: SortOrder
    IndustryName?: SortOrder
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

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    postedDate?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    image?: SortOrder
    type?: SortOrder
    companyId?: SortOrder
  }

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    postedDate?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    image?: SortOrder
    type?: SortOrder
    companyId?: SortOrder
  }

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    postedDate?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    image?: SortOrder
    type?: SortOrder
    companyId?: SortOrder
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

  export type noofemployeesCountOrderByAggregateInput = {
    NoOfEmployeeID?: SortOrder
    NoOfEmployeeType?: SortOrder
  }

  export type noofemployeesMaxOrderByAggregateInput = {
    NoOfEmployeeID?: SortOrder
    NoOfEmployeeType?: SortOrder
  }

  export type noofemployeesMinOrderByAggregateInput = {
    NoOfEmployeeID?: SortOrder
    NoOfEmployeeType?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type industriesCreateNestedOneWithoutCompanyInput = {
    create?: XOR<industriesCreateWithoutCompanyInput, industriesUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: industriesCreateOrConnectWithoutCompanyInput
    connect?: industriesWhereUniqueInput
  }

  export type noofemployeesCreateNestedOneWithoutCompanyInput = {
    create?: XOR<noofemployeesCreateWithoutCompanyInput, noofemployeesUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: noofemployeesCreateOrConnectWithoutCompanyInput
    connect?: noofemployeesWhereUniqueInput
  }

  export type companydepartmentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<companydepartmentCreateWithoutCompanyInput, companydepartmentUncheckedCreateWithoutCompanyInput> | companydepartmentCreateWithoutCompanyInput[] | companydepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutCompanyInput | companydepartmentCreateOrConnectWithoutCompanyInput[]
    createMany?: companydepartmentCreateManyCompanyInputEnvelope
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
  }

  export type companyuserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<companyuserCreateWithoutCompanyInput, companyuserUncheckedCreateWithoutCompanyInput> | companyuserCreateWithoutCompanyInput[] | companyuserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companyuserCreateOrConnectWithoutCompanyInput | companyuserCreateOrConnectWithoutCompanyInput[]
    createMany?: companyuserCreateManyCompanyInputEnvelope
    connect?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
  }

  export type jobCreateNestedManyWithoutCompanyInput = {
    create?: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput> | jobCreateWithoutCompanyInput[] | jobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[]
    createMany?: jobCreateManyCompanyInputEnvelope
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
  }

  export type companydepartmentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<companydepartmentCreateWithoutCompanyInput, companydepartmentUncheckedCreateWithoutCompanyInput> | companydepartmentCreateWithoutCompanyInput[] | companydepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutCompanyInput | companydepartmentCreateOrConnectWithoutCompanyInput[]
    createMany?: companydepartmentCreateManyCompanyInputEnvelope
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
  }

  export type companyuserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<companyuserCreateWithoutCompanyInput, companyuserUncheckedCreateWithoutCompanyInput> | companyuserCreateWithoutCompanyInput[] | companyuserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companyuserCreateOrConnectWithoutCompanyInput | companyuserCreateOrConnectWithoutCompanyInput[]
    createMany?: companyuserCreateManyCompanyInputEnvelope
    connect?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
  }

  export type jobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput> | jobCreateWithoutCompanyInput[] | jobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[]
    createMany?: jobCreateManyCompanyInputEnvelope
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
  }

  export type industriesUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<industriesCreateWithoutCompanyInput, industriesUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: industriesCreateOrConnectWithoutCompanyInput
    upsert?: industriesUpsertWithoutCompanyInput
    disconnect?: industriesWhereInput | boolean
    delete?: industriesWhereInput | boolean
    connect?: industriesWhereUniqueInput
    update?: XOR<XOR<industriesUpdateToOneWithWhereWithoutCompanyInput, industriesUpdateWithoutCompanyInput>, industriesUncheckedUpdateWithoutCompanyInput>
  }

  export type noofemployeesUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<noofemployeesCreateWithoutCompanyInput, noofemployeesUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: noofemployeesCreateOrConnectWithoutCompanyInput
    upsert?: noofemployeesUpsertWithoutCompanyInput
    disconnect?: noofemployeesWhereInput | boolean
    delete?: noofemployeesWhereInput | boolean
    connect?: noofemployeesWhereUniqueInput
    update?: XOR<XOR<noofemployeesUpdateToOneWithWhereWithoutCompanyInput, noofemployeesUpdateWithoutCompanyInput>, noofemployeesUncheckedUpdateWithoutCompanyInput>
  }

  export type companydepartmentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<companydepartmentCreateWithoutCompanyInput, companydepartmentUncheckedCreateWithoutCompanyInput> | companydepartmentCreateWithoutCompanyInput[] | companydepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutCompanyInput | companydepartmentCreateOrConnectWithoutCompanyInput[]
    upsert?: companydepartmentUpsertWithWhereUniqueWithoutCompanyInput | companydepartmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: companydepartmentCreateManyCompanyInputEnvelope
    set?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    disconnect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    delete?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    update?: companydepartmentUpdateWithWhereUniqueWithoutCompanyInput | companydepartmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: companydepartmentUpdateManyWithWhereWithoutCompanyInput | companydepartmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: companydepartmentScalarWhereInput | companydepartmentScalarWhereInput[]
  }

  export type companyuserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<companyuserCreateWithoutCompanyInput, companyuserUncheckedCreateWithoutCompanyInput> | companyuserCreateWithoutCompanyInput[] | companyuserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companyuserCreateOrConnectWithoutCompanyInput | companyuserCreateOrConnectWithoutCompanyInput[]
    upsert?: companyuserUpsertWithWhereUniqueWithoutCompanyInput | companyuserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: companyuserCreateManyCompanyInputEnvelope
    set?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    disconnect?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    delete?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    connect?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    update?: companyuserUpdateWithWhereUniqueWithoutCompanyInput | companyuserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: companyuserUpdateManyWithWhereWithoutCompanyInput | companyuserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: companyuserScalarWhereInput | companyuserScalarWhereInput[]
  }

  export type jobUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput> | jobCreateWithoutCompanyInput[] | jobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[]
    upsert?: jobUpsertWithWhereUniqueWithoutCompanyInput | jobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: jobCreateManyCompanyInputEnvelope
    set?: jobWhereUniqueInput | jobWhereUniqueInput[]
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[]
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    update?: jobUpdateWithWhereUniqueWithoutCompanyInput | jobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: jobUpdateManyWithWhereWithoutCompanyInput | jobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[]
  }

  export type companydepartmentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<companydepartmentCreateWithoutCompanyInput, companydepartmentUncheckedCreateWithoutCompanyInput> | companydepartmentCreateWithoutCompanyInput[] | companydepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutCompanyInput | companydepartmentCreateOrConnectWithoutCompanyInput[]
    upsert?: companydepartmentUpsertWithWhereUniqueWithoutCompanyInput | companydepartmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: companydepartmentCreateManyCompanyInputEnvelope
    set?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    disconnect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    delete?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    update?: companydepartmentUpdateWithWhereUniqueWithoutCompanyInput | companydepartmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: companydepartmentUpdateManyWithWhereWithoutCompanyInput | companydepartmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: companydepartmentScalarWhereInput | companydepartmentScalarWhereInput[]
  }

  export type companyuserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<companyuserCreateWithoutCompanyInput, companyuserUncheckedCreateWithoutCompanyInput> | companyuserCreateWithoutCompanyInput[] | companyuserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: companyuserCreateOrConnectWithoutCompanyInput | companyuserCreateOrConnectWithoutCompanyInput[]
    upsert?: companyuserUpsertWithWhereUniqueWithoutCompanyInput | companyuserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: companyuserCreateManyCompanyInputEnvelope
    set?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    disconnect?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    delete?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    connect?: companyuserWhereUniqueInput | companyuserWhereUniqueInput[]
    update?: companyuserUpdateWithWhereUniqueWithoutCompanyInput | companyuserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: companyuserUpdateManyWithWhereWithoutCompanyInput | companyuserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: companyuserScalarWhereInput | companyuserScalarWhereInput[]
  }

  export type jobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput> | jobCreateWithoutCompanyInput[] | jobUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[]
    upsert?: jobUpsertWithWhereUniqueWithoutCompanyInput | jobUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: jobCreateManyCompanyInputEnvelope
    set?: jobWhereUniqueInput | jobWhereUniqueInput[]
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[]
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    update?: jobUpdateWithWhereUniqueWithoutCompanyInput | jobUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: jobUpdateManyWithWhereWithoutCompanyInput | jobUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutCompanydepartmentInput = {
    create?: XOR<companyCreateWithoutCompanydepartmentInput, companyUncheckedCreateWithoutCompanydepartmentInput>
    connectOrCreate?: companyCreateOrConnectWithoutCompanydepartmentInput
    connect?: companyWhereUniqueInput
  }

  export type departmentsCreateNestedOneWithoutCompanydepartmentInput = {
    create?: XOR<departmentsCreateWithoutCompanydepartmentInput, departmentsUncheckedCreateWithoutCompanydepartmentInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutCompanydepartmentInput
    connect?: departmentsWhereUniqueInput
  }

  export type companyUpdateOneWithoutCompanydepartmentNestedInput = {
    create?: XOR<companyCreateWithoutCompanydepartmentInput, companyUncheckedCreateWithoutCompanydepartmentInput>
    connectOrCreate?: companyCreateOrConnectWithoutCompanydepartmentInput
    upsert?: companyUpsertWithoutCompanydepartmentInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutCompanydepartmentInput, companyUpdateWithoutCompanydepartmentInput>, companyUncheckedUpdateWithoutCompanydepartmentInput>
  }

  export type departmentsUpdateOneWithoutCompanydepartmentNestedInput = {
    create?: XOR<departmentsCreateWithoutCompanydepartmentInput, departmentsUncheckedCreateWithoutCompanydepartmentInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutCompanydepartmentInput
    upsert?: departmentsUpsertWithoutCompanydepartmentInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutCompanydepartmentInput, departmentsUpdateWithoutCompanydepartmentInput>, departmentsUncheckedUpdateWithoutCompanydepartmentInput>
  }

  export type companyCreateNestedOneWithoutCompanyuserInput = {
    create?: XOR<companyCreateWithoutCompanyuserInput, companyUncheckedCreateWithoutCompanyuserInput>
    connectOrCreate?: companyCreateOrConnectWithoutCompanyuserInput
    connect?: companyWhereUniqueInput
  }

  export type companyUpdateOneWithoutCompanyuserNestedInput = {
    create?: XOR<companyCreateWithoutCompanyuserInput, companyUncheckedCreateWithoutCompanyuserInput>
    connectOrCreate?: companyCreateOrConnectWithoutCompanyuserInput
    upsert?: companyUpsertWithoutCompanyuserInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutCompanyuserInput, companyUpdateWithoutCompanyuserInput>, companyUncheckedUpdateWithoutCompanyuserInput>
  }

  export type companydepartmentCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<companydepartmentCreateWithoutDepartmentsInput, companydepartmentUncheckedCreateWithoutDepartmentsInput> | companydepartmentCreateWithoutDepartmentsInput[] | companydepartmentUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutDepartmentsInput | companydepartmentCreateOrConnectWithoutDepartmentsInput[]
    createMany?: companydepartmentCreateManyDepartmentsInputEnvelope
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
  }

  export type companydepartmentUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<companydepartmentCreateWithoutDepartmentsInput, companydepartmentUncheckedCreateWithoutDepartmentsInput> | companydepartmentCreateWithoutDepartmentsInput[] | companydepartmentUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutDepartmentsInput | companydepartmentCreateOrConnectWithoutDepartmentsInput[]
    createMany?: companydepartmentCreateManyDepartmentsInputEnvelope
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
  }

  export type companydepartmentUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<companydepartmentCreateWithoutDepartmentsInput, companydepartmentUncheckedCreateWithoutDepartmentsInput> | companydepartmentCreateWithoutDepartmentsInput[] | companydepartmentUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutDepartmentsInput | companydepartmentCreateOrConnectWithoutDepartmentsInput[]
    upsert?: companydepartmentUpsertWithWhereUniqueWithoutDepartmentsInput | companydepartmentUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: companydepartmentCreateManyDepartmentsInputEnvelope
    set?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    disconnect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    delete?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    update?: companydepartmentUpdateWithWhereUniqueWithoutDepartmentsInput | companydepartmentUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: companydepartmentUpdateManyWithWhereWithoutDepartmentsInput | companydepartmentUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: companydepartmentScalarWhereInput | companydepartmentScalarWhereInput[]
  }

  export type companydepartmentUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<companydepartmentCreateWithoutDepartmentsInput, companydepartmentUncheckedCreateWithoutDepartmentsInput> | companydepartmentCreateWithoutDepartmentsInput[] | companydepartmentUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: companydepartmentCreateOrConnectWithoutDepartmentsInput | companydepartmentCreateOrConnectWithoutDepartmentsInput[]
    upsert?: companydepartmentUpsertWithWhereUniqueWithoutDepartmentsInput | companydepartmentUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: companydepartmentCreateManyDepartmentsInputEnvelope
    set?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    disconnect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    delete?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    connect?: companydepartmentWhereUniqueInput | companydepartmentWhereUniqueInput[]
    update?: companydepartmentUpdateWithWhereUniqueWithoutDepartmentsInput | companydepartmentUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: companydepartmentUpdateManyWithWhereWithoutDepartmentsInput | companydepartmentUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: companydepartmentScalarWhereInput | companydepartmentScalarWhereInput[]
  }

  export type companyCreateNestedManyWithoutIndustriesInput = {
    create?: XOR<companyCreateWithoutIndustriesInput, companyUncheckedCreateWithoutIndustriesInput> | companyCreateWithoutIndustriesInput[] | companyUncheckedCreateWithoutIndustriesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutIndustriesInput | companyCreateOrConnectWithoutIndustriesInput[]
    createMany?: companyCreateManyIndustriesInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type companyUncheckedCreateNestedManyWithoutIndustriesInput = {
    create?: XOR<companyCreateWithoutIndustriesInput, companyUncheckedCreateWithoutIndustriesInput> | companyCreateWithoutIndustriesInput[] | companyUncheckedCreateWithoutIndustriesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutIndustriesInput | companyCreateOrConnectWithoutIndustriesInput[]
    createMany?: companyCreateManyIndustriesInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type companyUpdateManyWithoutIndustriesNestedInput = {
    create?: XOR<companyCreateWithoutIndustriesInput, companyUncheckedCreateWithoutIndustriesInput> | companyCreateWithoutIndustriesInput[] | companyUncheckedCreateWithoutIndustriesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutIndustriesInput | companyCreateOrConnectWithoutIndustriesInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutIndustriesInput | companyUpsertWithWhereUniqueWithoutIndustriesInput[]
    createMany?: companyCreateManyIndustriesInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutIndustriesInput | companyUpdateWithWhereUniqueWithoutIndustriesInput[]
    updateMany?: companyUpdateManyWithWhereWithoutIndustriesInput | companyUpdateManyWithWhereWithoutIndustriesInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type companyUncheckedUpdateManyWithoutIndustriesNestedInput = {
    create?: XOR<companyCreateWithoutIndustriesInput, companyUncheckedCreateWithoutIndustriesInput> | companyCreateWithoutIndustriesInput[] | companyUncheckedCreateWithoutIndustriesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutIndustriesInput | companyCreateOrConnectWithoutIndustriesInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutIndustriesInput | companyUpsertWithWhereUniqueWithoutIndustriesInput[]
    createMany?: companyCreateManyIndustriesInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutIndustriesInput | companyUpdateWithWhereUniqueWithoutIndustriesInput[]
    updateMany?: companyUpdateManyWithWhereWithoutIndustriesInput | companyUpdateManyWithWhereWithoutIndustriesInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutJobInput = {
    create?: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>
    connectOrCreate?: companyCreateOrConnectWithoutJobInput
    connect?: companyWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type companyUpdateOneWithoutJobNestedInput = {
    create?: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>
    connectOrCreate?: companyCreateOrConnectWithoutJobInput
    upsert?: companyUpsertWithoutJobInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutJobInput, companyUpdateWithoutJobInput>, companyUncheckedUpdateWithoutJobInput>
  }

  export type companyCreateNestedManyWithoutNoofemployeesInput = {
    create?: XOR<companyCreateWithoutNoofemployeesInput, companyUncheckedCreateWithoutNoofemployeesInput> | companyCreateWithoutNoofemployeesInput[] | companyUncheckedCreateWithoutNoofemployeesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutNoofemployeesInput | companyCreateOrConnectWithoutNoofemployeesInput[]
    createMany?: companyCreateManyNoofemployeesInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type companyUncheckedCreateNestedManyWithoutNoofemployeesInput = {
    create?: XOR<companyCreateWithoutNoofemployeesInput, companyUncheckedCreateWithoutNoofemployeesInput> | companyCreateWithoutNoofemployeesInput[] | companyUncheckedCreateWithoutNoofemployeesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutNoofemployeesInput | companyCreateOrConnectWithoutNoofemployeesInput[]
    createMany?: companyCreateManyNoofemployeesInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type companyUpdateManyWithoutNoofemployeesNestedInput = {
    create?: XOR<companyCreateWithoutNoofemployeesInput, companyUncheckedCreateWithoutNoofemployeesInput> | companyCreateWithoutNoofemployeesInput[] | companyUncheckedCreateWithoutNoofemployeesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutNoofemployeesInput | companyCreateOrConnectWithoutNoofemployeesInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutNoofemployeesInput | companyUpsertWithWhereUniqueWithoutNoofemployeesInput[]
    createMany?: companyCreateManyNoofemployeesInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutNoofemployeesInput | companyUpdateWithWhereUniqueWithoutNoofemployeesInput[]
    updateMany?: companyUpdateManyWithWhereWithoutNoofemployeesInput | companyUpdateManyWithWhereWithoutNoofemployeesInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type companyUncheckedUpdateManyWithoutNoofemployeesNestedInput = {
    create?: XOR<companyCreateWithoutNoofemployeesInput, companyUncheckedCreateWithoutNoofemployeesInput> | companyCreateWithoutNoofemployeesInput[] | companyUncheckedCreateWithoutNoofemployeesInput[]
    connectOrCreate?: companyCreateOrConnectWithoutNoofemployeesInput | companyCreateOrConnectWithoutNoofemployeesInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutNoofemployeesInput | companyUpsertWithWhereUniqueWithoutNoofemployeesInput[]
    createMany?: companyCreateManyNoofemployeesInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutNoofemployeesInput | companyUpdateWithWhereUniqueWithoutNoofemployeesInput[]
    updateMany?: companyUpdateManyWithWhereWithoutNoofemployeesInput | companyUpdateManyWithWhereWithoutNoofemployeesInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type industriesCreateWithoutCompanyInput = {
    IndustryID?: string
    IndustryName: string
  }

  export type industriesUncheckedCreateWithoutCompanyInput = {
    IndustryID?: string
    IndustryName: string
  }

  export type industriesCreateOrConnectWithoutCompanyInput = {
    where: industriesWhereUniqueInput
    create: XOR<industriesCreateWithoutCompanyInput, industriesUncheckedCreateWithoutCompanyInput>
  }

  export type noofemployeesCreateWithoutCompanyInput = {
    NoOfEmployeeID?: string
    NoOfEmployeeType: string
  }

  export type noofemployeesUncheckedCreateWithoutCompanyInput = {
    NoOfEmployeeID?: string
    NoOfEmployeeType: string
  }

  export type noofemployeesCreateOrConnectWithoutCompanyInput = {
    where: noofemployeesWhereUniqueInput
    create: XOR<noofemployeesCreateWithoutCompanyInput, noofemployeesUncheckedCreateWithoutCompanyInput>
  }

  export type companydepartmentCreateWithoutCompanyInput = {
    CompanyDepartmentID?: string
    departments?: departmentsCreateNestedOneWithoutCompanydepartmentInput
  }

  export type companydepartmentUncheckedCreateWithoutCompanyInput = {
    CompanyDepartmentID?: string
    DepartmentId?: string | null
  }

  export type companydepartmentCreateOrConnectWithoutCompanyInput = {
    where: companydepartmentWhereUniqueInput
    create: XOR<companydepartmentCreateWithoutCompanyInput, companydepartmentUncheckedCreateWithoutCompanyInput>
  }

  export type companydepartmentCreateManyCompanyInputEnvelope = {
    data: companydepartmentCreateManyCompanyInput | companydepartmentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type companyuserCreateWithoutCompanyInput = {
    CompanyUserId?: string
    FirstName?: string | null
    LastName?: string | null
    Username?: string | null
    Email?: string | null
    Password?: string | null
    UserMobile?: string | null
    Status?: string | null
    OTP?: string | null
    LastOTPRequestedAt?: Date | string | null
    CompanyCreatedDate?: Date | string | null
    LastUpdatedDate?: Date | string | null
  }

  export type companyuserUncheckedCreateWithoutCompanyInput = {
    CompanyUserId?: string
    FirstName?: string | null
    LastName?: string | null
    Username?: string | null
    Email?: string | null
    Password?: string | null
    UserMobile?: string | null
    Status?: string | null
    OTP?: string | null
    LastOTPRequestedAt?: Date | string | null
    CompanyCreatedDate?: Date | string | null
    LastUpdatedDate?: Date | string | null
  }

  export type companyuserCreateOrConnectWithoutCompanyInput = {
    where: companyuserWhereUniqueInput
    create: XOR<companyuserCreateWithoutCompanyInput, companyuserUncheckedCreateWithoutCompanyInput>
  }

  export type companyuserCreateManyCompanyInputEnvelope = {
    data: companyuserCreateManyCompanyInput | companyuserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type jobCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    position: string
    postedDate: Date | string
    description: string
    requirements?: string | null
    image?: string | null
    type: string
  }

  export type jobUncheckedCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    position: string
    postedDate: Date | string
    description: string
    requirements?: string | null
    image?: string | null
    type: string
  }

  export type jobCreateOrConnectWithoutCompanyInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>
  }

  export type jobCreateManyCompanyInputEnvelope = {
    data: jobCreateManyCompanyInput | jobCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type industriesUpsertWithoutCompanyInput = {
    update: XOR<industriesUpdateWithoutCompanyInput, industriesUncheckedUpdateWithoutCompanyInput>
    create: XOR<industriesCreateWithoutCompanyInput, industriesUncheckedCreateWithoutCompanyInput>
    where?: industriesWhereInput
  }

  export type industriesUpdateToOneWithWhereWithoutCompanyInput = {
    where?: industriesWhereInput
    data: XOR<industriesUpdateWithoutCompanyInput, industriesUncheckedUpdateWithoutCompanyInput>
  }

  export type industriesUpdateWithoutCompanyInput = {
    IndustryID?: StringFieldUpdateOperationsInput | string
    IndustryName?: StringFieldUpdateOperationsInput | string
  }

  export type industriesUncheckedUpdateWithoutCompanyInput = {
    IndustryID?: StringFieldUpdateOperationsInput | string
    IndustryName?: StringFieldUpdateOperationsInput | string
  }

  export type noofemployeesUpsertWithoutCompanyInput = {
    update: XOR<noofemployeesUpdateWithoutCompanyInput, noofemployeesUncheckedUpdateWithoutCompanyInput>
    create: XOR<noofemployeesCreateWithoutCompanyInput, noofemployeesUncheckedCreateWithoutCompanyInput>
    where?: noofemployeesWhereInput
  }

  export type noofemployeesUpdateToOneWithWhereWithoutCompanyInput = {
    where?: noofemployeesWhereInput
    data: XOR<noofemployeesUpdateWithoutCompanyInput, noofemployeesUncheckedUpdateWithoutCompanyInput>
  }

  export type noofemployeesUpdateWithoutCompanyInput = {
    NoOfEmployeeID?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeType?: StringFieldUpdateOperationsInput | string
  }

  export type noofemployeesUncheckedUpdateWithoutCompanyInput = {
    NoOfEmployeeID?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeType?: StringFieldUpdateOperationsInput | string
  }

  export type companydepartmentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: companydepartmentWhereUniqueInput
    update: XOR<companydepartmentUpdateWithoutCompanyInput, companydepartmentUncheckedUpdateWithoutCompanyInput>
    create: XOR<companydepartmentCreateWithoutCompanyInput, companydepartmentUncheckedCreateWithoutCompanyInput>
  }

  export type companydepartmentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: companydepartmentWhereUniqueInput
    data: XOR<companydepartmentUpdateWithoutCompanyInput, companydepartmentUncheckedUpdateWithoutCompanyInput>
  }

  export type companydepartmentUpdateManyWithWhereWithoutCompanyInput = {
    where: companydepartmentScalarWhereInput
    data: XOR<companydepartmentUpdateManyMutationInput, companydepartmentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type companydepartmentScalarWhereInput = {
    AND?: companydepartmentScalarWhereInput | companydepartmentScalarWhereInput[]
    OR?: companydepartmentScalarWhereInput[]
    NOT?: companydepartmentScalarWhereInput | companydepartmentScalarWhereInput[]
    CompanyDepartmentID?: UuidFilter<"companydepartment"> | string
    CompanyId?: UuidNullableFilter<"companydepartment"> | string | null
    DepartmentId?: UuidNullableFilter<"companydepartment"> | string | null
  }

  export type companyuserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: companyuserWhereUniqueInput
    update: XOR<companyuserUpdateWithoutCompanyInput, companyuserUncheckedUpdateWithoutCompanyInput>
    create: XOR<companyuserCreateWithoutCompanyInput, companyuserUncheckedCreateWithoutCompanyInput>
  }

  export type companyuserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: companyuserWhereUniqueInput
    data: XOR<companyuserUpdateWithoutCompanyInput, companyuserUncheckedUpdateWithoutCompanyInput>
  }

  export type companyuserUpdateManyWithWhereWithoutCompanyInput = {
    where: companyuserScalarWhereInput
    data: XOR<companyuserUpdateManyMutationInput, companyuserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type companyuserScalarWhereInput = {
    AND?: companyuserScalarWhereInput | companyuserScalarWhereInput[]
    OR?: companyuserScalarWhereInput[]
    NOT?: companyuserScalarWhereInput | companyuserScalarWhereInput[]
    CompanyUserId?: UuidFilter<"companyuser"> | string
    FirstName?: StringNullableFilter<"companyuser"> | string | null
    LastName?: StringNullableFilter<"companyuser"> | string | null
    Username?: StringNullableFilter<"companyuser"> | string | null
    Email?: StringNullableFilter<"companyuser"> | string | null
    Password?: StringNullableFilter<"companyuser"> | string | null
    UserMobile?: StringNullableFilter<"companyuser"> | string | null
    Status?: StringNullableFilter<"companyuser"> | string | null
    OTP?: StringNullableFilter<"companyuser"> | string | null
    LastOTPRequestedAt?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    CompanyCreatedDate?: DateTimeNullableFilter<"companyuser"> | Date | string | null
    CompanyId?: UuidNullableFilter<"companyuser"> | string | null
    LastUpdatedDate?: DateTimeNullableFilter<"companyuser"> | Date | string | null
  }

  export type jobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: jobWhereUniqueInput
    update: XOR<jobUpdateWithoutCompanyInput, jobUncheckedUpdateWithoutCompanyInput>
    create: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>
  }

  export type jobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: jobWhereUniqueInput
    data: XOR<jobUpdateWithoutCompanyInput, jobUncheckedUpdateWithoutCompanyInput>
  }

  export type jobUpdateManyWithWhereWithoutCompanyInput = {
    where: jobScalarWhereInput
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyWithoutCompanyInput>
  }

  export type jobScalarWhereInput = {
    AND?: jobScalarWhereInput | jobScalarWhereInput[]
    OR?: jobScalarWhereInput[]
    NOT?: jobScalarWhereInput | jobScalarWhereInput[]
    id?: UuidFilter<"job"> | string
    name?: StringNullableFilter<"job"> | string | null
    position?: StringFilter<"job"> | string
    postedDate?: DateTimeFilter<"job"> | Date | string
    description?: StringFilter<"job"> | string
    requirements?: StringNullableFilter<"job"> | string | null
    image?: StringNullableFilter<"job"> | string | null
    type?: StringFilter<"job"> | string
    companyId?: UuidNullableFilter<"job"> | string | null
  }

  export type companyCreateWithoutCompanydepartmentInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    industries?: industriesCreateNestedOneWithoutCompanyInput
    noofemployees?: noofemployeesCreateNestedOneWithoutCompanyInput
    companyuser?: companyuserCreateNestedManyWithoutCompanyInput
    job?: jobCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutCompanydepartmentInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
    NoOfEmployeeID?: string | null
    companyuser?: companyuserUncheckedCreateNestedManyWithoutCompanyInput
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutCompanydepartmentInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutCompanydepartmentInput, companyUncheckedCreateWithoutCompanydepartmentInput>
  }

  export type departmentsCreateWithoutCompanydepartmentInput = {
    DepartmentID?: string
    DepartmentName: string
  }

  export type departmentsUncheckedCreateWithoutCompanydepartmentInput = {
    DepartmentID?: string
    DepartmentName: string
  }

  export type departmentsCreateOrConnectWithoutCompanydepartmentInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutCompanydepartmentInput, departmentsUncheckedCreateWithoutCompanydepartmentInput>
  }

  export type companyUpsertWithoutCompanydepartmentInput = {
    update: XOR<companyUpdateWithoutCompanydepartmentInput, companyUncheckedUpdateWithoutCompanydepartmentInput>
    create: XOR<companyCreateWithoutCompanydepartmentInput, companyUncheckedCreateWithoutCompanydepartmentInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutCompanydepartmentInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutCompanydepartmentInput, companyUncheckedUpdateWithoutCompanydepartmentInput>
  }

  export type companyUpdateWithoutCompanydepartmentInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    industries?: industriesUpdateOneWithoutCompanyNestedInput
    noofemployees?: noofemployeesUpdateOneWithoutCompanyNestedInput
    companyuser?: companyuserUpdateManyWithoutCompanyNestedInput
    job?: jobUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutCompanydepartmentInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
    companyuser?: companyuserUncheckedUpdateManyWithoutCompanyNestedInput
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type departmentsUpsertWithoutCompanydepartmentInput = {
    update: XOR<departmentsUpdateWithoutCompanydepartmentInput, departmentsUncheckedUpdateWithoutCompanydepartmentInput>
    create: XOR<departmentsCreateWithoutCompanydepartmentInput, departmentsUncheckedCreateWithoutCompanydepartmentInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutCompanydepartmentInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutCompanydepartmentInput, departmentsUncheckedUpdateWithoutCompanydepartmentInput>
  }

  export type departmentsUpdateWithoutCompanydepartmentInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentName?: StringFieldUpdateOperationsInput | string
  }

  export type departmentsUncheckedUpdateWithoutCompanydepartmentInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentName?: StringFieldUpdateOperationsInput | string
  }

  export type companyCreateWithoutCompanyuserInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    industries?: industriesCreateNestedOneWithoutCompanyInput
    noofemployees?: noofemployeesCreateNestedOneWithoutCompanyInput
    companydepartment?: companydepartmentCreateNestedManyWithoutCompanyInput
    job?: jobCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutCompanyuserInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
    NoOfEmployeeID?: string | null
    companydepartment?: companydepartmentUncheckedCreateNestedManyWithoutCompanyInput
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutCompanyuserInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutCompanyuserInput, companyUncheckedCreateWithoutCompanyuserInput>
  }

  export type companyUpsertWithoutCompanyuserInput = {
    update: XOR<companyUpdateWithoutCompanyuserInput, companyUncheckedUpdateWithoutCompanyuserInput>
    create: XOR<companyCreateWithoutCompanyuserInput, companyUncheckedCreateWithoutCompanyuserInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutCompanyuserInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutCompanyuserInput, companyUncheckedUpdateWithoutCompanyuserInput>
  }

  export type companyUpdateWithoutCompanyuserInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    industries?: industriesUpdateOneWithoutCompanyNestedInput
    noofemployees?: noofemployeesUpdateOneWithoutCompanyNestedInput
    companydepartment?: companydepartmentUpdateManyWithoutCompanyNestedInput
    job?: jobUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutCompanyuserInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
    companydepartment?: companydepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companydepartmentCreateWithoutDepartmentsInput = {
    CompanyDepartmentID?: string
    company?: companyCreateNestedOneWithoutCompanydepartmentInput
  }

  export type companydepartmentUncheckedCreateWithoutDepartmentsInput = {
    CompanyDepartmentID?: string
    CompanyId?: string | null
  }

  export type companydepartmentCreateOrConnectWithoutDepartmentsInput = {
    where: companydepartmentWhereUniqueInput
    create: XOR<companydepartmentCreateWithoutDepartmentsInput, companydepartmentUncheckedCreateWithoutDepartmentsInput>
  }

  export type companydepartmentCreateManyDepartmentsInputEnvelope = {
    data: companydepartmentCreateManyDepartmentsInput | companydepartmentCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type companydepartmentUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: companydepartmentWhereUniqueInput
    update: XOR<companydepartmentUpdateWithoutDepartmentsInput, companydepartmentUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<companydepartmentCreateWithoutDepartmentsInput, companydepartmentUncheckedCreateWithoutDepartmentsInput>
  }

  export type companydepartmentUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: companydepartmentWhereUniqueInput
    data: XOR<companydepartmentUpdateWithoutDepartmentsInput, companydepartmentUncheckedUpdateWithoutDepartmentsInput>
  }

  export type companydepartmentUpdateManyWithWhereWithoutDepartmentsInput = {
    where: companydepartmentScalarWhereInput
    data: XOR<companydepartmentUpdateManyMutationInput, companydepartmentUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type companyCreateWithoutIndustriesInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    noofemployees?: noofemployeesCreateNestedOneWithoutCompanyInput
    companydepartment?: companydepartmentCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserCreateNestedManyWithoutCompanyInput
    job?: jobCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutIndustriesInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    NoOfEmployeeID?: string | null
    companydepartment?: companydepartmentUncheckedCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserUncheckedCreateNestedManyWithoutCompanyInput
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutIndustriesInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutIndustriesInput, companyUncheckedCreateWithoutIndustriesInput>
  }

  export type companyCreateManyIndustriesInputEnvelope = {
    data: companyCreateManyIndustriesInput | companyCreateManyIndustriesInput[]
    skipDuplicates?: boolean
  }

  export type companyUpsertWithWhereUniqueWithoutIndustriesInput = {
    where: companyWhereUniqueInput
    update: XOR<companyUpdateWithoutIndustriesInput, companyUncheckedUpdateWithoutIndustriesInput>
    create: XOR<companyCreateWithoutIndustriesInput, companyUncheckedCreateWithoutIndustriesInput>
  }

  export type companyUpdateWithWhereUniqueWithoutIndustriesInput = {
    where: companyWhereUniqueInput
    data: XOR<companyUpdateWithoutIndustriesInput, companyUncheckedUpdateWithoutIndustriesInput>
  }

  export type companyUpdateManyWithWhereWithoutIndustriesInput = {
    where: companyScalarWhereInput
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutIndustriesInput>
  }

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[]
    OR?: companyScalarWhereInput[]
    NOT?: companyScalarWhereInput | companyScalarWhereInput[]
    CompanyId?: UuidFilter<"company"> | string
    CompanyName?: StringFilter<"company"> | string
    CompanyDescription?: StringFilter<"company"> | string
    CompanyLogo?: StringNullableFilter<"company"> | string | null
    CompanyLocation?: StringFilter<"company"> | string
    IndustryID?: UuidNullableFilter<"company"> | string | null
    NoOfEmployeeID?: UuidNullableFilter<"company"> | string | null
  }

  export type companyCreateWithoutJobInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    industries?: industriesCreateNestedOneWithoutCompanyInput
    noofemployees?: noofemployeesCreateNestedOneWithoutCompanyInput
    companydepartment?: companydepartmentCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutJobInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
    NoOfEmployeeID?: string | null
    companydepartment?: companydepartmentUncheckedCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutJobInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>
  }

  export type companyUpsertWithoutJobInput = {
    update: XOR<companyUpdateWithoutJobInput, companyUncheckedUpdateWithoutJobInput>
    create: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutJobInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutJobInput, companyUncheckedUpdateWithoutJobInput>
  }

  export type companyUpdateWithoutJobInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    industries?: industriesUpdateOneWithoutCompanyNestedInput
    noofemployees?: noofemployeesUpdateOneWithoutCompanyNestedInput
    companydepartment?: companydepartmentUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutJobInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
    companydepartment?: companydepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateWithoutNoofemployeesInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    industries?: industriesCreateNestedOneWithoutCompanyInput
    companydepartment?: companydepartmentCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserCreateNestedManyWithoutCompanyInput
    job?: jobCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutNoofemployeesInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
    companydepartment?: companydepartmentUncheckedCreateNestedManyWithoutCompanyInput
    companyuser?: companyuserUncheckedCreateNestedManyWithoutCompanyInput
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutNoofemployeesInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutNoofemployeesInput, companyUncheckedCreateWithoutNoofemployeesInput>
  }

  export type companyCreateManyNoofemployeesInputEnvelope = {
    data: companyCreateManyNoofemployeesInput | companyCreateManyNoofemployeesInput[]
    skipDuplicates?: boolean
  }

  export type companyUpsertWithWhereUniqueWithoutNoofemployeesInput = {
    where: companyWhereUniqueInput
    update: XOR<companyUpdateWithoutNoofemployeesInput, companyUncheckedUpdateWithoutNoofemployeesInput>
    create: XOR<companyCreateWithoutNoofemployeesInput, companyUncheckedCreateWithoutNoofemployeesInput>
  }

  export type companyUpdateWithWhereUniqueWithoutNoofemployeesInput = {
    where: companyWhereUniqueInput
    data: XOR<companyUpdateWithoutNoofemployeesInput, companyUncheckedUpdateWithoutNoofemployeesInput>
  }

  export type companyUpdateManyWithWhereWithoutNoofemployeesInput = {
    where: companyScalarWhereInput
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutNoofemployeesInput>
  }

  export type companydepartmentCreateManyCompanyInput = {
    CompanyDepartmentID?: string
    DepartmentId?: string | null
  }

  export type companyuserCreateManyCompanyInput = {
    CompanyUserId?: string
    FirstName?: string | null
    LastName?: string | null
    Username?: string | null
    Email?: string | null
    Password?: string | null
    UserMobile?: string | null
    Status?: string | null
    OTP?: string | null
    LastOTPRequestedAt?: Date | string | null
    CompanyCreatedDate?: Date | string | null
    LastUpdatedDate?: Date | string | null
  }

  export type jobCreateManyCompanyInput = {
    id?: string
    name?: string | null
    position: string
    postedDate: Date | string
    description: string
    requirements?: string | null
    image?: string | null
    type: string
  }

  export type companydepartmentUpdateWithoutCompanyInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    departments?: departmentsUpdateOneWithoutCompanydepartmentNestedInput
  }

  export type companydepartmentUncheckedUpdateWithoutCompanyInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companydepartmentUncheckedUpdateManyWithoutCompanyInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    DepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companyuserUpdateWithoutCompanyInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyuserUncheckedUpdateWithoutCompanyInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyuserUncheckedUpdateManyWithoutCompanyInput = {
    CompanyUserId?: StringFieldUpdateOperationsInput | string
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    UserMobile?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    LastOTPRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyCreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastUpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type jobUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type jobUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type companydepartmentCreateManyDepartmentsInput = {
    CompanyDepartmentID?: string
    CompanyId?: string | null
  }

  export type companydepartmentUpdateWithoutDepartmentsInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateOneWithoutCompanydepartmentNestedInput
  }

  export type companydepartmentUncheckedUpdateWithoutDepartmentsInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companydepartmentUncheckedUpdateManyWithoutDepartmentsInput = {
    CompanyDepartmentID?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companyCreateManyIndustriesInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    NoOfEmployeeID?: string | null
  }

  export type companyUpdateWithoutIndustriesInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    noofemployees?: noofemployeesUpdateOneWithoutCompanyNestedInput
    companydepartment?: companydepartmentUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUpdateManyWithoutCompanyNestedInput
    job?: jobUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutIndustriesInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
    companydepartment?: companydepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUncheckedUpdateManyWithoutCompanyNestedInput
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateManyWithoutIndustriesInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    NoOfEmployeeID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companyCreateManyNoofemployeesInput = {
    CompanyId?: string
    CompanyName: string
    CompanyDescription: string
    CompanyLogo?: string | null
    CompanyLocation: string
    IndustryID?: string | null
  }

  export type companyUpdateWithoutNoofemployeesInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    industries?: industriesUpdateOneWithoutCompanyNestedInput
    companydepartment?: companydepartmentUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUpdateManyWithoutCompanyNestedInput
    job?: jobUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutNoofemployeesInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
    companydepartment?: companydepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    companyuser?: companyuserUncheckedUpdateManyWithoutCompanyNestedInput
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateManyWithoutNoofemployeesInput = {
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    CompanyDescription?: StringFieldUpdateOperationsInput | string
    CompanyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyLocation?: StringFieldUpdateOperationsInput | string
    IndustryID?: NullableStringFieldUpdateOperationsInput | string | null
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