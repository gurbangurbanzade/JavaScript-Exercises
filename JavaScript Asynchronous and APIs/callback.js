document.querySelector("#btnSearch").addEventListener("click", () => {
  let text = document.querySelector("#txtSearch").value;
  olkeYaz(text);
});

function olkeYaz(olkeAdi) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.com/v2/name/` + olkeAdi);
  request.send();
  console.log(olkeAdi);
  //
  // Olkenin ozu haqqinda melumatlar
  //
  request.addEventListener("load", function () {
    const olkeAxtarilan = JSON.parse(this.responseText);
    console.log(olkeAxtarilan[0]);
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

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data[0]);

    // qonsular
    // const qonsuOlkeler = data[0].borders.toString();
    // console.log(qonsuOlkeler);
    // const req = new XMLHttpRequest();
    // req.open(
    //   "get",
    //   `https://restcountries.com/v3.1/alpha?codes=` + qonsuOlkeler
    // );
    // req.send();
    // req.addEventListener("load", function () {
    //   const data = JSON.parse(this.responseText);
    //   olke(data[0]);
    //   console.log(data[0]);
    // });
  });
}

function olke(data) {
  // console.log(data.name);
  let html = `
          
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <img src="${data.flags.png}" alt="" class="img-fluid" />
              </div>
              <div class="col8">
                <h3 class="card-tittle">${data.name}</h3>
                <hr />
                <div class="row">
                  <div class="col-4">Əhali Sayı:</div>
                  <div class="col-8">${1}</div>
                </div>
                <div class="row">
                  <div class="col-4">Rəsmi Dil:</div>
                  <div class="col-8">zczxzx</div>
                </div>
                <div class="row">
                  <div class="col-4">Paytaxt:</div>
                  <div class="col-8">zczxzx</div>
                </div>
         
            </div>
          `;
  document.querySelector("#countryDetail").innerHTML = html;
}

function qonsuOlkeler(data) {}
