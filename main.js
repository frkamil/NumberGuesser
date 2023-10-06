document.getElementById("bbtn").addEventListener("click", ft);
document.getElementById("goodbtn").addEventListener("click", otlCorrectAns);
document.getElementById("betterbtn").addEventListener("click", sotlWrongAns);

function ft() {
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
  let number = document.getElementById("number").value;
  let msg = `${number}`;

  if (number && o1 && o2 && o3 && o4 && o5 && o6 && o7 && o8 & o9 && o10) {
    document.getElementById("output").innerHTML = msg;
  } else {
    alert(5666666666);
  }
}

function otlCorrectAns() {
  prompt(
    "Yay! I'm so glad I guessed correctly! Did you enjoy this experience?"
  );
  prompt("Is there any way I can improve?");
  alert("Thank you for your feedback.");
}

function sotlWrongAns() {
  prompt("Oh no! I'm sorry. Is there any way I can improve?");
  alert("Thank you for your feedback.");
}
