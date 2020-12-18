/**
 * 类型交集
 *
 * 所传递的数据类型，可以是交集的类型
 */

type Combined = { a: number } & { b: string };

const _combined: Combined = { a: 1, b: "hello" };

/**
 * 类型 a 转化为了  a number & string
 */

type Conflicting = { a: number } & { a: string };

const _conflicting1 = { a: 2 };
const _conflicting2 = { a: "Hello" };
