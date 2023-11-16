function win() {
    res = document.getElementById("result");
    w = localStorage.getItem("winner");
    res.textContent = "Your latest result is: " + w;

    table = document.getElementById("tbody");
    let results =  getResults()
    console.log(results[0])
}

async function getResults() {
    const response = await fetch('/api/results', {
    method: 'GET'});
  results = await response.json()

  for (let i = 0; i<results.length; i++){
    row = table.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);

    cell1.innerHTML = results[i].question;
    cell2.innerHTML = results[i].winner;
    cell3.innerHTML = results[i].name;
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