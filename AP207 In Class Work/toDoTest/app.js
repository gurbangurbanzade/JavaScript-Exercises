let result;
result = document.querySelector(".head");
result.style.backgroundColor = "yellow";
result.style.color = "red";
result = document.querySelector(".text");
result.innerText = "<p>Sagol</p>";
// result.innerHTML = "<p>Sagol</p>";

console.log(result);

let taskList = document.querySelector(".taskList");
let li = document.createElement("li");
li.innerHTML = "task1";
taskList.appendChild(li);

let btn = document.querySelector(".btn");
let input = document.querySelector(".input");

btn.addEventListener("click", addTask);

function addTask() {
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  let p = document.createElement("p");
  taskList.appendChild(li);
  li.appendChild(p);

  p.innerHTML = input.value;
  li.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Delete";

  input.value = "";
}

// addTask();
// addTask();
// addTask();
// addTask();

// function valueView() {
//   console.log(input.value);
// }
