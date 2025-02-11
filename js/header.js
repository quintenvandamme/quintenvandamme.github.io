// initialize the canvas
const header = document.getElementById("header");
var ctx = header.getContext("2d");

// Set the width and height of the canvas
const width = window.innerWidth;
const height = 80;
header.width = width;
header.height = height;

// width and height of each pixel
const pixel = 20;

// update time in milliseconds
const time = 1000;

// color
let r = 3;
let g = 5;
let b = 72;
const intensityThreshold = 0.3;

// font
const fontSize = 50;

function resize() {
  header.width = window.innerWidth;
}

function getColor() {
  const intensity =
    Math.random() * (1 - intensityThreshold) + intensityThreshold;

  let red = 255 - (255 - r) * intensity;
  let green = 255 - (255 - g) * intensity;
  let blue = 255 - (255 - b) * intensity;
  return `rgb(${red}, ${green}, ${blue})`;
}

function setRandomColor() {
  r = Math.random() * 255;
  g = Math.random() * 255;
  b = Math.random() * 255;
}

function draw() {
  // Calculate the amount of pixels that fit in the width and height
  let amountPixelWidth = header.width / pixel;
  if (amountPixelWidth % 1 !== 0) {
    amountPixelWidth += 1;
  }

  let amountPixelHeight = header.height / pixel;
  if (amountPixelHeight % 1 !== 0) {
    amountPixelHeight += 1;
  }

  // Draw the grid
  for (let i = 0; i < amountPixelWidth; i++) {
    for (let j = 0; j < amountPixelHeight; j++) {
      // generate random color
      const color = getColor();
      ctx.fillStyle = color;
      ctx.fillRect(i * pixel, j * pixel, pixel, pixel);
    }
  }

  // draw the text
  ctx.font = fontSize + 'px "micro 5"';
  ctx.fillStyle = "white";
  ctx.fillText("Quinten Van Damme", 60, height - 5 - fontSize / 2);
}

function clear() {
  ctx.clearRect(0, 0, header.width, header.height);
}

function update() {
  clear();
  window.addEventListener("resize", resize);
  draw();
}

setRandomColor();
update();
setInterval(update, time);
