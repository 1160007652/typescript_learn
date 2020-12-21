/**
 * Extract: 排除类型
 *
 * type Extract<T, U> = T extends U ? T : never
 *
 * T: 数据源
 * U: 待提取的类型
 */

type T01 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^ = type T0 = "a"
type T11 = Extract<string | number | (() => void), Function>;
//    ^ = type T1 = () => void
