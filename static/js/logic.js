// Creating map object
var map = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(map);


// USGS link to earthquake data
// Link to all week's earthquakes data updated every min
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Choose 6 colors from the color picker
colors = ["#89f442", "#d9f441", "#f4df41", "#f4be41", "#f98a34", "#f44341"];

// Creating a function to give the circles the color based on the magnitude variable
function chooseColor(mag) {
  // Set the default color
  color = "white";
  // condition to change color based on magnitude range
  if (mag < 1 ) {
    color = colors[0]
  } else if (mag < 2) {
    color = colors[1]
  } else if (mag < 3) {
    color = colors[2]
  } else if (mag < 4) {
    color = colors[3]
  } else if (mag < 5) {
    color = colors[4]
  } else {
    color = colors[5]
  }
  
  return color;
} ;


// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    // Creating the pointToLayer funcion to add circle markers
    pointToLayer: function (feature, latlng) {
      // return L.circleMarker(latlng, geojsonMarkerOptions);
      return L.circleMarker(latlng, 
        {
          fillOpacity: 0.75,
          weight: 1,
          color: "#000",
          // Call the chooseColor function to fill the color based on magnitude
          fillColor: chooseColor(feature.properties.mag),
          // Adjust radius
          radius: feature.properties.mag * 3
        }).bindPopup("<h3>" + feature.properties.place + "</h3> <hr> <h3>Magnitude: " + feature.properties.mag + "</h3>");
    }
  }).addTo(map);
  
});


// // labels for the legend 
labels = ['0-1', '1-2', '2-3', '3-4', '4-5', '5+'];

// Adding the legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
 
    // loop through our colors and generate a label with a colored square for each color
    for (var i = 0; i < colors.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' + labels[i] + '<br>';
    }

    return div;
  };

// Add legend to the map
legend.addTo(map);

