/**
 * ConstructorParameters<Type>: 构造参数类型
 *
 * 从构造函数类型的类型构造元组或数组类型。它将生成具有所有参数类型的元组类型（never如果Type不是函数，则为类型）。
 *
 * type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never
 */

type T04 = ConstructorParameters<ErrorConstructor>;
//    ^ = type T0 = [message?: string]
type T14 = ConstructorParameters<FunctionConstructor>;
//    ^ = type T1 = string[]
type T24 = ConstructorParameters<RegExpConstructor>;
//    ^ = type T2 = [pattern: string | RegExp, flags?: string]
type T34 = ConstructorParameters<any>;
//    ^ = type T3 = unknown[]

type T44 = ConstructorParameters<string>;
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
//   Type 'Function' provides no match for the signature 'new (...args: any): any'.
//    ^ = type T4 = never
