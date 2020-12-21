/**
 * Exclude: 排除类型
 *
 * type Exclude<T, U> = T extends U ? never : T
 *
 * T: 数据源
 * U: 待排除的类型
 */
type T07 = Exclude<"a" | "b" | "c", "a">;
//    ^ = type T0 = "b" | "c"
type T17 = Exclude<"a" | "b" | "c", "a" | "b">;
//    ^ = type T1 = "c"
type T27 = Exclude<string | number | (() => void), Function>;
