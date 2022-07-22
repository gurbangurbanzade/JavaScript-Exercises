document.querySelector("#btnSearch").addEventListener("click", () => {
  let text = document.querySelector("#txtSearch").value;
  olkeYaz(text);
});

function olkeYaz(olkeAdi) {
  //
  // Olkenin ozu haqqinda melumatlar
  //
  fetch("https://restcountries.com/v2/name/" + olkeAdi)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Olke tapilmadi");
      }
      return response.json();
    })
    .then((data) => {
      let html = `
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <img src="${data[0].flags.png}" alt="" class="img-fluid" />
        </div>
        <div class="col8">
          <h3 class="card-tittle">${data[0].name}</h3>
          <hr />
          <div class="row">
            <div class="col-4">Əhali Sayı:</div>
            <div class="col-8">${(data[0].population / 1000000).toFixed(
              1
            )} milyon</div>
          </div>
          <div class="row">
            <div class="col-4">Rəsmi Dil:</div>
            <div class="col-8">${data[0].languages[0].name}</div>
          </div>
          <div class="row">
            <div class="col-4">Paytaxt:</div>
            <div class="col-8">${data[0].capital}</div>
          </div>

      </div>
    `;
      document.querySelector("#countryDetail").innerHTML = html;
      return data[0];
    })
    .then((qonsuOlke) => {
      //
      // Qonsu Olkenin ozu haqqinda melumatlar
      //

      if (qonsuOlke.borders == undefined) {
        console.log("salam");
        throw new Error("Qonsu olke yoxdur");
      }
      for (let olke of qonsuOlke.borders) {
        fetch(`https://restcountries.com/v3.1/alpha?codes=` + olke)
          .then((response) => response.json())
          .then((olkeAxtarilan) => {
            let html = `
          <div class="card-body">
          <div class="row">
            <div class="col-4">
              <img src="${
                olkeAxtarilan[0].flags.png
              }" alt="" class="img-fluid" />
            </div>
            <div class="col8">
              <h3 class="card-tittle">${olkeAxtarilan[0].name.common}</h3>
              <hr />
              <div class="row">
                <div class="col-4">Əhali Sayı:</div>
                <div class="col-8">${(
                  olkeAxtarilan[0].population / 1000000
                ).toFixed(1)} milyon</div>
              </div>
              <div class="row">
                <div class="col-4">Rəsmi Dil:</div>
                <div class="col-8">${Object.values(
                  olkeAxtarilan[0].languages
                )}</div>
                </div>
              <div class="row">
                <div class="col-4">Paytaxt:</div>
                <div class="col-8">${olkeAxtarilan[0].capital}</div>
              </div>
  
          </div>
          `;

            document
              .querySelector("#countryNeigDetail")
              .insertAdjacentHTML("beforeend", html);
          });
      }
    })
    .catch((err) => console.log(err));
}
