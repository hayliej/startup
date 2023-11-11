const opt1 = document.getElementById('opt1');
  const opt2 = document.getElementById('opt2');
  const opt3 = document.getElementById('opt3');
  const opt4 = document.getElementById('opt4');
  const opt5 = document.getElementById('opt5');

function submit() {
    const nameEl = document.querySelector("#count");
    localStorage.setItem("question", nameEl.value);
    displayQuestion();
    opt1.focus();
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


    // Add a blur event listener to the first textbox
  opt1.addEventListener('blur', function () {
    // Automatically move focus to the second textbox
    opt2.focus();
  });
  opt2.addEventListener('blur', function () {
    opt3.focus();
  });
  opt3.addEventListener('blur', function () {
    opt4.focus();
  });
  opt4.addEventListener('blur', function () {
    opt5.focus();
  });