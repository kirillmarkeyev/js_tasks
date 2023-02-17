/*
Найти сумму элементов многомерного массива (любым способом)
*/

const array1 = [1, 2, [2, 5, 3, [32, 5], 3], 7, 4, 1, [1, [1, 2, [1, 2]]]];

const getSumOfNestedArray = (array) => {
  let result = 0;
  const innerSum = (arr) => {
    arr.forEach((el) => {
      if (!Array.isArray(el)) {
        result += el;
      } else {
        innerSum(el); // используем рекурсию для вложенных массивов
      }
    });
    return result;
  };
  return innerSum(array);
};

console.log(getSumOfNestedArray(array1)); // => 72
