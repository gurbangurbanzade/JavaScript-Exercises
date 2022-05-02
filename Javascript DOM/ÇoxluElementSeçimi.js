let result;
result = document.getElementsByClassName("task")[1];
result = document.getElementsByClassName("task");
let taskList;
// taskList = document.getElementsByClassName("task");
// ul = document.getElementById("task-list");
// taskList = ul.getElementsByTagName("li");
// taskList = document.querySelectorAll("li");
taskList = document.querySelectorAll("#task-list li");

console.log(taskList);
// for (let i = 0; i < taskList.length; i++) {
//   console.log(taskList[i]);
// }

for (task of taskList) {
  task.style.color = "red";
  console.log(task);
  task.innerText = "Salamlar";
}

console.log(result);
