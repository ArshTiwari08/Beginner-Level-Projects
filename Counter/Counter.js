// dom Object
let count = document.getElementById("count");
let incCount = document.getElementById("incCount");
let decCount = document.getElementById("decCount");
let reset = document.querySelector(".reset-btn")

// Counter Variable
let counter = 0;
let incrementClicks = 0;
let decrementClicks = 0;

// Increment function
function Increment(){
    counter++
    incrementClicks++

    count.innerText = counter;
    incCount.innerText = incrementClicks;
}
// For the decrement function
function Decrement(){
    counter--;
    decrementClicks++

    count.innerText = counter;
    decCount.innerText = decrementClicks;
}
// for the Reset btn
reset.addEventListener("click", () => {
    counter = 0;
    incrementClicks = 0;
    decrementClicks = 0;

    count.innerText = counter;
    incCount.innerText = incrementClicks;
    decCount.innerText = decrementClicks;
    alert("Counter reset successfully.")
});
