function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a + b;
    let next_b = a + b;
    a = b;
    b = next_b;
  }
}

const generator = createFibonacciGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
