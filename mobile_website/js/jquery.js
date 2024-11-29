$(document).ready(function () {
  // Class definition for Planet
  class Planet {
    constructor(name, image, color, radius, distance) {
      this.planetName = name;
      this.image = image;
      this.planetColor = color;
      this.planetRadiusKM = radius;
      this.distInMillionsKM = distance;
    }
  }

  // Array to store the planet objects
  var planets = [];

  // Fetch JSON file using AJAX
  $.ajax({
    type: "Get",
    url: "./data/planets.json",
    dataType: "json",
    success: function (data) {
      var planetList = data.solarSystem.planets;
      console.log("planetList", planetList);

      for (var i = 0; i < planetList.length; i++) {
        var planetData = planetList[i];
        var planet = new Planet(
          planetData.planetName,
          planetData.image,
          planetData.planetColor,
          planetData.planetRadiusKM,
          planetData.distInMillionsKM
        );
        planets.push(planet);
      }

      displayPlanetImages();

      // save planets to local storage
      console.log("planets", planets);
      localStorage.setItem("planets", JSON.stringify(planets));
    },
    error: function () {
      console.log("Failed to retrieve JSON file.");
    },
  });

  // Function to display planet images
  function displayPlanetImages() {
    var planetImagesDiv = $(".planet-images");

    for (var i = 0; i < planets.length; i++) {
      var planet = planets[i];
      var planetImage = $("<a>")
        .attr("href", "planet.html?id=" + i)
        .addClass("plant-link")
        .attr("id", i)
        .click(function () {
          var id = $(this).attr("id");
          localStorage.setItem("planet-id", id);
        })
        .append(
          $("<img>")
            .attr("src", "img/" + planet.image)
            .attr("alt", planet.name)
            .addClass("planet-image")
        );
      planetImagesDiv.append(planetImage);
    }
  }
});
