/// <reference path="./p5.global-mode.d.ts" />

function setup() {
  // put setup code here
  createCanvas(800, 800);
}


function draw() {
	// put drawing code here
	fill(0);
	stroke(255, 0, 255);
	rect(mouseX-(1/2*mouseX), mouseY-(1/2*mouseY), mouseX, mouseY); //cursor in middle of shape - shape bigger as you get closer to bottom right
}