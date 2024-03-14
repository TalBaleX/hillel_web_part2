let reviews = Array.from(document.getElementsByClassName("review"));
let markers = Array.from(document.getElementsByClassName("marker"));
let currentSlide = 0;
let lastSlide = 2;

highlightMarkers();

document.getElementById("leftReview").addEventListener("click", goLeft);
document.getElementById("rightReview").addEventListener("click", goRight);

markers.forEach((THISmarker) => {
  THISmarker.addEventListener("click", function () {
    let index = markers.indexOf(THISmarker);
    while (currentSlide != index) {
      goLeft(event);
    }
  });
});

function goLeft(event) {
  event.preventDefault();
  let last = reviews.pop();
  reviews.unshift(last);
  setAllReviews();
  if (currentSlide != 0) {
    currentSlide--;
  } else {
    currentSlide = 2;
  }
  if (lastSlide != 0) {
    lastSlide--;
  } else {
    lastSlide = 1;
  }

  highlightMarkers();
}

function goRight(event) {
  event.preventDefault();
  let first = reviews.shift();
  reviews.push(first);
  setAllReviews();
  if (currentSlide != 2) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  if (lastSlide != 2) {
    lastSlide++;
  } else {
    lastSlide = 0;
  }
  highlightMarkers();
}

function setAllReviews() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.order = i + 1;
  }
}

function highlightMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (i == currentSlide) {
      markers[i].classList.add("active");
      markers.forEach((marker) => {
        if (marker != markers[i]) {
          marker.classList.remove("active");
        }
      });
    }
  }
}
