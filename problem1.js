var uniqueInOrder = function (iterable) {
  const array = [];
  const charArray = Array.from(iterable);

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i - 1] != charArray[i]) {
      array.push(charArray[i]);
    } else {
      continue;
    }
  }
  return array;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
