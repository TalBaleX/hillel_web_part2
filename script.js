let username = document.querySelector("#nameInput");
let age = document.querySelector("#ageInput");
let cookieTime = document.querySelector("#cookieTimeInput");
let submit = document.querySelector("button");

let loadName = getCookie("username");
let loadAge = getCookie("age");

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  let cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

submit.addEventListener("click", function () {
  setCookie("username", username.value, cookieTime.value);
  setCookie("age", age.value, cookieTime.value);
});
if (loadName != null && loadAge != null) {
  document.write(loadName + "<br>");
  document.write(loadAge);
}
