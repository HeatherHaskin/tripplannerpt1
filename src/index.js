console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFoYW4iLCJhIjoiY2pnbzNvaWw2MDEzcDMzbXVvNHB4dWRvdCJ9.xURI-1BJa3s63MVDhvbaQg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
