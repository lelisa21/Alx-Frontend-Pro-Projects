const submitBtn = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

function checkAnswer() {
  let correctAnswer = "4";
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

submitBtn.addEventListener("click", checkAnswer);
