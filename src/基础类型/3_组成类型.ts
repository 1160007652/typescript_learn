type MyBool = true | false;
type WindowsStates = "open" | "closed" | "minimized";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}

/**
 * 获取传人数据的长度；
 *
 * @param obj 数字或者字符串
 */
function getLength2(obj: string | number) {
  // 根据定义的类型 来看，传人的数据可能是字符串、也可能是数字；所以需要在使用时进行类型判断
  if (typeof obj === "string") {
    return obj.length;
  } else {
    return String(obj).length;
  }
}

getLength2(1);
getLength2("hello");
