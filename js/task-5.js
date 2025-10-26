function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector("button");
const changeColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  changeColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = changeColor.textContent;
});
