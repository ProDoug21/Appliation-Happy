const options = {
  dragging: false,
  touchZone: false,
  doubleClickzoom: false,
  scrollwheelzoom: false,
  zoomControl: false,
};

//get values from html 
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// create map
const map = L.map("mapid", options).setView([lat,lng], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([lat, lng], { icon })
.addTo(map);

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
