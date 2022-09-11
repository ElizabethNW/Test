const skillItem = document.querySelectorAll(".faq_box")
const navItems = document.querySelector(".nav_items")
const bar = document.querySelector(".fa-bars")

skillItem.forEach(skill =>{
  skill.addEventListener("click", () =>{
    skill.querySelector(".items").classList.toggle("show-down")
  }) 
})

bar.addEventListener("click", (e) => {
  navItems.classList.toggle('active');
})