function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const image = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/ph-perfil-light.jpeg")
    image.setAttribute("alt", "foto de pedro fernandes dentro do carro de camisa preta, óculos escuros e barba fazendo sinal de paz e amor")
  } else {
    image.setAttribute("src", "./assets/ph-perfil.jpg")
    image.setAttribute("alt", "foto de pedro fernandes dentro do carro de camisa preta, óculos de grau e barba")
  }

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
}