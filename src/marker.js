const mapbox = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png"
};

// const map = new mapboxgl.Map({
//   container: "map",
//   center:  [-87.638873, 41.894728], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

const buildMarker = (type, coords) => {
  let markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapbox.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
