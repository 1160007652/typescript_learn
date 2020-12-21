/**
 * ReturnType<Type>
 *
 * 构造一个由函数的返回类型组成的类型Type。
 *
 * type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
 *
 */

declare function f1(): { a: number; b: string };

type T05 = ReturnType<() => string>;
//    ^ = type T0 = string
type T15 = ReturnType<(s: string) => void>;
//    ^ = type T1 = void
type T25 = ReturnType<<T>() => T>;
//    ^ = type T2 = unknown
type T35 = ReturnType<<T extends U, U extends number[]>() => T>;
//    ^ = type T3 = number[]
type T45 = ReturnType<typeof f1>;
//    ^ = type T4 = {
//        a: number;
//        b: string;
//    }
type T55 = ReturnType<any>;
//    ^ = type T5 = any
type T65 = ReturnType<never>;
//    ^ = type T6 = never
type T75 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
//    ^ = type T7 = any
type T85 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
//    ^ = type T8 = any
