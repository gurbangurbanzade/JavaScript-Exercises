let tableBody = document.querySelector("tbody");
let sunay = "https://northwind.vercel.app/api/products";
axios(sunay).then((res) => {
  let apiArr = res.data;

  // table yarandi
  apiArr.forEach((item) => {
    // console.log(item);
    let rowTable = `
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.quantityPerUnit}</td>
<td><button class="btn btn-warning editBtn">Edit</button></td>
<td>
  <button class="btn btn-danger delBtn">Delete</button>
</td>
<td>
<button
type="button"
class="btn btn-primary editBtn"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
>
Edit Modal
</button> 
</td>




</tr>
`;
    tableBody.innerHTML += rowTable;
  });

  // delete
  let delBtn = document.querySelectorAll(".delBtn");
  //   console.log(delBtn);
  delBtn.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
      axios.delete(
        "https://northwind.vercel.app/api/products" +
          "/" +
          `${e.target.parentElement.parentElement.children[0].innerText}`
      );
    });
  });

  // edit

  let selecetId = document.querySelector(".selecetId");
  let selecetName = document.querySelector(".selecetName");
  let selecetIdQuant = document.querySelector(".selecetIdQuant");
  let editSuccesBtn = document.querySelector(".editSuccesBtn");

  let editBtn = document.querySelectorAll(".editBtn");
  //   console.log(delBtn);
  editBtn.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement;
      console.log(e.target.parentElement.parentElement.children);

      selecetId.value =
        e.target.parentElement.parentElement.children[0].innerText;
      selecetName.value =
        e.target.parentElement.parentElement.children[1].innerText;
      selecetIdQuant.value =
        e.target.parentElement.parentElement.children[2].innerText;
    });
  });

  // succes edit

  editSuccesBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(selecetId.value);
    // console.log(selecetName.value);
    // console.log(selecetIdQuant.value);

    // console.log(tableBody.children);

    for (let row of tableBody.children) {
      //   console.log(row.children[0].innerText);
      if (selecetId.value == row.children[0].innerText) {
        console.log(row.children[0]);

        row.children[1].innerText = selecetName.value;
        row.children[2].innerText = selecetIdQuant.value;
      }
    }

    axios.patch(
      "https://northwind.vercel.app/api/products" + "/" + `${selecetId.value}`,
      {
        name: selecetName.value,
        quantityPerUnit: selecetIdQuant.value,
      }
    );
  });

  let searchNameInput = document.querySelector(".searchNameInput");

  searchNameInput.addEventListener("input", function () {
    console.log("salam");
    tableBody.innerHTML = "";

    // table yarandi
    apiArr.forEach((item) => {
      if (
        searchNameInput.value.toUpperCase() ==
        item.name.toUpperCase().slice(0, searchNameInput.value.length)
      ) {
        // console.log(item);
        let rowTable = `
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.quantityPerUnit}</td>
<td><button class="btn btn-warning editBtn">Edit</button></td>
<td>
  <button class="btn btn-danger delBtn">Delete</button>
</td>
<td>
<button
type="button"
class="btn btn-primary editBtn"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
>
Edit Modal
</button> 
</td>




</tr>
`;
        tableBody.innerHTML += rowTable;
      }
    });
  });
});
