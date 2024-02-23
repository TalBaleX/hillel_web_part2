let time = document.querySelector(".time");
let submit = document.querySelector(".submit");
let deleteInterval = document.querySelector(".stopInterval");
let progressBar = document.querySelector(".progressBar");
let timeInterval = undefined;
let progressBarInterval = undefined;
let websiteTime = 0;

submit.addEventListener("click", function (event) {
  event.preventDefault();
  timeInterval = setInterval(timeMeasure, Number(time.value * 1000 * 60));
  progressBarInterval = setInterval(function () {
    websiteTime += 1000;
    progressBar.value = websiteTime / 60 / time.value / 1000;
  }, 1000);
});

deleteInterval.addEventListener("click", stopInterval);

function timeMeasure() {
  websiteTime = 0;
  alert(`Час розім'ятися, Ви працюєте ${Number(time.value)} хвилин!`);
}

function stopInterval(event) {
  event.preventDefault();
  clearInterval(timeInterval);
  clearInterval(progressBarInterval);
}
