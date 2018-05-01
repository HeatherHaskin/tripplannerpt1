console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFoYW4iLCJhIjoiY2pnbzNvaWw2MDEzcDMzbXVvNHB4dWRvdCJ9.xURI-1BJa3s63MVDhvbaQg';

const map = new mapboxgl.Map({
  container: "map",
  center:  [-87.638873, 41.894728], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activity', [-87.638873, 41.894728]); // or [-87.6354, 41.8885]
console.log('Marker: ', marker);
marker.addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat( [-87.638873, 41.894728]).addTo(map);
