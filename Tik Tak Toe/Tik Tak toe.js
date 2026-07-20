let box = document.querySelectorAll(".box");
let rbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#start");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO =true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame =()=>{
    turnO =true;
    enablebox();
    msgCon.classList.add("hide")
}
box.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("the box is clicked now")
        if(turnO){
            box.classList.remove("wow")
            box.innerText="O";
            turnO = false;
        }else{
            box.classList.add("wow")
            box.innerText="X";
            turnO = true
        }
        box.disabled = true

        checkWinners()
    })
})
const disablebox = () => {
    for (let b of box) {
        b.disabled = true;
    }
};

const enablebox = () => {
    for (let b of box) {
        b.disabled = false;
        b.innerText= "";
    }
};

const  showWinner =(winner)=>{
    msg.innerText = `Congratulation, winner is ${winner}`
    msgCon.classList.remove("hide");
    disablebox();
}

const checkWinners=()=>{
    for (let pattern of winPatterns){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){

                showWinner(pos1Val);
            }
        }
    }
};
start.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);