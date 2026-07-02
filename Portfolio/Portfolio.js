let Pro1 = document.querySelector(".P1")
let Pro2 = document.querySelector(".P2")
let Pro3 = document.querySelector(".P3")
let Pro4 = document.querySelector(".P4")
let Pro5 = document.querySelector(".P5")
let CV = document.querySelector(".mycv")
let linkin = document.querySelector("#lnkdn")
let github = document.querySelector("#Gthb")

// for project1
Pro1.addEventListener("click",()=>{
    window.open("../calculator/Calculator.html","_blank");
})
// for the project 2
Pro2.addEventListener("click",()=>{
    window.open("../Tik Tak Toe/Tik Tak toe.html","_blank");
})
// for the project 3
Pro3.addEventListener("click",()=>{
    window.open("../LoginPage/Log_page.html","_blank");
})
// for the project 4
Pro4.addEventListener("click",()=>{
    window.open("../Amazon/Amazon_Clone.html","_blank")
})

Pro5.addEventListener("click",()=>{
    window.open("../Stone Paper Scissor/Stone.html","_blank")
})
// to check the CV
CV.addEventListener("click", () => {
    window.open("Arsh_resume.pdf", "_blank");
});
// for the contact
document.addEventListener("DOMContentLoaded",()=>{
    const form =document.querySelector(".Info");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Thankyou ! for connecting with us")
        form.reset();
    });
});
// footer contant

linkin.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/arsh-tiwari-793586342/?skipRedirect=true","_blank")
})

github.addEventListener("click",()=>{
    window.open("https://github.com/ArshTiwari08","_blank")
})