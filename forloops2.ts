import { createBenchmark } from "./benchmark";
import _ from "lodash";

const benchmark = createBenchmark('For Loops!');

let timeForEach = benchmark('for each        ');
while (timeForEach()) {
  [0, 1, 2, 3, 4, 5].forEach(number => number * 10);
}

let timeForOf = benchmark('for... of       ');
while (timeForOf()) {
  for (let number of [0, 1, 2, 3, 4, 5]) {
    number * 10;
  }
}

let timeLodashForEach = benchmark('lodash forEach  ');
while (timeLodashForEach()) {
  _.forEach([0, 1, 2, 3, 4, 5], (number: number) => number * 10);
}

let timeLodashForEach2 = benchmark('lodash forEach2 ');
while (timeLodashForEach2()) {
  _([0, 1, 2, 3, 4, 5]).forEach((number: number) => number * 10);
}

benchmark.report();