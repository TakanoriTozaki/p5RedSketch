var max_distance;

function setup() {
  createCanvas(720, 360);
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(0);

  for (var i = 0; i <= width; i += 20) {
    for (var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 66;
      ellipse(i, j, size, size);
    }
  }
}
