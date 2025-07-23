import IPoint from "../interfaces/IPoint";

export class Point {
  addPoints(p1: IPoint, p2: IPoint): IPoint {
    let x = p1.x + p2.x;
    let y = p1.y + p2.y;

    return { x: x, y: y };
  }
}
