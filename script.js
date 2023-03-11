function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logolight.jpg")
    img.setAttribute("alt", "Logo de um anime aí ")
  } else {
    img.setAttribute("src", "./assets/logobuy.png")
    img.setAttribute("alt", "Logo do toge de Jujutsu Kaisen")
  }
}
