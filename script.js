let agencyButtons = Array.from(document.getElementsByClassName("agencyButton"));

let astronautsContainer = document.querySelector("#astronautsBox");

var astronautsGlobal = undefined;

fetch("https://api.spacexdata.com/v4/crew")
  .then((response) => {
    return response.json();
  })
  .then((astronauts) => {
    astronautsGlobal = astronauts;
  });
agencyButtons.forEach((element) => {
  element.addEventListener("click", function (event) {
    astronautsContainer.innerHTML = "";
    astronautsGlobal.forEach((astronaut) => {
      if (astronaut.agency === event.target.innerText) {
        astronautsContainer.innerHTML += `
      <div class="card col-3 mt-5" style="width: 18rem;">
        <img src="${astronaut.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${astronaut.name}</h5>
          <p class="card-text">Agency: ${astronaut.agency}<br>
          Wikipedia: <a>${astronaut.wikipedia}</a> </p>
          <a href="${astronaut.wikipedia}" class="btn btn-primary mt-auto">Check his:her wiki</a>
        </div>
      </div>
      `;
      }
    });
  });
});
