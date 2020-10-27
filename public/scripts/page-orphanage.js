const options = {
  dragging: false,
  touchZone: false,
  doubleClickzoom: false,
  scrollwheelzoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-27.2224718, -49.6493543], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [171, 2],
});

L.marker([-27.2224718, -49.6493543], { icon }).addTo(map).bindPopup(popup);

/* IMAGE GALLERY*/

function selectImage(event) {
  const button = event.currentTarget
  console.log(button.children)

  // remover as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //selecionar a imagem clicada

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanege-details > img")

  //atualizar o conteiner de image

  imageContainer.src = image.src

  // adicionar a classe .active para esse botão

  button.classList.add("active")
}
