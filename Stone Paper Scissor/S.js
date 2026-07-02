
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#Comp-score");

let userScore = 0;
let compScore = 0;

const genComChoice = ()=>{
    const option =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drowGame = ()=>{
    console.log("Game was drow");
    msg.innerText = "Game Drow ! play Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner =(userWin,comChoice, userChoice)=>{
    if(userWin){
        msg.innerText = `You win! your ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "green";
        userScore++
        uScore.innerText = userScore;
        
    }else{
        msg.innerText = `You lose! Comp ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++
        cScore.innerText = compScore;
    }
}

const playGame = (userChoice) => {

    const comChoice = genComChoice();

    if (userChoice === comChoice) {
        drowGame();

    } else {
        let userWin = true;

        if (userChoice === "rock") {
            if(comChoice ==="paper"){
                userWin = false;
            }else{
                userWin = true
            }
        } else if (userChoice === "paper") {
            if(comChoice === "scissors"){
                userWin = false
            }else{
                userWin = true
            }
        } else {
            if(comChoice=== "rock"){
                userWin = false
            }else{
                userWin = true
            }
        }

        showWinner(userWin,comChoice, userChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});