function olkeYaz(olkeAdi) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.com/v2/name/` + olkeAdi);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);

    // qonsular
    const qonsuOlkeler = data[0].borders.toString();
    const req = new XMLHttpRequest();
    req.open(
      "get",
      `https://restcountries.com/v3.1/alpha?codes=` + qonsuOlkeler
    );
    req.send();
    req.addEventListener("load", function () {
      const data = JSON.parse(this.responseText);
      console.log(data);
      olke(data);
    });
  });
}

function olke(data) {
  console.log(data);
  for (let country of data) {
    let card = document.querySelector(".olke");
    let cardItem = `
  <div class="card col-3" style="width: 18rem;">
  <img src="${country.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Ehali sayi: ${(
      country.population / 1000000
    ).toFixed(1)} milyon</li>
    <li class="list-group-item">Paytaxt: ${country.capital}</li>
    <li class="list-group-item">Region ${country.region}</li>
  </ul>
 
</div>

    `;
    card.insertAdjacentHTML("beforeend", cardItem);
  }
}

olkeYaz("italy");
