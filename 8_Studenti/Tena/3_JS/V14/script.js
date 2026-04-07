var h1El = document.querySelector("h1");
h1El.innerText = "Karlovac";

var descriptionE1 = document.querySelector(".description");
descriptionE1.innerHTML = "Grad na <h3>5 rijeka</hr>";

var infoE1 = document.querySelector(".info");
infoE1.innerText = "Peta rijeka je rakija";

var rijeke = ["Mreznica", "Kupa", "Korana", "Dobra", "Karlovacko"];
var footerE1 = document.querySelector("#footer");

for (var i = 0; i < rijeke.length; i++) {
  footerE1.querySelectorAll("li")[i].innerText = rijeke[i];
}
