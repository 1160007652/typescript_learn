/**
 * InstanceType<Type>
 *
 * 在中构造一个由构造函数的实例类型组成的类型Type
 *
 * type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any
 */

class C {
  x = 0;
  y = 0;
}

type T08 = InstanceType<typeof C>;
//    ^ = type T0 = C
type T18 = InstanceType<any>;
//    ^ = type T1 = any
type T28 = InstanceType<never>;
//    ^ = type T2 = never
type T38 = InstanceType<string>;
//   Type 'string' does not satisfy the constraint 'new (...args: any) => any'.
//    ^ = type T3 = any
type T48 = InstanceType<Function>;
//   Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
//    ^ = type T4 = any
