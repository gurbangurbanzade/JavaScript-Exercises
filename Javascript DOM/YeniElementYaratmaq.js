let result;
let taskList = [
  { id: 1, taskName: "Task 1" },
  { id: 2, taskName: "Task 2" },
  { id: 3, taskName: "Task 3" },
  { id: 4, taskName: "Task 4" },
];
ul = document.getElementById("task-list");
//let count = ul.children.length;
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

//ul.insertAdjacentHTML("beforeend", li);

console.log(ul);
console.log(result);
