let number = prompt("what is 5*3-(2+4)");
let wrongCount = 0;

if (number < 9) {
  alert("Too low...");
  wrongCount++;
} else if (number > 9) {
  alert("Too high");
  wrongCount++;
} else {
  alert("Good Job!");
}

let year = prompt(
  "In which year was twitter released?"
);

if (year < 2006) {
  alert("Too early...");
  wrongCount++;
} else if (year > 2006) {
  alert("Too late");
  wrongCount++;
} else {
  alert("Exactly!");
}

if (wrongCount == 2) {
  alert("you lose!");
} else {
  let movie = prompt("Horror or Action");

  if (movie == "Action") {
    alert("watch IP Man");
  } else if (movie == "horror") {
    alert("watch The Grudge");
  } else {
    alert("you are boring");
  }
}


