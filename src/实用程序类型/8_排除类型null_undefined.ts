/**
 * NonNullable: 排除null和undefined, 得到新类型
 *
 * type NonNullable<T> = T extends null ? never : T
 *
 * T: 数据源
 *
 * 通过从Type中排除null和undefined来构造一个类型
 */

type T02 = NonNullable<string | number | undefined>;
//    ^ = type T0 = string | number
type T12 = NonNullable<string[] | null | undefined>;
//    ^ = type T1 = string[]
