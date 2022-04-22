function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "View less";
      moreText.style.display = "inline";
    }
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