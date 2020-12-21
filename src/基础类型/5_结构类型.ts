interface Point {
  x: number;
  y: number;
}
function printPoint(p: Point) {
  console.log(`Point => (${p.x}, ${p.y})`);
}

const point1 = { x: 21, y: 21 };
printPoint(point1); // 通过类型校验

const point2 = { x: 21, y: 21, z: 21 };
printPoint(point2); // 通过类型校验, 用过原因: 定义的类型 属于 传入类型的子集

const point3 = { z: 21 };
printPoint(point3); // 未通过类型校验，原因是，缺少 定义的 类型

// ---------

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const virtualPoint = new VirtualPoint(21, 21);

printPoint(virtualPoint); // 通过类型校验
