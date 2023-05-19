let stars = document.getElementById("stars");
let company = document.querySelector(".company");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let section = document.querySelector("section");

window.onscroll = function () {
  let val = scrollY;
  stars.style.left = val + "px";
  moon.style.top = val * 3 + "px";
  mountains3.style.top = val * 2 + "px";
  mountains4.style.top = val * 1.5 + "px";
  river.style.top = val + "px";
  boat.style.top = val + "px";
  boat.style.left = val * 3 + "px";
  company.style.fontSize = val + "px";
  if (scrollY >= 60) {
    company.style.fontSize = 60 + "px";
    company.style.position = "fixed";
    if (scrollY >= 350) {
      company.style.display = "none";
    } else {
      company.style.display = "block";
    }
    if (scrollY >= 127) {
      section.style.background = "linear-gradient(#376281, #10001f)";
    } else {
      section.style.background = "linear-gradient(#200016, #10001f)";
    }
  }
};
