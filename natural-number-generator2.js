function* createNaturalNumberGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
}

const generator = createNaturalNumberGenerator();
for (let n of generator) {
  console.log(n);
}
