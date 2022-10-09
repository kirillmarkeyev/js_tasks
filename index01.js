/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

/*
function chainer(/ ... /) {}

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const pow_2 = (x) => x ** 2;
const add_3 = (x) => sum(x, 3);
const mul_by_10 = (x) => mul(x, 10);

chainer принимает функции в неизвестном заранее количестве
const chain = chainer(sum, pow_2, add_3, mul_by_10);

вызов результата работы этой функции (chain) эквивалентен вызову функций из цепочки
chain(1, 2)  <=> mul_by_10(add_3(pow_2(sum(1, 2))))
*/

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const pow2 = (x) => x ** 2;
const add3 = (x) => sum(x, 3);
const mulBy10 = (x) => mul(x, 10);

const chainer = (...functions) => functions;

const chain = chainer(sum, pow2, add3, mulBy10);

const result = (a, b) => {
  const [firstFunc, ...restFuncs] = chain;
  const firstResult = firstFunc(a, b);
  return restFuncs
    .reduce((acc, func) => {
      acc = func(acc);
      return acc;
    }, firstResult);
};

console.log(result(1, 2)); // 1 + 2 = 3; 3 ** 2 = 9; 9 + 3 = 12; 12 * 10 = 120
