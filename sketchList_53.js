function setup() {
  createCanvas(720, 360);
  background(0);
  strokeWeight(20);
  frameRate(2);
}

function draw() {
  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r);
    line(i, 0, i, height);
  }
}
