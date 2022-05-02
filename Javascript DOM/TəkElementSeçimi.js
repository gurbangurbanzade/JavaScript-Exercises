let result;
result = document.getElementById("title");
result = document.getElementById("title").id;
result = document.getElementById("title").className;
result = document.getElementById("title").classList;

//document.getElementById("title").style.display = "none";
document.getElementById("title").innerText = "<p>salam</p>";
document.getElementById("title").innerHTML = "<p>salam</p>";
result = document.querySelector("#title");
result = document.querySelector(".card-header");
result = document.querySelector("div");

result = document.querySelector("li");
result = document.querySelector("li:first-child");
result = document.querySelector("li:last-child");
result = document.querySelector("li:nth-child(2)");

console.log(result);
