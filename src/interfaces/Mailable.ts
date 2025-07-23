interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

export { Mailable };
