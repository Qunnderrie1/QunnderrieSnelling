const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const submitBtn = document.querySelector(".btn")

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

submitBtn.addEventListener('click', ()=>{
    alert("Your message has been sent!")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
}))