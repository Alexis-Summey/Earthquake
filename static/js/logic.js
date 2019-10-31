// Tried loading API_KEY from the config.js but the file could not find it.
const API_KEY = "pk.eyJ1Ijoic2NhbGR3ZWxsMTEwNyIsImEiOiJjazFkbmRhOTIwYTNjM2lwNzBuZ2pnazZ3In0.houKZ5IE2cQ1kxFAnYn3hw";

  // Creating background of the map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

var APILink = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

// Creating map object
var myMap = L.map("map", {
  center: [39.2390, -97.7688],
  zoom: 4,
  layers: [lightmap]
});

lightmap.addTo(myMap);


//Load Data
d3.json('APILink', function(data) {
  
  //Create markers
 //var markers = L.markerClusterGroup();

  //for loop 
  for (var i = 0; i < data.data.length; i++) {

    // Set the data location property to a variable
    var location = data.data[i];
    
    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.city_latitude, location.city_longitude], {icon: ufoIcon})
        .bindPopup(data.data[i].summary));
       
    }

  }
  myMap.addLayer(markers);
});
