function setup() {
	createCanvas(720, 360);
	noStroke();
	background(0);

	var inside = color(204, 102, 0);
	var middle = color(204, 153, 0);
	var outside = color(153, 51, 0);

	// These statements are equivalent to the statements above.
	// Programmers may use the format they prefer.
	// var inside = color('#CC6600');
	// var middle = color('#CC9900');
	// var outside = color('#993300');

	push();
	translate(80, 80);
	fill(outside);
	rect(0, 0, 200, 200);
	fill(middle);
	rect(40, 60, 120, 120);
	fill(inside);
	rect(60, 90, 80, 80);
	pop();

	push();
	translate(360, 80);
	fill(outside);
	rect(0, 0, 200, 200);
	fill(middle);
	rect(40, 60, 120, 120);
	fill(inside);
	rect(60, 90, 80, 80);
	pop();
}
