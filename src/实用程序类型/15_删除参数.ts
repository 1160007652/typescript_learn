/**
 * OmitThisParameter<Type>
 *
 * this从中删除参数Type。如果Type没有显式声明的this参数，则结果为Type。否则，this将从中创建一个没有参数的新函数类型Type。泛型将被擦除，只有最后的重载签名才会传播到新的函数类型中
 *
 * type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T
 */

function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
