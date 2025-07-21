class Parent {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
  getId(): number {
    return this.id;
  }
}

class Child11 extends Parent {
  name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export { Child11, Parent };
