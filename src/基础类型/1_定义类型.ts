

/**
 * 定义 水果 类型
 * 
 * 名字：只能使用：苹果、香蕉、梨
 * 颜色：字符串类型
 */

type fruit = {
    name: "apple"|"banana"|"pear";
    color: string
}

const user: fruit = {
    name: "banana",
    color: "yellow"
}