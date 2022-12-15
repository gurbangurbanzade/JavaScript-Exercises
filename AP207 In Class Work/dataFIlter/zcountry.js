let list = document.querySelector("ul");
let selectRegion = document.querySelector("select");

axios("https://restcountries.com/v2/all").then((res) => {
  console.log(res.data);
  let apiArray = res.data;
  selectRegion.addEventListener("change", function (e) {
    list.innerHTML = "";
    apiArray.forEach((cntr) => {
      if (cntr.region == e.target.value) {
        let listItem = `
<li>${cntr.name}</li>
`;
        list.innerHTML += listItem;
      }
    });
  });
});
