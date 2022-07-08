function searchWork(e) {
  e.preventDefault();
  let workName = document.querySelector(".search-field").value;
  let workName1;
  if (workName[0].toUpperCase() !== workName[0]) {
    workName1 = workName.charAt(0).toUpperCase() + workName.slice(1);
  } else {
    workName1 = workName.charAt(0).toLowerCase() + workName.slice(1);
  }

  let works = document
    .querySelector(".jobs-card")
    .getElementsByClassName("nameJobsTittle")[0].innerHTML;

  let work = document.querySelectorAll(".jobs-card");

  for (let item of work) {
    if (
      item
        .getElementsByClassName("nameJobsTittle")[0]
        .innerHTML.includes(`${workName}`) ||
      item
        .getElementsByClassName("nameJobsTittle")[0]
        .innerHTML.includes(`${workName1}`)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

//---------------------------------------------------------------------

function yoxla() {
  let work = document.querySelectorAll(".jobs-card");
  let itemFilter = document.querySelectorAll("#check");
  for (let item of work) {
    item.style.display = "none";
  }
  let say = 0;

  for (let itemCheck of itemFilter) {
    if (itemCheck.checked) {
      say++;
      for (let item of work) {
        if (
          item.getElementsByClassName("tagsJobs")[0].firstElementChild
            .innerHTML == itemCheck.className
        ) {
          item.style.display = "block";
        }
      }
    }
  }
  if (say == 0) {
    for (let item of work) {
      item.style.display = "block";
    }
  }
}
