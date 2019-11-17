import _ from "lodash";
// ================================ FOR EACH ================================

console.time('for each        ');
[1, 2, 3, 4, 5].forEach(number => number * 10);
console.timeEnd('for each        ');

// ================================ FOR... OF ================================

console.time('for... of       ');
for (let number of [1, 2, 3, 4, 5]) {
  number * 10;
}
console.timeEnd('for... of       ');

// ============================ FOR EACH (LODASH) ============================

console.time('lodash forEach  ');
_.forEach([1, 2, 3, 4, 5], (number: number) => number * 10);
console.timeEnd('lodash forEach  ');

// =========================== FOR EACH 2 (LODASH) ===========================

console.time('lodash forEach2 ');
_([1, 2, 3, 4, 5]).forEach((number: number) => number * 10);
console.timeEnd('lodash forEach2 ');
