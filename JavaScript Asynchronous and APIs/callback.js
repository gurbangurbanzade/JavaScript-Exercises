document.querySelector("#btnSearch").addEventListener("click", () => {
  let text = document.querySelector("#txtSearch").value;
  olkeYaz(text);
  qonsuOlkeleriTap(text);
});

//
// Olkenin ozu haqqinda melumatlar
//
function olkeYaz(olkeAdi) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.com/v2/name/` + olkeAdi);
  request.send();
  // console.log(olkeAdi);
  request.addEventListener("load", function () {
    const olkeAxtarilan = JSON.parse(this.responseText);
    // console.log(olkeAxtarilan[0].borders);
    let html = `
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <img src="${olkeAxtarilan[0].flags.png}" alt="" class="img-fluid" />
        </div>
        <div class="col8">
          <h3 class="card-tittle">${olkeAxtarilan[0].name}</h3>
          <hr />
          <div class="row">
            <div class="col-4">Əhali Sayı:</div>
            <div class="col-8">${(
              olkeAxtarilan[0].population / 1000000
            ).toFixed(1)} milyon</div>
          </div>
          <div class="row">
            <div class="col-4">Rəsmi Dil:</div>
            <div class="col-8">${olkeAxtarilan[0].languages[0].name}</div>
          </div>
          <div class="row">
            <div class="col-4">Paytaxt:</div>
            <div class="col-8">${olkeAxtarilan[0].capital}</div>
          </div>
    
      </div>
    `;
    document.querySelector("#countryDetail").innerHTML = html;
  });
}
//
// Qonsu olkeler haqqinda melumatlar
//
function qonsuOlkeleriTap(olkeAdi) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.com/v2/name/` + olkeAdi);
  request.send();
  request.addEventListener("load", function () {
    const olkeAxtarilan = JSON.parse(this.responseText);
    for (let olke of olkeAxtarilan[0].borders) {
      console.log(olke);
      const request = new XMLHttpRequest();
      request.open("get", `https://restcountries.com/v3.1/alpha?codes=` + olke);
      request.send();
      request.addEventListener("load", function () {
        const olkeAxtarilan = JSON.parse(this.responseText);
        console.log(olkeAxtarilan[0]);

        // console.log(olkeAxtarilan[0].name.common);
        let html = `
        <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img src="${olkeAxtarilan[0].flags.png}" alt="" class="img-fluid" />
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
  });
}
