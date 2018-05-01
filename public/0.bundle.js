(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/marker.js":
/*!***********************!*\
  !*** ./src/marker.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mapbox = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n\nconst iconURLs = {\n  hotel: \"http://i.imgur.com/D9574Cu.png\",\n  restaurant: \"http://i.imgur.com/cqR6pUI.png\",\n  activity: \"http://i.imgur.com/WbMOfMl.png\"\n};\n\n// const map = new mapboxgl.Map({\n//   container: \"map\",\n//   center:  [-87.638873, 41.894728], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago\n//   zoom: 12, // starting zoom\n//   style: \"mapbox://styles/mapbox/streets-v10\" // mapbox has lots of different map styles available.\n// });\n\nconst buildMarker = async (type, coords) => {\n  let markerDomEl = document.createElement(\"div\");\n  markerDomEl.style.width = \"32px\";\n  markerDomEl.style.height = \"39px\";\n  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;\n  return new mapbox.Marker(markerDomEl).setLngLat(coords);\n};\n\nmodule.exports = buildMarker;\n\n\n//# sourceURL=webpack:///./src/marker.js?");

/***/ })

}]);