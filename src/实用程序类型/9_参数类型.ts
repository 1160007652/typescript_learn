/**
 * Parameters: 参数类型
 *
 * type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
 *
 */

declare function f1(arg: { a: number; b: string }): void;

type T03 = Parameters<() => string>;
//    ^ = type T0 = []
type T13 = Parameters<(s: string) => void>;
//    ^ = type T1 = [s: string]
type T23 = Parameters<<T>(arg: T) => T>;
//    ^ = type T2 = [arg: unknown]
type T33 = Parameters<typeof f1>;
//    ^ = type T3 = [arg: {
//        a: number;
//        b: string;
//    }]
type T43 = Parameters<any>;
//    ^ = type T4 = unknown[]
type T53 = Parameters<never>;
//    ^ = type T5 = never
type T63 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
//    ^ = type T6 = never
type T73 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
//    ^ = type T7 = never
