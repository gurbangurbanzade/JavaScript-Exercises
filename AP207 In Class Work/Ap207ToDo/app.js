let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let tasksList = document.querySelector(".tasksList");

addBtn.addEventListener("click", function () {
  //   console.log(input.value);
  if (input.value == "") {
    alert("Inputun ici bosdur. Zehmet olmasa yazin");
  } else {
    let taskDelete = document.createElement("button");
    taskDelete.className = "taskDeleteBtn";
    taskDelete.innerText = "Delete";
    let task = document.createElement("li"); //  yeni elemet yarat
    task.className = "flex";
    task.innerText = input.value; //  elementin icine valunu yazmaq
    tasksList.append(task); //  elementi append etmek
    task.append(taskDelete); //  elementi append etmek
    input.value = "";
    document
      .querySelector(".taskDeleteBtn")
      .addEventListener("click", function (event) {
        // console.log("salam");
        event.target.parentElement.remove();
        // console.log(e.target.parentElement);
      });
  }
  console.log(document.querySelector(".taskDeleteBtn"));
});

deleteBtn.addEventListener("click", function () {
  tasksList.innerHTML = "";
});

// console.log(document.querySelector(".taskDeleteBtn"));

// function delete_row(e) {
//     e.parentElement.remove();
// }
