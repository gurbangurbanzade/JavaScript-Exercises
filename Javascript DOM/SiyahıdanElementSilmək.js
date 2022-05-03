"use strict";
let taskList = [
  { id: 1, taskName: "Task 1" },
  { id: 2, taskName: "Task 2" },
  { id: 3, taskName: "Task 3" },
  { id: 4, taskName: "Task 4" },
];
displayTasks();
function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  for (let index of taskList) {
    let li = `
              <li class="task list-group-item">
                <div class="form-check">
                  <input
                    type="checkbox"
                    name=""
                    id="${index.id}"
                    class="form-check-input"
                  />
                  <label for="${index.id}" class="form-check-label">${index.taskName}</label>
                </div>
                <div class="dropdown">
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   <i class="fa-solid fa-ellipsis"></i>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onclick="deleteTask(${index.id})"class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Delete</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
                   
                  </ul>
                </div>
              </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document
  .querySelector("#btnAddNewTask")
  .addEventListener("keypress", function () {
    if (event.key == "Enter") {
      document.getElementById("btnAddNewTask").click();
    }
  });
function newTask(event) {
  let taskInput = document.querySelector("#txtTaskName");

  if (taskInput.value == "") {
    alert("Zəhmət olmasa tapşırıq əlavə edin");
  } else {
    taskList.push({
      id: taskList.length + 1,
      taskName: taskInput.value,
    });
    taskInput.value = "";
    displayTasks();
  }
  event.preventDefault();
}
function deleteTask(id) {
  let deletedId;
  deletedId = taskList.findIndex((task) => task.id == id);
  taskList.splice(deletedId, 1);
  displayTasks();
}
