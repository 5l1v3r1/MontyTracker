var map = L.map('map').setView([41.24477, -98.87695], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-i875mjb7',
	accessToken: 'pk.eyJ1IjoiZGF5cmV5IiwiYSI6IjY4ZDgwZjM0NGZkYzRhZDQzNDNiODRhZjBjZWU3NTYyIn0.Al5Z2LsmsshJqXJBisIbjA' 
}).addTo(map);



var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}



map.on('click', onMapClick);
addStudents(L);



