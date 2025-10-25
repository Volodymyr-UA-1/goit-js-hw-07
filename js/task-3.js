
const enterName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

enterName.addEventListener("input", (ev) => {
    ev.preventDefault();
  if (enterName.value.trim() === "") {
    outName.textContent = "Anonymous";
  } else {
     outName.textContent = enterName.value.trim();
  }
});
