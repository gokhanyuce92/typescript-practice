import { Printable } from "./Printable";
import { Scanable } from "./Scanable";

interface MultifunctionalDevice extends Printable, Scanable {
  copy: () => void;
}

export { MultifunctionalDevice };
