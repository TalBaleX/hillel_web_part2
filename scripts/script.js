var CURRENTcat = undefined;

class Cat {
  constructor(poroda, age, name, gender, color, sleepingStatus, image) {
    this.poroda = poroda;
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.color = color;
    this.sleepingStatus = sleepingStatus;
    this.image = image;
  }

  askForFood() {
    if (this.sleepingStatus != false) {
      console.log(this.name, +"каже:", " Хочу їсти!");
    } else {
      console.log("Я ще сплю!");
    }
  }
  sleep() {
    this.sleepingStatus = true;
  }
  wakeUp() {
    this.sleepingStatus = false;
  }
}

const vasya = new Cat(
  "порода1",
  4,
  "Вася",
  "Чоловіча",
  "сірий",
  false,
  "./images/18289.jpg"
);
const funtik = new Cat(
  "порода2",
  8,
  "Фунтік",
  "Чоловіча",
  "Світло-корічневий",
  false,
  "./images/82675767-vertical-photo-of-single-small-kitten-cat-sits-on-tile-in-herbs-garden-with-thyme-in-front-and-chive.jpg"
);
const angela = new Cat(
  "порода3",
  6,
  "Анжела",
  "Жіноча",
  "Світло-сіра",
  false,
  "./images/d2f90a589fe69005364c26b00692cf7d.jpg"
);

let catsArray = [vasya, funtik, angela];

let catImg = document.querySelector(".imageCat");
let poroda = document.querySelector(".poroda");
let age = document.querySelector(".age");
let nickname = document.querySelector(".Name");
let gender = document.querySelector(".gender");
let color = document.querySelector(".color");
let sleepStatus = document.querySelector(".SleepingStatus");

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
function showCat(event) {
  let number = event.target.id;
  CURRENTcat = number;
  number--;

  catImg.src = catsArray[number].image;
  catImg.alt = catsArray[number].image;

  poroda.textContent = "Порода:" + " " + catsArray[number].poroda;
  age.textContent = "Вік:" + " " + catsArray[number].age;
  nickname.textContent = "Кличка:" + " " + catsArray[number].name;
  gender.textContent = "Стать:" + " " + catsArray[number].gender;
  color.textContent = "Кольор:" + " " + catsArray[number].color;
  sleepStatus.textContent =
    catsArray[number].sleepingStatus == true
      ? "Статус(спить або не спить):" + " " + "Так"
      : "Статус(спить або не спить):" + " " + "Ні";
  for (i = 0; i < buttons.length; i++) {
    if (i == number) {
      buttons[i].style.background = "red";
    } else {
      buttons[i].style.background = "gray";
    }
  }
}

catImg.src = catsArray[0].image;
catImg.alt = catsArray[0].image;

poroda.textContent = "Порода:" + " " + catsArray[0].poroda;
age.textContent = "Вік:" + " " + catsArray[0].age;
nickname.textContent = "Кличка:" + " " + catsArray[0].name;
gender.textContent = "Стать:" + " " + catsArray[0].gender;
color.textContent = "Кольор:" + " " + catsArray[0].color;
sleepStatus.textContent =
  catsArray[0].sleepingStatus == true
    ? "Статус(спить або не спить):" + " " + "Так"
    : "Статус(спить або не спить):" + " " + "Ні";
buttons[0].style.background = "red";
