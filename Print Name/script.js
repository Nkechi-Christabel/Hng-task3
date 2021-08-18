const clicked = document.querySelector(".click");
const displayName = document.querySelector(".display-name");

clicked.addEventListener("click", function () {
  displayName.style.opacity = 1;
  displayName.style.animation = "typeIn 4s steps(60, end)";
  clicked.style.opacity = 0;

  setTimeout(() => {
    displayName.style.width = 50 + "rem";
  }, 500);
});
