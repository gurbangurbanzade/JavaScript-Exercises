let taskList = [
  // { id: 1, taskName: "Task 1", durum: "completed" },
  // { id: 2, taskName: "Task 2", durum: "pending" },
  // { id: 3, taskName: "Task 3", durum: "completed" },
  // { id: 4, taskName: "Task 4", durum: "pending" },
];
if (localStorage.getItem("taskList") !== null) {
  taskList = JSON.parse(localStorage.getItem("taskList"));
}
let editId;
let isEditTask = false;
const taskInput = document.querySelector("#txtTaskName");
let btnClear = document.querySelector("#btnClear");
const filters = document.querySelectorAll(".filters span");

displayTasks("all");
function displayTasks(filter) {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  if (taskList.length == 0) {
    ul.innerHTML = "<p class='p-3 m-0' >Task List is Empty</p>";
  } else {
    for (let index of taskList) {
      let completed = index.durum == "completed" ? "checked" : "";

      if (filter == index.durum || filter == "all") {
        let li = `
              <li class="task list-group-item">
                <div class="form-check">
                  <input
                    type="checkbox"
                    onclick="updateStatus(this)"
                    name=""
                    id="${index.id}"
                    class="form-check-input" ${completed}
                  />
                  <label for="${index.id}" class="form-check-label ${completed}">${index.taskName}</label>
                </div>
                <div class="dropdown">
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   <i class="fa-solid fa-ellipsis"></i>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onclick="deleteTask(${index.id})"class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Delete</a></li>
                    <li><a onclick='editTask(${index.id},"${index.taskName}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
                   
                  </ul>
                </div>
              </li>`;
        ul.insertAdjacentHTML("beforeend", li);
      }
    }
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

for (let span of filters) {
  span.addEventListener("click", function () {
    document.querySelector("span.active").classList.remove("active");
    span.classList.add("active");
    displayTasks(span.id);
  });
}

function newTask(event) {
  if (taskInput.value == "") {
    alert("Zəhmət olmasa tapşırıq əlavə edin");
  } else {
    if (!isEditTask) {
      // Add
      taskList.push({
        id: taskList.length + 1,
        taskName: taskInput.value,
        durum: "pending",
      });
    } else {
      // rename
      for (let task of taskList) {
        if (task.id == editId) {
          task.taskName = taskInput.value;
        }
      }
      isEditTask = false;
    }

    taskInput.value = "";
    displayTasks(document.querySelector("span.active").id);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }
  event.preventDefault();
}
function deleteTask(id) {
  let deletedId;
  deletedId = taskList.findIndex((task) => task.id == id);
  taskList.splice(deletedId, 1);
  displayTasks(document.querySelector("span.active").id);
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = taskName;
  taskInput.focus();
  taskInput.classList.add("active");
}

btnClear.addEventListener("click", function () {
  taskList.splice(0, taskList.length);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  displayTasks();
});

function updateStatus(selectedTask) {
  let label = selectedTask.nextElementSibling;
  let durum;
  if (selectedTask.checked) {
    label.classList.add("checked");
    durum = "completed";
  } else {
    label.classList.remove("checked");
    durum = "pending";
  }
  for (let task of taskList) {
    if (task.id == selectedTask.id) {
      task.durum = durum;
    }
  }
  displayTasks(document.querySelector("span.active").id);
  localStorage.setItem("taskList", JSON.stringify(taskList));
}
