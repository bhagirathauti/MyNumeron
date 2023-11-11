//generation of random numbers
const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")

let n1 = Math.round(Math.random()*100)
let n2 = Math.round(Math.random()*100)

num1.innerText=n1;
num2.innerHTML=n2;

//initialising symbols
const greaterThan = document.getElementById("greater-than")
const equalsTo = document.getElementById("equals-to")
const lesserThan = document.getElementById("lesser-than")
let score = 0;
greaterThan.addEventListener("click",()=>{
    if(n1>n2){
        score++;
        resetTimer(timerId)
    }
    else{
        window.location.href="./game-over.html"
    }
    n1 = Math.round(Math.random()*100)
    num1.innerHTML = n1;
    n2 = Math.round(Math.random()*100)
    num2.innerHTML = n2;
})
equalsTo.addEventListener("click",()=>{
    if(n1==n2){
        score++;
        resetTimer(timerId)
    }
    else{
        window.location.href="./game-over.html"
    }
    n1 = Math.round(Math.random()*100)
    num1.innerHTML = n1;
    n2 = Math.round(Math.random()*100)
    num2.innerHTML = n2;
})
lesserThan.addEventListener("click",()=>{
    if(n1<n2){
        score++;
        resetTimer(timerId)
    }
    else{
        window.location.href="./game-over.html"
    }
    n1 = Math.round(Math.random()*100)
    num1.innerHTML = n1;
    n2 = Math.round(Math.random()*100)
    num2.innerHTML = n2;
})
const timer = document.getElementById("timer")
var timerId;
function startTimer(){
    let time = 5
    timer.innerHTML=time;
    timerId=setInterval(()=>{
        time--;
        if(time==0){
            window.location.href="./game-over.html"
        }
        timer.innerHTML=time;
    },1000)
    localStorage.setItem("scoree",score)
}
function resetTimer(timerId){
    clearInterval(timerId)
    startTimer()
}
startTimer()