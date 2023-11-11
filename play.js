function submit() {
    const nameEl = document.querySelector("#count");
    localStorage.setItem("question", nameEl.value);
    displayQuestion();
  }

  function displayQuestion() {
    const questionEl = document.querySelector("#questionDisplay");
    const storedQuestion = localStorage.getItem("question");
    if (storedQuestion) {
      questionEl.textContent = storedQuestion;
    } else {
      questionEl.textContent = "Submit a question";
    }
  }
  window.onload = displayQuestion;


  const opt1 = document.getElementById('opt1');
  const opt2 = document.getElementById('opt2');
  const opt3 = document.getElementById('opt3');
  const opt4 = document.getElementById('opt4');
  const opt5 = document.getElementById('opt5');

    // Add a blur event listener to the first textbox
  opt1.addEventListener('blur', function () {
    // Automatically move focus to the second textbox
    opt2.focus();
  });