import { Mailable } from "./Mailable";

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

export { FutureMailable };
