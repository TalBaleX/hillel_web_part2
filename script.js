let cards = Array.from(document.getElementsByClassName("card"));
let sliderBLOCK = document.getElementsByClassName("reviews")[0];
let reviews = Array.from(document.getElementsByClassName("review"));
let markers = Array.from(document.getElementsByClassName("marker"));
let burgerMenu = document.getElementsByClassName("menuButton")[0];
let currentSlide = 0;
let lastSlide = 2;
let x1, x2;
let burgerSTATUS = false;

highlight();

sliderBLOCK.addEventListener("touchstart", touchstart);
sliderBLOCK.addEventListener("touchmove", touchmove);
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

burgerMenu.addEventListener("click", function () {
  if (burgerSTATUS == false) {
    document.getElementsByClassName("collapsingMenu")[0].style.display = "flex";
    burgerSTATUS = true;
  } else if (burgerSTATUS == true) {
    document.getElementsByClassName("collapsingMenu")[0].style.display = "none";
    burgerSTATUS = false;
  }
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
    review.style.marginLeft = 0;
    if (index > 0) {
      review.classList.remove("active");
      review.style.marginLeft = 20 + "px";
    }
  });
}

function touchstart(event) {
  event.preventDefault();
  let rect = sliderBLOCK.getBoundingClientRect();
  x1 = event.touches[0].clientX - rect.left;
}
function touchmove(event) {
  event.preventDefault();
  let rect = sliderBLOCK.getBoundingClientRect();
  x2 = event.touches[0].clientX - rect.left;
}
function touchend(event) {
  if (x1 > x2) {
    goRight(event);
  } else if (x1 < x2) {
    goLeft(event);
  }
}
