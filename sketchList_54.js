var xoff = 0.0;
var xincrement = 0.01;

function setup() {
  createCanvas(720, 360);
  background(0);
  noStroke();
}

function draw() {
  // Create an alpha blended background
  fill(0, 10);
  rect(0, 0, width, height);

  // var n = random(0, width); // Try this line instead of noise

  // Get a noise value based on xoff scale
  // it according to the window's width
  var n = noise(xoff)*width;

  // width each cycle, increment xoff
  xoff += xincrement;

  // Draw the ellipse at the value produced by perlin noise
  fill(200);
  ellipse(n, height/2, 64, 64);
}