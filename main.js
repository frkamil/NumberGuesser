document.getElementById("btn").addEventListener("click", madlib);
document.getElementById("btn2").addEventListener("click", correctAns);
document.getElementById("btn3").addEventListener("click", wrongAns);

function madlib() {
  // INPUT
  let o1 = document.getElementById("1").value;
  let o2 = document.getElementById("2").value;
  let o3 = document.getElementById("3").value;
  let o4 = document.getElementById("4").value;
  let o5 = document.getElementById("5").value;
  let o6 = document.getElementById("6").value;
  let o7 = document.getElementById("7").value;
  let o8 = document.getElementById("8").value;
  let o9 = document.getElementById("9").value;
  let o10 = document.getElementById("10").value;
  let o11 = document.getElementById("11").value;
  let number = document.getElementById("Number").value;
  let msg = `${number}`;
  if (
    1000 >= number &&
    number >= 0 &&
    (o1 === 1 || 2) &&
    (o2 === 1 || 2) &&
    (o3 === 1 || 2) &&
    (o4 === 1 || 2) &&
    (o5 === 1 || 2) &&
    (o6 === 1 || 2) &&
    (o7 === 1 || 2) &&
    (o8 === 1 || 2) &&
    (o9 === 1 || 2) &&
    (o10 === 1 || 2) &&
    (o11 === 1 || 2)
  ) {
    document.getElementById("output").innerHTML = msg;
  } else {
    alert("Please fill out all fields of information!");
  }
}

function correctAns() {
  prompt(
    "Yay! I'm so glad I guessed correctly! Did you enjoy this experience?"
  );
  prompt("Is there any way I can improve?");
  alert("Thank you for your feedback.");
}

function wrongAns() {
  prompt("Oh no! I'm sorry. Is there any way I can improve?");
  alert("Thank you for your feedback.");
}
