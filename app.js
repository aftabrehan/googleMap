navigator.geolocation.getCurrentPosition(sucLocation, errLocation, {
  enableHighAccuracy: true,
});

function sucLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWZ0YWJyZWhhbiIsImEiOiJjbDA4cnNhOHMwMDFxM3BxZm52d2owajV0In0.XxRBRfyxKrarnkVZkoJHtQ";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center, // starting position
    zoom: 14, // starting zoom
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const diraction = new MapboxDiraction({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(diraction, "top-left");
}
