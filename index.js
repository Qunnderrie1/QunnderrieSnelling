const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const submitBtn = document.querySelector(".btn")
const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userMessage = document.getElementById("userMessage")


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

submitBtn.addEventListener('click', ()=>{
    
    if (userName.value == ""){
        alert("Please a value.")
    }else if(userEmail.value == ""){
        alert("Please enter a value")
    }else if(userMessage.value == ""){
        alert("Please enter a value")
    }
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
}))