import { Driveable } from "../interfaces/Driveable";

export class Bus implements Driveable {
  drive(): void {
    console.log("The bus is driving");
  }
}
