function submit() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
  }