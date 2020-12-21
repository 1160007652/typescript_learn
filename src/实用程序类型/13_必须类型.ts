/**
 * Required<Type>
 *
 * 构造一个类型，该类型由Tset的所有属性设置为required。与之相反Partial
 *
 * type Required<T> = { [P in keyof T]-?: T[P]; }
 *
 */

interface Props {
  a?: number;
  b?: number;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 }; // 类型 "{ a: number; }" 中缺少属性 "b"，但类型 "Required<Props>" 中需要该属性。
