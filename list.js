src="https://maps.googleapis.com/maps/api/js?key=c60345e170msh3ba019454a286afp1db6e3jsn281038817a0a&callback=initMap"

var map;
 function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
 center: { lat: -34.397, lng: 150.644 },
 zoom: 8
 });
}

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://travel-advisor.p.rapidapi.com/photos/list?location_id=2233968&currency=USD&limit=50&lang=en_US",
    "url": "https://travel-advisor.p.rapidapi.com/hotels/list?location_id=293919&adults=1&rooms=1&nights=2&offset=0&currency=USD&order=asc&limit=30&sort=recommended&lang=en_US",
	"url": "https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
    "url": "https://travel-advisor.p.rapidapi.com/locations/search?query=pattaya&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
    "method": "GET",
	"headers": {
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
		"X-RapidAPI-Key": "c60345e170msh3ba019454a286afp1db6e3jsn281038817a0a"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});