function* createNaturalNumberGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
}

const generator = createNaturalNumberGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
