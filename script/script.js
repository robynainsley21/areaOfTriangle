const areaOutput = document.querySelector("[output]");
const base = document.getElementById("base");
const height = document.getElementById("height");
const calcBtn = document.querySelector("[calcBtn]");

calcBtn.addEventListener("click", (event) => {
    event.preventDefault()
  let baseValue = base.value;
  let heightValue = height.value;

  let result = (1 / 2) * baseValue * heightValue;

  areaOutput.value = result;
});
