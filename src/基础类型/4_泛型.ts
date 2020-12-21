type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const _stringArray: StringArray = ["hello world"];
const _numberArray: NumberArray = [12];
const _objectWithNameArray: ObjectWithNameArray = [{ name: "hello" }];

/**
 * 泛型 出场,
 *
 * 解决问题： 不需要定义太多的类型，由使用者决定产出类型
 */

type Type<T> = T;

const _stringArrayT: [Type<string>] = ["hello world"];
const _numberArrayT: [Type<number>] = [12];
const _objectWithNameArrayT: [Type<{ name: string }>] = [{ name: "hello" }];

interface Backpack<T> {
  add: (obj: T) => void;
  get: () => void;
}

declare const backpack: Backpack<string>;

backpack.add("hello world");
backpack.get();
