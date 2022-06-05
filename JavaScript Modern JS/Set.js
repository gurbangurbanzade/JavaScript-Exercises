const numbers = new Set();
// const numbers = new Set([1, 2, 3]);
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(3);
numbers.add("4");

// const arr = [...numbers];
numbers.delete(2);
console.log(numbers.has(2));

// numbers.clear();
console.log(numbers);
for (let x of numbers) {
  console.log(x);
  console.log(typeof x);
}
// console.log(arr);
