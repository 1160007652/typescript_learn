/**
 * Partial : 可选链，可选属性，只要比配到的数据是定义类型的子集即可通过校验；
 *
 * Partial<T>   <===>  { [P in keyof T]?: T[P]; }
 */

interface Todo {
  title: string;
  description: string;
}

// type Partial<T> = { [P in keyof T]?: T[P]; }
function updateTodo1(
  todo: Todo,
  fieldsToUpdate: { [P in keyof Todo]?: Todo[P] }
) {
  return { ...todo, ...fieldsToUpdate };
}

// Partial 简写
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "学习TypeScript",
  description: "ts - 全称 TypeScript, 用的不好叫 anyScript",
};

let todo2 = updateTodo(todo1, {
  description: "ts - 全称 TypeScript, 用的不好叫 anyScript",
});

todo2 = updateTodo1(todo1, {
  description: "ts - 全称 TypeScript, 用的不好叫 anyScript",
});
