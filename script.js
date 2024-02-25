let nasaButton = document.querySelector("#nasaButton");
let esaButton = document.querySelector("#esaButton");
let jaxaButton = document.querySelector("#jaxaButton");

let astronautsContainer = document.querySelector("#astronautsBox");

var astronautsGlobal = undefined;

fetch("https://api.spacexdata.com/v4/crew")
  .then((response) => {
    return response.json();
  })
  .then((astronauts) => {
    astronautsGlobal = astronauts;
  });

nasaButton.addEventListener("click", function () {
  astronautsContainer.innerHTML = "";
  astronautsGlobal.forEach((astronaut) => {
    if (astronaut.agency === "NASA") {
      astronautsContainer.innerHTML += `
      <div class="card col-3 mt-5" style="width: 18rem;">
        <img src="${astronaut.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${astronaut.name}</h5>
          <p class="card-text">Agency: ${astronaut.agency}<br>
          Wikipedia: <a>${astronaut.wikipedia}</a> </p>
          <a href="#" class="d-block btn btn-primary mt-auto">Go somewhere</a>
        </div>
      </div>
      `;
    }
  });
});
esaButton.addEventListener("click", function () {
  astronautsContainer.innerHTML = "";
  astronautsGlobal.forEach((astronaut) => {
    if (astronaut.agency === "ESA") {
      astronautsContainer.innerHTML += `
      <div class="card col-3 mt-5" style="width: 18rem;">
        <img src="${astronaut.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${astronaut.name}</h5>
          <p class="card-text">Agency: ${astronaut.agency}<br>
          Wikipedia: <a>${astronaut.wikipedia}</a> </p>
          <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
        </div>
      </div>
      `;
    }
  });
});
jaxaButton.addEventListener("click", function () {
  astronautsContainer.innerHTML = "";
  astronautsGlobal.forEach((astronaut) => {
    if (astronaut.agency === "JAXA") {
      astronautsContainer.innerHTML += `
      <div class="card col-3 mt-5" style="width: 18rem;">
        <img src="${astronaut.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${astronaut.name}</h5>
          <p class="card-text">Agency: ${astronaut.agency}<br>
          Wikipedia: <a>${astronaut.wikipedia}</a> </p>
          <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
        </div>
      </div>
      `;
    }
  });
});
