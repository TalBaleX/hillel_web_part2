const _1Task = function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i <= 10; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
      console.log("1-ше завдання", arr[i]);
    }
  }
};

const _2Task = function () {
  let arr = [1, 2, 5, 9, 4, 13, 4, 10];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == 4) {
      console.log("2-ге завдання", "Наявний!");
      return;
    }
  }
};

const _3Task = function () {
  let arr = [3, 3, 2, 2, 1, 2, 2];
  let initialValue = 0;
  let res = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log("3-те завдання", res / arr.length);
};

const _4Task = function () {
  let arr = ["parrot", "bull", "bear", "monkey"];
  let initialValue = 0;

  let res = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.length,
    initialValue
  );

  console.log("4-те завдання", res / arr.length);
};

const _5Task = function () {
  let arr = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
  let initialValue = 0;

  let res = arr.filter((word) => typeof word === "string");

  console.log("5-те завдання", res);
};

_1Task();
_2Task();
_3Task();
_4Task();
_5Task();
