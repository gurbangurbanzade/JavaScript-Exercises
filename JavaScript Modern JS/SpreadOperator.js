// let msj = ["menim", "adim", "Qurban"];
// let soz = "";
// for (let x of msj) {
//   soz += x + " ";
// }
// console.log(soz);
// console.log(...msj);

// const arr1 = ["bir", "iki"];
// const arr2 = ["uc", "dord"];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

const say1 = [1, 2, 3];
// const say2 = say1;
const say2 = [...say1];
say2[0] = 10;

console.log(say1, say2);

const user = {
  username: "Qurban",
  email: "info@mail.com",
};
const address = {
  username: "Kenan",
  city: "Beylagan",
};

console.log({ ...user, ...address });

function cem(...args) {
  let toplam = 0;
  for (let x of args) {
    toplam += x;
  }
  return toplam;
}

console.log(cem(1, 2, 3));
console.log(cem(1, 2, 3, 20, 45));
