function options(optiona, optionb){
    lbutton=document.getElementById("leftButton");
    rbutton=document.getElementById("rightButton");
    lbutton.innerHTML=optiona;
    rbutton.innerHTML=optionb;
    leftButton = optiona;
    rightButton = optionb;
}

let ops = [];
let leftButton = "";
let rightButton = "";

function getOptions(){
    ops.push(localStorage.getItem("option1"));
    ops.push(localStorage.getItem("option2"));
    ops.push(localStorage.getItem("option3"));
    ops.push(localStorage.getItem("option4"));
    ops.push(localStorage.getItem("option5"));
    options(ops[0], ops[1]);
    ops.splice(0, 2)
    console.log(ops)
}

function choose(isleft){
if (ops.length===0){
    winner= "";
    if (isleft){
        winner=leftButton;
    }
    else {
        winner=rightButton;
    }
    localStorage.setItem("winner", winner);
    window.location.href = "scores.html"
}
if (isleft) {
    options(leftButton, ops[0]);
}
else {
    options(ops[0], rightButton);
}
console.log(ops)
ops.splice(0, 1)
console.log(ops)

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