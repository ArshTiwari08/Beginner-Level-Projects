const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

function genColor(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervelID
function startChangeColor(){
    if(!intervelID)
        intervelID =setInterval(chnageBGcolor,1000)
    console.log("start")
    function chnageBGcolor(){
        document.body.style.backgroundColor = genColor()
    }
    
}
function stopChangeColor(){
    clearInterval(intervelID)
    console.log("stop")
    intervelID = null
}

start.addEventListener("click",startChangeColor)
stop.addEventListener("click",stopChangeColor)