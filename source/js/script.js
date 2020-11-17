const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

function burger() {
  iconMenu.classList.toggle("active");
  menuBody.classList.toggle("active");
  document.body.classList.toggle("lock");
}

iconMenu.addEventListener("click", burger);

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
