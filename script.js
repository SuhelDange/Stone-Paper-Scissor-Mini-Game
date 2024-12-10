let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


//comp Choices
const genCompChoice=()=>{
    const options =["stone","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

//draw game function
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw, play again";
};

//winnenrfunction
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
}

//play game function
const playGame=(userChoice)=>{
     console.log("user choice=",userChoice);
     const compChoice=genCompChoice();
     console.log("comp choice=",compChoice);

     if(userChoice===compChoice)
        drawGame(); //draw function
 else{
    let userWin=true;
    if(userChoice ==="stone"){
        //scisors,paper
        userWin= compChoice==="paper" ? false: true;
    } else if(userChoice==="paper"){
        //stone,scissors
        userWin=compChoice==="scissors"?false:true;
    } else{
        //stone,paper
        userWin=compChoice==="stone"?false:true;
    }
    showWinner(userWin)
}
};


//user Choices
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});