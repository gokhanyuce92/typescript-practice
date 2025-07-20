import { Driveable } from "../interfaces/Driveable";

export class Truck implements Driveable {
  drive(): void {
    console.log("The truck is driving");
  }
}
