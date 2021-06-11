const cards = document.querySelectorAll(".card")
const toggle = document.querySelector(".toggle")
const month = document.querySelectorAll(".month")
const year = document.querySelectorAll(".year")

cards.forEach(card => {
   card.addEventListener("click", e => {
      cards.forEach(card => {
         card.classList.remove("scale")
         card.style.opacity = ".6"
         card.children[1].style.color = "#fff"
         card.children[2].style.color = "#fff"
      })
      e.currentTarget.classList.add("scale")
      e.currentTarget.style.opacity = "1"
      e.currentTarget.children[1].style.color = "#ffd60a"
      e.currentTarget.children[2].style.color = "#ffd60a"
   })
})

toggle.addEventListener("click", e => {
   e.currentTarget.children[0].classList.toggle("float")
   month.forEach(el => el.classList.toggle("hide"))
   year.forEach(el => el.classList.toggle("hide"))
})