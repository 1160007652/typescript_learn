/**
 * ThisType<Type>
 *
 * 该实用程序不返回转换后的类型。相反，它用作上下文this类型的标记。请注意，--noImplicitThis必须启用该标志才能使用此实用程序
 *
 * interface ThisType<T>
 *
 *
 * 在上面的例子中，methods在参数对象makeObject具有上下文类型，其包括ThisType<D & M>和因此的类型此内的方法methods目的是{ x: number, y: number } & { moveBy(dx: number, dy: number): number }。
 * 请注意，methods属性的类型如何同时成为this方法中类型的推断目标和来源。
 *
 * 该ThisType<T>标记接口是简单地宣布一个空的接口lib.d.ts。除了在对象文字的上下文类型中被识别之外，该接口的作用类似于任何空接口。
 */

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj1 = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj1.x = 10;
obj1.y = 20;
obj1.moveBy(5, 5);
