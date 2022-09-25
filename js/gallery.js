const imgs = document.querySelectorAll("section img")

imgs.forEach((img, id) => {
  let currentDelay = 300
  img.style.animationDelay = `${currentDelay + id * 50}ms`
})

window.onload = function () {
  imgs.forEach(img => {
    if (img.offsetTop < window.innerHeight) {
      img.style.animationPlayState = "running"
      
    }
  })
}

window.addEventListener("scroll", function() {
  imgs.forEach(img => {
    if (img.offsetTop - (img.offsetTop / 2) < window.scrollY) {
      img.style.animationPlayState = "running"
      
    }
  })
})