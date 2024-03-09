let colorInput = document.getElementById("colorInput");
let transInput = document.getElementById("transperencyInput");
let clearButton = document.getElementById("clearButton");

let sx = undefined;
let ex = undefined;

var c = document.getElementById("canvas");
var rect = c.getBoundingClientRect();
var ctx = c.getContext("2d");
var img = new Image();
img.src = "./images/istockphoto-610041376-612x612.jpg";
img.onload = () => {
  c.width = 612;
  c.height = 408;
  ctx.drawImage(img, 0, 0, 612, 408);
};
c.addEventListener("mousedown", function (e) {
  sx = e.clientX - rect.left;
  console.log(sx);
});
c.addEventListener("mouseup", function (e) {
  ex = e.clientX - rect.left;
  console.log(ex);
  createFilter();
});

clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  ctx.clearRect(0, 0, 612, 408);
  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, 612, 408);
});

function createFilter() {
  ctx.globalAlpha = transInput.value / 100;
  ctx.fillStyle = colorInput.value;
  ctx.fillRect(sx, 0, ex - sx, canvas.height);
}
