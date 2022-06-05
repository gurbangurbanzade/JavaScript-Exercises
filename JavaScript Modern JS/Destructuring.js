// Array destructuring

// let name = ["qurban", "qurbanzade"];
let user = ["qurban", "qurbanzade", "beylegan", "baku"];

// let firstName = name[0];
// let lastName = name[1];
// let [firstName, lastName] = name;
// let [firstName, lastName] = "qurban qurbanzade".split(" ");
let [firstName, lastName, ...adress] = user;

console.log(firstName, lastName, adress);

// Object destructuring
let item = {
  marka: "apple",
  model: "iphone 13",
  qiymet: 2000,
  //satis: true,
};
let { marka, model, qiymet = 0, satis = false } = item;
console.log(marka, model, qiymet, satis);

// function itemGoster(marka, model, qiymet = 0, satis = false) {
//   console.log(marka, model, qiymet, satis);
// }

function itemGoster(obj) {
  console.log(marka, model, qiymet, satis);
}
itemGoster(item);
