$(document).ready(function () {
  var planets = JSON.parse(localStorage.getItem("planets"));
  var planetId = JSON.parse(localStorage.getItem("planet-id"));

  console.log(planets);
  console.log("planetId", planetId);

  for (var i = 0; i < planets.length; i++) {
    if (planetId === i) {
      console.log("ok");
      displayPlanetInfo(planets[i]);
    }
  }

  function displayPlanetInfo(planet) {
    $("#planet-info").css({
      height: "70vh",
      "background-image": "url(" + "../img/" + planet.image + ")",
      "background-repeat": "no-repeat",
      "background-position": "bottom",
      width: "100%",
      padding: "10px",
    });
    $("#planet-name")
      .html("" + planet.planetName)
      .css({
        margin: "0",
      });
    $("#planet-color").html("Color: " + planet.planetColor);
    $("#planet-radius").html("Radius: " + planet.planetRadiusKM + " km");
    $("#from-sun").html("From Sun: " + planet.distInMillionsKM.fromSun + " km");
    $("#from-earth").html("From Earth: " + planet.distInMillionsKM.fromEarth + " km");
  }

  function redirectToIndex() {
    alert("Invalid planet selection. Redirecting to planet selection page.");
    window.location.href = "index.html";
  }
});
