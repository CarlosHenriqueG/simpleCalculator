function addCharacter(character) {
  const displayNumber = document.querySelector(".display").value;

  document.querySelector(".display").value = displayNumber + character;
}

function cleanWindow() {
  document.querySelector(".display").value = content = "";
}

function inverterNumero() {
  const displayNumber = document.querySelector(".display").value;
  document.querySelector(".display").value = displayNumber * -1;
}

function calcular() {
  const displayNumber = document.querySelector(".display").value;
  document.querySelector(".display").value = eval(displayNumber)
}