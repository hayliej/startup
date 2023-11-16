function displayName() {
    const nameEl = document.querySelector("#name");
    const storedName = localStorage.getItem("userName");
    console.log(storedName);
    if (storedName) {
      nameEl.textContent = storedName; //don't think this is working, not sure why yet
    } else {
      nameEl.textContent = "Login";
    }
  }
  window.onload = displayName;