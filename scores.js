function win() {
    res = document.getElementById("result");
    w = localStorage.getItem("winner");
    res.textContent = "Your latest result is: " + w;

    table = document.getElementById("tbody");
    let variable =  [w];

    for (let i = 0; i<variable.length; i++){
        row = table.insertRow(0);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);

        cell1.innerHTML = i;
        cell2.innerHTML = variable[i];
        cell3.innerHTML = "date";
    }
}

function displayName() {
    const nameEl = document.querySelector("#name");
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      nameEl.textContent = storedName; //don't think this is working, not sure why yet
    } else {
      nameEl.textContent = "Login";
    }
  }
  window.onload = displayName;