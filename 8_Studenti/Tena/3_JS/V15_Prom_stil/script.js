var liEls = document.querySelectorAll("li");
for (var i = 0; i < liEls.length; i++) {
  liEls[i].style.listStyleType = "decimal";
}
var infoEl = document.querySelector(".info");
infoEl.classList.add("hide");

var bodyEl = document.querySelector("body");
var bodyStyles = window.getComputedStyle(bodyEl, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

var marginNum = parseInt(marginLeft);
var reverse = false;

function frame() {
  if (reverse) {
    marginNum--;
  } else {
    marginNum++;
  }
  if (marginNum === 30) reverse = true;
  if (marginNum === 0) reverse = false;
  bodyEl.style.margin = marginNum + "px";
}
var intId = setInterval(frame, 200);
clearInterval(intId);
