const students = new Map();
students.set(1, "qurban");
students.set("123", "kenan");
students.set(true, "pamir");

console.log(students.get(1));
console.log(students.get("123"));
console.log(students.get(true));

let result;
result = students.size;
result = students.has(1);
result = students.has(2);

// students.delete(1);
// students.clear();

console.log(result);
console.log(students);

for (let x of students.keys()) {
  console.log(x);
}

for (let x of students.values()) {
  console.log(x);
}

for (let x of students.entries()) {
  console.log(x);
}

for (let [key, values] of students.entries()) {
  let z = [key, values];
  console.log(key, values);
  console.log(typeof z);
}
