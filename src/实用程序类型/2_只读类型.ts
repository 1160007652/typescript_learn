/**
 * Readonly: 只读类型
 */

interface Todo {
  title: string;
}

/**
 * 一次性指定所有的属性是只读类型
 */
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello"; // 无法分配到 "title" ，因为它是只读属性。

/**
 * 单独指定某一个属性是 只读类型
 */
interface Todo1 {
  readonly title: string;
}

const todo1: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo1.title = "Hello"; // 无法分配到 "title" ，因为它是只读属性。
