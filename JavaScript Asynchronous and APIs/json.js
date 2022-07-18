function olkeYaz(olkeAdi) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.com/v2/name/` + olkeAdi);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    // olke(data[0]);
  });
}

function olke(data) {
  let card = document.querySelector(".olke");
  let cardItem = `
  <div class="card col-3" style="width: 18rem;">
  <img src="${data.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Ehali sayi: ${(
      data.population / 1000000
    ).toFixed(1)} milyon</li>
    <li class="list-group-item">Paytaxt: ${data.capital}</li>
    <li class="list-group-item">Region ${data.region}</li>
  </ul>

</div>

    `;
  card.insertAdjacentHTML("beforeend", cardItem);
}

olkeYaz("azerbaijan");
olkeYaz("turkey");
olkeYaz("pakistan");
olkeYaz("ukrain");
