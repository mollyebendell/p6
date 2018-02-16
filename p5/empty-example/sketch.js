/// <reference path="./p5.global-mode.d.ts" />

function setup() {
  // put setup code here
  createCanvas(400, 400);
}


function draw() {
	// put drawing code here
	fill(0);
	stroke(255, 0, 0);
	ellipse(mouseX, mouseY, 20, 20);
}