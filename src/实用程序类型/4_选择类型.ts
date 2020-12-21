/**
 * Pick: 选择类型
 *
 * 通过Keys从中选择属性集来构造类型Type
 *
 * type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Pick<Todo, "title" | "completed">;

const todo: TodoPreview2 = {
  title: "Clean room",
  completed: false,
};
