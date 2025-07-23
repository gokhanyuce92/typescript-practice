import { MultifunctionalDevice } from "./MultifunctionalDevice";

export class Printer implements MultifunctionalDevice {
  copy(): void {
    console.log("Copying...");
  }
  print(): void {
    console.log("Printing...");
  }
  scan(): void {
    console.log("Scanning...");
  }
}
