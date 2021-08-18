const clicked = document.querySelector(".click");
const displayName = document.querySelector(".display-name");
const mediaQuery = window.matchMedia("(min-width: 700px)");

clicked.addEventListener("click", function () {
  displayName.style.opacity = 1;
  clicked.style.opacity = 0;

  if (mediaQuery.matches) {
    displayName.style.animation = "typeIn 4s steps(60, end)";
  }
});
