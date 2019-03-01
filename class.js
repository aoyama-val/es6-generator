class NaturalNumberGenerator {
  constructor() {
    this.n = 0;
  }

  get() {
    this.n += 1;
    return this.n;
  }
}

const g = new NaturalNumberGenerator();
console.log(g.get());
console.log(g.get());
console.log(g.get());
console.log(g.get());
