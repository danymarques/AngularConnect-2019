import _ from "lodash";
const COUNT = Number.parseInt(process.argv[2] || "10");
console.log(`Running ${COUNT} iterations.`);

function timeForEach() {
  [0, 1, 2, 3, 4, 5].forEach(x => x * 10);
}

function timeForOf() {
  for (let number of [0, 1, 2, 3, 4, 5]) {
    number * 10;
  }
}

function timeLodashForEach() {
  _.forEach([0, 1, 2, 3, 4, 5], (number: number) => number * 10);
}

function timeLodashForEach2() {
  _([0, 1, 2, 3, 4, 5]).forEach((number: number) => number * 10);
}

benchmark('for each        ', timeForEach);
benchmark('for... of       ', timeForOf);
benchmark('lodash forEach  ', timeLodashForEach);
benchmark('lodash forEach2 ', timeLodashForEach2);

function benchmark(name: string, fn: () => void) {
  console.log('Starting:', name, '...');
  const start = Date.now();
  for (let i = 0; i < COUNT; i++) {
    fn();
  }
  const duration = Date.now() - start;
  console.log('         ', name, Number(duration / COUNT * 1000 * 1000).toFixed(3), 'us');
}