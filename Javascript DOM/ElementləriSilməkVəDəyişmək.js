let result;
let taskList = [
  { id: 1, taskName: "Task 1" },
  { id: 2, taskName: "Task 2" },
  { id: 3, taskName: "Task 3" },
  { id: 4, taskName: "Task 4" },
];
ul = document.getElementById("task-list");

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
                  <label for="${index.id}" class="form-check-label">Task ${index.id}</label>
                </div>
              </li>`;
  ul.insertAdjacentHTML("beforeend", li);
}

// document.querySelector("#task-list").remove();
// document.querySelector("#task-list").children[2].remove();
// document.querySelector("#task-list").children[0].nextElementSibling.remove();
// document.querySelector("#task-list").removeAttribute("class");
document.querySelector("#task-list").setAttribute("class", "aaa");
