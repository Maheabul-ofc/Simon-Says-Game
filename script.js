let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("The game has started");
        started = true;
        levelUp();       
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level: ${level}`;
    let randInx = Math.floor(Math.random() * 4);
    let randcolor = btns[randInx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        // let hgScore = hgScrArr.length;
        // if(hgScore >= level){
        //     hgScore = hgScore;
        // }else{
        //     hgScore = level;
        // }
        checkHg();
        h2.innerHTML = `Game over! Your score was: <b>${level}</b> <br> Your best score: <b>${hgScore}</b> <br> Press any key to start.`;
        document.querySelector("body").style.background = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        })
        reset();
    }
}

function btnpress() {
    let btn = this;
    userFlash(btn);
    userColour= btn.getAttribute("id");
    userSeq.push(userColour);
    
    checkAns(userSeq.length-1);
}

let allbts = document.querySelectorAll(".btn");

for(btn of allbts) {
    btn.addEventListener("click",btnpress)
}
let hgScrArr = gameSeq;
let hgScore = hgScrArr.length;
function checkHg() {
    if(hgScore >= level){
        hgScore = hgScore;
    }else{
        hgScore = level;
    }
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}