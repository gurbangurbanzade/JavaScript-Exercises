const request = new XMLHttpRequest();

request.open("get", "https://restcountries.com/v2/name/azerbaijan");
request.send();

request.addEventListener("load", function () {
  let data = this.responseText;
  console.log(data);
  console.log(typeof data);
});
