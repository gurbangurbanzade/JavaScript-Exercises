let btn = document.querySelector(".customBtn");

btn.addEventListener("click", function checkInput() {
  let input = document.querySelector(".customInput");

  if (input.value == "") {
    $("#exampleModal").modal("show");
  }
});
