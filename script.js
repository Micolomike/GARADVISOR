let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -48.785, lng: 2.607 },
    zoom: 8,
  });
}
