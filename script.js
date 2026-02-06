let step = 0;
const name = "Haram ❤️";

const questions = [
  `${name}, do you want to be my Valentine? 💖`,
  `${name}, will you go on a date with me? 🌹`,
  `${name}, can I keep you forever? 💍`
];

function nextQuestion(answer) {
  if (!answer) {
    alert(`Oh no 😢 But I still like you, ${name}`);
    return;
  }

  step++;

  if (step < questions.length) {
    document.getElementById("question").innerText = questions[step];
  } else {
    document.getElementById("question").innerText =
      `Yayyy ❤️ Happy Valentine’s Day ${name} 💕`;
    document.querySelector(".buttons").style.display = "none";
  }
}