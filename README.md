# Geo-Mapping

I have built a tool that will visualize the USGS earthquake data. United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

They collect a massive amount of data from all over the world each day, and I have tried to visualize their data in a meaningful way. 

Steps: 
1. Get the data set

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and picked a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. I have used the URL of this JSON to pull in the data for my visualization.

2. Import & Visualize the Data

   Created a map using Leaflet that plots all of the earthquakes from this data set based on their longitude and latitude.

   * My data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

   * It includes popups that provide additional information about the earthquake when a marker is clicked.

   * Created a legend that provides context for the map data.

