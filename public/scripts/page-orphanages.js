// create map
const map = L.map("mapid").setView([-27.2224718,-49.6493543], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [171, 2],
})


function addMarker(id, name, lat, lng) {

   

    const popup = L.popup({
        closeButton: false,
        className:"map-popup",
        minWidth:240,
        minHeight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg" > </a>`);
    
    
    
    
    L.marker([lat, lng], { icon })
    .addTo(map)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

console.log(orphanagesSpan)


orphanagesSpan.forEach(span => { 
 const orphanage = {
     id: span.dataset.id,
     name: span.dataset.name,
     lat: span.dataset.lat,
     lng: span.dataset.lng
 }
 
 addMarker(orphanage)
})
    
