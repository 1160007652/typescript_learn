/**
 * Omit: 省略类型
 *
 * 通过从中选择所有属性Type然后删除来构造一个类型Keys
 *
 * type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview1 = Omit<Todo, "description">;

const todo1: TodoPreview1 = {
  title: "Clean room",
  completed: false,
};
