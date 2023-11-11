const playAgain = document.getElementById("playAgain")
const scoreBox = document.getElementById("score")
let passcode = localStorage.getItem("scoree")
scoreBox.innerHTML=passcode;
playAgain.onclick=()=>{
    window.location.href="./index.html"
}