let colors = ["tomato", "white", "green", "blue", "yellow"]
let bgcolor = document.querySelector(".main-text__color");

const button = document.querySelector("button");

button.addEventListener("click", onClickButton);

function onClickButton() {
    let index = Math.floor(Math.random() * 4 + 1);
    bgcolor.innerHTML = colors[index];
    bgcolor.style.color = colors[index];
    document.body.style.backgroundColor = colors[index];
}