let cards = Array.from(document.getElementsByClassName("card"));
let sliderBLOCK = document.getElementsByClassName("reviews")[0];
let reviews = Array.from(document.getElementsByClassName("review"));
let markers = Array.from(document.getElementsByClassName("marker"));
let currentSlide = 0;
let lastSlide = 2;
let twoTouches = [];

highlight();

sliderBLOCK.addEventListener("touchstart", touchstart);
sliderBLOCK.addEventListener("touchend", touchend);
document.getElementById("leftReview").addEventListener("click", goLeft);
document.getElementById("rightReview").addEventListener("click", goRight);

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    if (e.target.classList.contains("button")) {
      let allButtons = Array.from(document.getElementsByClassName("button"));
      let allCards = Array.from(document.getElementsByClassName("card"));
      console.log(allButtons);
      allButtons.forEach((button) => {
        button.classList.remove("active");
      });
      e.target.classList.add("active");
      allCards.forEach((cards) => {
        cards.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  });
});

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

  highlight();
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
  highlight();
}

function setAllReviews() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.order = i + 1;
  }
}

function highlight() {
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
  reviews.forEach((review, index) => {
    if (index == 0) {
      review.classList.add("active");
    }
    if (index > 0) {
      review.classList.remove("active");
    }
  });
}

function touchstart(event) {
  let rect = sliderBLOCK.getBoundingClientRect();
  twoTouches.push(event.clientX - rect.left);
}
function touchend(event) {
  let rect = sliderBLOCK.getBoundingClientRect();
  twoTouches.push(event.clientX - rect.left);

  if (twoTouches[0] > twoTouches[1]) {
    goRight(event);
  } else if (twoTouches[0] < twoTouches[1]) {
    goLeft(event);
  }

  twoTouches = [];
}
