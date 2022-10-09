/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */

/*
Q: Какие в современном JS (ES6+) есть способы на основе неперебираемого объекта
({ from: 0, to: 10 }) получить перебираемый:
такой, по которому можно итерироваться оператором for..of?

A: с помощью метода Symbol.iterator().
Для этого нам необходимо добавить указанный метод в заданный объект.
Вкратце: оператор for … of  при выполнении вызывает метод Symbol.iterator,
который должен вернуть итератор — объект с методом next().
Метод next() возвращает объект вида { done: false, value: ... }
для перехода к следующей итерации или объект вида { done: true }, если цикл завершен.
*/

const obj = {
  from: 1,
  to: 10,
};

// Добавляем итератор в объект obj
obj[Symbol.iterator] = function () {
  let currentElement = this.from;
  const lastElement = this.to;

  return {
    next() {
      if (currentElement <= lastElement) {
        return { done: false, value: currentElement++ };
      }
      return { done: true };
    },
  };
};

for (const number of obj) {
  console.log(number);
}
// => 1 2 3 4 5 6 7 8 9 10
