let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("Game is started");
    started=true;

    levelup();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq =[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);
gameseq.push(randColor);
console.log(gameseq);
gameFlash(randbtn);}

function checkans(idx){

  
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length){
        setTimeout(levelup,1000);
      }
    }else{
         h2.innerHTML=`Game Over! your score is <b>${level}<b/> <br> press any key to start`;
         document.querySelector("body").style.backgroundColor='red';
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
         },150)
         reset();;
    }
}


function btnpress(){
     
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    
    userseq.push(userColor);
    checkans(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}