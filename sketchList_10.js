function setup() {
	var d = 70;
	var p1 = d;
	var p2 = p1 + d;
	var p3 = p2 + d;
	var p4 = p3 + d;
	console.log(d,p1,p2,p3,p4);

	createCanvas(720,400);
	background(0);
	noSmooth();

	translate(140,0);

	stroke(153);
	line(p3,p3,p2,p3);
	line(p2,p3,p2,p2);
	line(p2,p2,p3,p2);
	line(p3,p2,p3,p3);

	stroke(255);
	point(p1,p1);
	point(p1,p3);
	point(p2,p4);
	point(p3,p1);
	point(p4,p2);
	point(p4,p4);
}
