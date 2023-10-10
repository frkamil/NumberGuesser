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
  let msg1 = `Kill me`;
  let number = document.getElementById("number").value;
  let msg = `${number}`;

  function death() {
    if (
      (o1 === 1 || o1 === 2) &&
      (o2 === 1 || o2 === 2) &&
      (o3 === 1 || o3 === 2) &&
      (o4 === 1 || o4 === 2) &&
      (o5 === 1 || o5 === 2) &&
      (o6 === 1 || o6 === 2) &&
      (o7 === 1 || o7 === 2) &&
      (o8 === 1 || o8 === 2) &&
      (o9 === 1 || o9 === 2) &&
      (o10 === 1 || o10 === 2)
    ) {
      document.getElementById("output").innerHTML = msg;
    } else {
      document.getElementById("output").innerHTML = msg1;
    }
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
