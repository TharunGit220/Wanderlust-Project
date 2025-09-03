
console.log(window.username); 
console.log(window.coordinates.lat);
console.log(window.coordinates.lng);
// Initialize and add the map
function initMap() {
const center = { lat: window.coordinates.lat, lng: window.coordinates.lng }

const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
});

new google.maps.Marker({
    position: center,
    map: map,
    title: "Hello San Francisco!",
});
}


