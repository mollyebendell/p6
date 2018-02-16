/// <reference path="./p5.global-mode.d.ts" />
var x = mouseX;
var y = mouseY;
var z = x / 2;
var t = y / 2;

function setup() {
  // put setup code here
	createCanvas(800, 800);
}


function draw() {
	// put drawing code here
	fill(200);
	background(200);
	stroke(0, 0, 200);
	pentagram();
}

function pentagram() {
	line(z, 0, x / 2, y);
	line(x - z, 0, x / 2, y);
	line(0, y - t, x, y - t);
	line(0, y - t, x - z, 0);
	line(z, 0, x, y - t);

}