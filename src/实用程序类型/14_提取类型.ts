/**
 * ThisParameterType<Type>
 *
 * 提取的类型，这个参数的函数类型，或未知如果函数类型没有this参数。
 *
 * type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown
 */

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
