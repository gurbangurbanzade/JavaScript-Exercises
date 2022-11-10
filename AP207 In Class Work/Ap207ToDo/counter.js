let btn = document.querySelector(".btn");
let number = document.querySelector(".number");
// let count = 0;
// btn.addEventListener("click", function () {
//   count++;
//   number.innerHTML = count;
// });

// let btn = document.getElementsByClassName("btn");
// let count = document.getElementsByClassName("number");
let m = 0;
btn.addEventListener("click", function () {
  m++;
  console.log("hello");
  number.innerText = m;
});
