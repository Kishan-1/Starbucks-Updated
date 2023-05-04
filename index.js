var icon = document.getElementById("icon");

function theme() {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

// if (localStorage.getItem("mode") == "light") {
//   icon.onclick = darkMode();
// } else {
//   icon.onclick = lightMode();
// }
// function darkMode() {
//   localStorage.setItem("mode", "dark");
//   document.body.classList.add("darkTheme");
//   if (document.body.classList.contains("darkTheme")) {
//     icon.src = "images/sun.png";
//   }
// }

// function lightMode() {
//   localStorage.setItem("mode", "light");
//   document.body.classList.remove("darkTheme");
//   if (document.body.classList.contains("")) {
//     icon.src = "images/moon.png";
//   }
// }

function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("wrap").style.opacity = "0.1";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("wrap").style.opacity = "1";
}

var cpnCode = document.getElementById("cpnCode");
var cpnBtn = document.getElementById("cpnBtn");
cpnBtn.onclick = function () {
  console.log("Hi");
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = "COPIED";
  setTimeout(function () {
    cpnBtn.innerHTML = "COPY CODE";
  }, 3000);
};
